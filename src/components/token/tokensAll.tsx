"use client";
import * as React from "react";
import Image from "next/image";
import { useAccount, useReadContract } from "wagmi";
import { QrCode } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import squareQRScanIcon from "/public/svg/squre-qrscan.svg";

import useTokenBalances from "./TokensData";
import NoWallet from "../NoWalletConnection";

import ReceiveTokenDrawer from "./ReceiveTokenDrawer";
import SendTokenDrawer from "./SendTokenDrawer";
import { Button } from "../ui/button";

const TokensTable = () => {
  const { address, isConnected } = useAccount();
  const addressToUse = address;
  const { balances, loading, sendToken } = useTokenBalances(
    addressToUse as string
  );

  const [receiveDrawerOpen, setReceiveDrawerOpen] = React.useState(false);
  const [sendDrawerOpen, setSendDrawerOpen] = React.useState(false);
  console.log("balances",balances)


  return (
    <div className="text-Celifi-Gray">
      {!isConnected ? (
        <div className="w-full flex justify-center items-center">
          <NoWallet />
        </div>
      ) : (
        <>
          <div className="flex items-center justify-around gap-6">
            <Button
              className="flex justify-center gap-2 items-center max-md:h-[40px] max-md:w-[129px] md:h-12 w-36 bg-[#476520]  hover:bg-[#476520]/80 rounded-sm text-white text-sm cursor-pointer"
              onClick={() => setReceiveDrawerOpen(true)}
            >
              <Image src={squareQRScanIcon} alt="scan" className="w-5 h-auto" />

              <p>Receive</p>
            </Button>
            <Button
              className="flex justify-center gap-2 items-center max-md:h-[40px] max-md:w-[129px] md:h-12 w-36 bg-transparent border-2 border-[#476520]/80 hover:bg-black/80 rounded-sm text-white text-sm cursor-pointer"
              onClick={() => setSendDrawerOpen(true)}
            >
              <Image src={squareQRScanIcon} alt="scan" className="w-5 h-auto" />

	

              <p>Send</p>
            </Button>
          </div>

          <ReceiveTokenDrawer
            setReceiveDrawerOpen={setReceiveDrawerOpen}
            receiveDrawerOpen={receiveDrawerOpen}
            addressToUse={addressToUse as string}
          />
          <SendTokenDrawer
            setSendDrawerOpen={setSendDrawerOpen}
            sendDrawerOpen={sendDrawerOpen}
            addressToUse={addressToUse as string}
          />

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Token</TableHead>
                <TableHead className="text-left">Amount</TableHead>
                <TableHead className="text-right">Per usd</TableHead>
                <TableHead className="text-right">USD Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="w-full">
              {balances.map((token, index) => (
                <TableRow className="max-md:text-xs" key={token.address}>
                  <TableCell>
                    <div className="flex gap-2">
                      <div className="bg-Celifi-Gray bg-clip-content rounded-full">
                        <Image
                          width={30}
                          height={30}
                          src={token.image}
                          alt=""
                        />
                      </div>
                      {token.symbol}
                    </div>
                  </TableCell>
                  <TableCell className="text-left">{token.amount}</TableCell>
                  <TableCell className="text-right">
                    {token.usdvalue.toFixed(5)}
                  </TableCell>
                  <TableCell className="text-right">
                    {token.usdAmount.toFixed(5)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </div>
  );
};

export default TokensTable;
