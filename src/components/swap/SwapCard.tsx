"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ActivityIcon,
  ChevronDownIcon,
  PercentIcon,
  ShuffleIcon,
} from "lucide-react";
import SwapModal from "./SwapModal";
import Image from "next/image";
import { getTokenQuotes } from "@/Utils/quotes";
import { getAllTokenTradePairs } from "@/Utils/discovery";
import { ethers } from "ethers";
import SwapTokens from "@/Utils/swap";
import { useAccount } from "wagmi";
import { AlertSpinner } from "../spinner";

export interface Token {
  name: string;
  address: string;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI?: string;
  image: string;
  amount: string;
}

const SwapCard: React.FC = () => {
  const { address } = useAccount();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [baseToken, setBaseToken] = useState<Token>({
    name: "Celo",
    address: "0x471EcE3750Da237f93B8E339c536989b8978a438",
    symbol: "CELO",
    decimals: 18,
    chainId: 42220,
    image: "https://celo-org.github.io/celo-token-list/assets/celo_logo.svg",
    amount: "",
  });
  const [quoteToken, setQuoteToken] = useState<Token>({
    name: "",
    address: "",
    symbol: "",
    decimals: 0,
    chainId: 0,
    image: "",
    amount: "",
  });
  const [selectedOption, setSelectedOption] = useState<"base" | "quote" | "">(
    ""
  );
  const [quoteerror, setQuoteerror] = useState<string>("");
  const [baseTokenAmount, setBaseTokenAmount] = useState<string>("");
  const [quoteTokenAmount, setQuoteTokenAmount] = useState<string>("");
  const [openSpinner,setOpenSpinner] = useState<boolean>(false);
  const [enableSwap,setEnableSwap] = useState<boolean>(true)
  const { swap } = SwapTokens({
    tokenIn: baseToken.address as `0x${string}`,
    tokenOut: quoteToken.address as `0x${string}`,
    userAddress: address,
    tokenInAmount: baseToken.amount,
  });

  useEffect(() => {
    setBaseToken((prev) => {
      return { ...prev, amount: baseTokenAmount };
    });

    // setQuoteToken((prev) => {
    //   return { ...prev, amount: quoteTokenAmount };
    // });
  }, [baseTokenAmount, quoteTokenAmount]);

  useEffect(() => {
    console.log(baseToken);

    const allpairs = async () => {
      const pairs = await getAllTokenTradePairs();
      console.log("pairs", pairs);
    };
    // console.log(baseToken.amount)
    const getQuotes = async () => {
    
      const tokenIn = baseToken.address as `0x${string}`;
      const tokenOut = quoteToken.address as `0x${string}`;
      console.log("token in", tokenIn);
      console.log("token out", tokenOut);
      // const amountIn = parseUnits(
      //   baseToken?.amount,
      //   baseToken?.decimals
      // );
      // console.log(tokenIn, tokenOut, amountIn)
      try {
        const quotes = await getTokenQuotes({
          tokenIn,
          tokenOut,
          tokenAmount: baseToken.amount,
        });
        if (quotes){
          setEnableSwap(false)
        }
        setQuoteTokenAmount(Number(quotes).toString());
        console.log("quotes amount", Number(quotes));
      } catch (error:any) {
        if(error.message.includes("no valid median")){
          setQuoteerror("Unable to fetch swap out amount")
          return;
        }
        console.log(error);
        setQuoteerror("Token Pair Not Supported");
        setEnableSwap(true)
      }
    };
    if (baseToken.amount && quoteToken?.name) {
      getQuotes();
    }
    allpairs();
  }, [baseToken, quoteToken,enableSwap]);

  const handleSelectedTokenShuffle = () => {
    setBaseToken((prev) => {
      return { ...prev, ...quoteToken };
    });
    setQuoteToken((prev) => {
      return { ...prev, ...baseToken };
    });
  };

  const swapPair = async () => {
    try {
      //console.log("allowanceReceipt",allowanceReceipt)
      setOpenSpinner(true)

      const { allowanceTx, swapTx } = await swap();
      console.log("allowanceReceipt", allowanceTx);
      console.log("swapTxReceipt", swapTx);
      if(allowanceTx && swapTx){
        setOpenSpinner(false)
      }
    } catch (err) {
      setOpenSpinner(false)
      console.log(err);
    }
  };

  return (
    <main className="flex-1  py-8 sm:px-6">
      <div className="mx-auto max-w-md space-y-6">
        <SwapModal
          baseToken={baseToken}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setBaseToken={setBaseToken}
          quoteToken={quoteToken}
          setQuoteToken={setQuoteToken}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />
        <Card className= "bg-transparent max-md:border-none md:bg-black   md:border-[#799F46]/50">
          <CardHeader>
            <CardTitle className="text-gray-100 text-center">
              {/* Swap Tokens */}
              Swap
            </CardTitle>
            <CardDescription>
              {/* Exchange one token for another at the current market rate. */}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-2">
              <h3 className="text-gray-200 text-xl">From</h3>
              <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                <Input
                  type="number"
                  placeholder="0.0"
                  onChange={(e) => {
                    setBaseTokenAmount(e.target.value);

                    setQuoteerror("");
                  }}
                  className="rounded-none border-[#799F46]/75 bg-[#799F46]/10 text-gray-100 py-[23px]"
                />
                {baseToken?.name ? (
                  <Button
                    onClick={() => {
                      setSelectedOption("base");
                      setOpenDialog(true);
                      setQuoteerror("");
                    }}
                    // variant="outline"
                    size="sm"
                    className="rounded-none py-6 flex bg-Celifi-Swap-Green hover:bg-Celifi-Swap-Green/80 gap-1"
                  >
                    <ChevronDownIcon className="h-4 w-4" />

                    {/* {baseToken?.logoURI && (
                      <Image
                        width={27}
                        height={27}
                        src={baseToken?.logoURI}
                        alt={baseToken?.name}
                      />
                    )} */}
                    {baseToken?.image && (
                      <Image
                        width={27}
                        height={27}
                        src={baseToken?.image}
                        alt={baseToken?.name}
                      />
                    )}

                    <p>{baseToken?.symbol}</p>
                  </Button>
                ) : (
                  <Button
                    // variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedOption("base");
                      setOpenDialog(true);
                      setQuoteerror("");
                    }}
                    className="rounded-none py-6 flex  bg-Celifi-Swap-Green hover:bg-Celifi-Swap-Green/80 gap-1"
                  >
                    <ChevronDownIcon className="h-4 w-4" />
                    <span className="text-gray-50">Select token</span>
                  </Button>
                )}
              </div>
              <div className="flex items-center justify-center">
                <Button
                  onClick={handleSelectedTokenShuffle}
                  variant="link"
                  size="icon"
                  className="rotate-90 text-muted-foreground"
                >
                  <ShuffleIcon className="h-4 w-4" />
                </Button>
              </div>
              <h3 className="text-gray-200 text-xl">To</h3>
              <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                <Input
                  type="text"
                  placeholder="0.0"
                  value={Number(
                    quoteTokenAmount
                      ? (Number(quoteTokenAmount.toString()) / 10 ** quoteToken.decimals)
                      : "0"
                  )}
                  disabled={true}
                  className="rounded-none border-[#799F46]/75 bg-[#799F46]/10 text-gray-100 py-[23px]"
                />
                {/* <Button
                  variant="outline"
                  size="sm"
                  className="rounded-l-none py-6"
                >
                  <ChevronDownIcon className="h-4 w-4" />
                  <span>USDC</span>
                </Button> */}
                {quoteToken?.name ? (
                  <Button
                    onClick={() => {
                      setSelectedOption("quote");
                      setOpenDialog(true);
                      setQuoteerror("");
                    }}
                    // variant="outline"
                    size="sm"
                    className="rounded-none py-6 flex bg-Celifi-Swap-Green hover:bg-Celifi-Swap-Green/80 gap-1"
                  >
                    <ChevronDownIcon className="h-4 w-4" />
                    {/* {quoteToken?.logoURI && (
                      <Image
                        width={27}
                        height={27}
                        src={quoteToken?.logoURI}
                        alt={quoteToken?.name}
                      />
                    )} */}
                    {quoteToken?.image && (
                      <Image
                        width={27}
                        height={27}
                        src={quoteToken?.image}
                        alt={quoteToken?.name}
                      />
                    )}

                    <p>{quoteToken?.symbol}</p>
                  </Button>
                ) : (
                  <Button
                    // variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedOption("quote");
                      setOpenDialog(true);
                      setQuoteerror("");
                    }}
                    className="rounded-none py-6 flex text-gray-50 bg-Celifi-Swap-Green hover:bg-Celifi-Swap-Green/80 gap-1"
                  >
                    <ChevronDownIcon className="h-4 w-4" />
                    <span>Select token</span>
                  </Button>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ActivityIcon className="h-4 w-4" />
                  {quoteToken.name && (
                    <span>
                      {/* 1 {baseToken.name} = 2000 {quoteToken.name} */}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  {/* <PercentIcon className="h-4 w-4" />
                  <span>0.3% fee</span> */}
                </div>
              </div>
              
              <Button
                onClick={swapPair}
                disabled={enableSwap}
                // variant={"outline"}
                className="w-full text-gray-50 bg-Celifi-Swap-Green rounded-sm hover:bg-Celifi-Swap-Green/80"
              >
                Confirm swap
              </Button>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex  justify-center items-center w-full ">
              <div className="text-red-400 ">{quoteerror}</div>
            </div>
          </CardFooter>
        </Card>
        <AlertSpinner message={"Swapping ..."} open={openSpinner} setOpen={setOpenSpinner}/>
      </div>
    </main>
  );
};

export default SwapCard;
