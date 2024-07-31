"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
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

export interface Token {
  name: string;
  address: string;
  symbol: string;
  decimals: number;
  chainId: number;
  logoURI: string;
  image?: string;
  amount: string;
}

const SwapCard: React.FC = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [baseToken, setBaseToken] = useState<Token>({
    name: "Celo",
    address: "0x471EcE3750Da237f93B8E339c536989b8978a438",
    symbol: "CELO",
    decimals: 18,
    chainId: 42220,
    logoURI: "https://celo-org.github.io/celo-token-list/assets/celo_logo.svg",
    amount: "",
  });
  const [quoteToken, setQuoteToken] = useState<Token>({
    name: "",
    address: "",
    symbol: "",
    decimals: 0,
    chainId: 0,
    logoURI: "",
    amount: "",
  });
  const [selectedOption, setSelectedOption] = useState<"base" | "quote" | "">(
    ""
  );
  const [baseTokenAmount, setBaseTokenAmount] = useState<string>("");
  const [quoteTokenAmount, setQuoteTokenAmount] = useState<string>("");

  useEffect(() => {
    setBaseToken((prev) => {
      return { ...prev, amount: baseTokenAmount };
    });

    setQuoteToken((prev) => {
      return { ...prev, amount: quoteTokenAmount };
    });
  }, [baseTokenAmount, quoteTokenAmount]);

  useEffect(() => {
    console.log(baseToken);
    // console.log(baseToken.amount)
    const getQuotes = async () => {
      const tokenIn = baseToken.address as `0x${string}`;
      const tokenOut = quoteToken.address as `0x${string}`;
      // const amountIn = parseUnits(
      //   baseToken?.amount,
      //   baseToken?.decimals
      // );
      // console.log(tokenIn, tokenOut, amountIn)
      const quotes = await getTokenQuotes({
        tokenIn,
        tokenOut,
        tokenAmount: baseToken.amount,
      });
      console.log(quotes);
    };
    if (baseToken.amount && quoteToken?.name) {
      getQuotes();
    }
  }, [baseToken, quoteToken]);

  const handleSelectedTokenShuffle = () => {
    setBaseToken((prev) => {
      return { ...prev, ...quoteToken };
    });
    setQuoteToken((prev) => {
      return { ...prev, ...baseToken };
    });
  };

  return (
    <main className="flex-1 px-4 py-8 sm:px-6">
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
        <Card className="bg-gray-900 border-2 border-gray-200 border-opacity-15">
          <CardHeader>
            <CardTitle className="text-gray-100">Swap Tokens</CardTitle>
            <CardDescription>
              Exchange one token for another at the current market rate.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <h3 className="text-gray-200 text-xl">You pay</h3>
              <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                <Input
                  type="number"
                  placeholder="0.0"
                  onChange={(e) => setBaseTokenAmount(e.target.value)}
                  className="rounded-r-none bg-transparent text-gray-100 py-6"
                />
                {baseToken?.name ? (
                  <Button
                    onClick={() => {
                      setSelectedOption("base");
                      setOpenDialog(true);
                    }}
                    variant="outline"
                    size="sm"
                    className="rounded-l-none py-6 flex gap-1"
                  >
                    <ChevronDownIcon className="h-4 w-4" />

                    {baseToken?.logoURI && (
                      <Image
                        width={27}
                        height={27}
                        src={baseToken?.logoURI}
                        alt={baseToken?.name}
                      />
                    )}
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
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedOption("base");
                      setOpenDialog(true);
                    }}
                    className="rounded-l-none py-6 flex gap-1 items-center justify-center"
                  >
                    <ChevronDownIcon className="h-4 w-4" />
                    <span>Select token</span>
                  </Button>
                )}
              </div>
              <div className="flex items-center justify-center">
                <Button
                  onClick={handleSelectedTokenShuffle}
                  variant="ghost"
                  size="icon"
                  className="rotate-90 text-muted-foreground"
                >
                  <ShuffleIcon className="h-4 w-4" />
                </Button>
              </div>
              <h3 className="text-gray-200 text-xl">You receive</h3>
              <div className="grid grid-cols-[1fr_auto] items-center gap-2">
                <Input
                  type="number"
                  placeholder="0.0"
                  onChange={(e) => setQuoteTokenAmount(e.target.value)}
                  className="rounded-r-none bg-transparent text-gray-100 py-6"
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
                    }}
                    variant="outline"
                    size="sm"
                    className="rounded-l-none py-6 flex gap-1 items-center justify-center"
                  >
                    <ChevronDownIcon className="h-4 w-4" />
                    {quoteToken?.logoURI && (
                      <Image
                        width={27}
                        height={27}
                        src={quoteToken?.logoURI}
                        alt={quoteToken?.name}
                      />
                    )}
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
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedOption("quote");
                      setOpenDialog(true);
                    }}
                    className="rounded-l-none py-6 flex gap-1 items-center justify-center"
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
                      1 {baseToken.name} = 2000 {quoteToken.name}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <PercentIcon className="h-4 w-4" />
                  <span>0.3% fee</span>
                </div>
              </div>
              <Button variant={"outline"} className="w-full">
                Swap
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default SwapCard;
