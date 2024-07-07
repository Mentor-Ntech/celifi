"use client";
import React, { useEffect, useState } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import QrCode from "./QrCode";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import { Copy } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SelectTokenPopover } from "./SelectTokenPopover";
import useTokenBalances from "./TokensData";
import { useAccount } from "wagmi";
const { ethers } = require("ethers");

interface SendTokenSelectDrawerProps {
  sendDrawerOpen: boolean;
  setSendDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSendTokenSelectOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addressToUse: string;
}

const SendTokenSelectDrawer: React.FC<SendTokenSelectDrawerProps> = ({
  sendDrawerOpen,
  setSendDrawerOpen,
  setIsSendTokenSelectOpen,
  addressToUse,
}) => {
    console.log(addressToUse)
    // const { address, isConnected } = useAccount();

    const [externalAddress, setExternalAddres] = React.useState<string>("");
    const [amount, setAmount] = React.useState<string>("");
    const [tokenAddress, setTokenAddress] = React.useState<string>("");
    const [tokenSymbol, setTokenSymbol] = React.useState<string>("");
    // const addressToUse = address;
    const { balances, loading, sendToken } = useTokenBalances(
      addressToUse as string
    );

    console.log(balances)

  return (
    <Drawer
      open={sendDrawerOpen}
      onOpenChange={setSendDrawerOpen}
      direction="right"
    >
        
      <DrawerContent className="h-screen bg-Celifi-Primary text-Celifi-Gray border-none drawer-direction">
        <div className="flex  mt-4">
          <X
            onClick={() => {
              setIsSendTokenSelectOpen(false);
            }}
            className=" text-white/80 cursor-pointer ml-3 w-8 h-8"
          />
          {/* <div className=" flex-1 px-3">
            <div>
              <Input
                className="w-full md:w-[90%] mx-auto rounded-3xl text-sm bg-transparent"
                placeholder="Input wallet address"
                onChange={(e) => setSendToWalletAddr(e.target.value)}
              />
            </div>
          </div> */}
        </div>
        <div className="flex flex-col h-full items-center  mx-auto w-full md:max-w-xl py-10 px-3 md:px-10 space-y-4">
          <div className="w-[600px] ">
            <p className="text-xl"> Enter Amount</p>
            <div className="p-6 border border-gray-300/40 rounded-xl mt-4 space-y-3">
              <div className="relative">
                <Input
                  type="number"
                  className="w-full bg-transparent pl-0 py-2 pr-10 remove-arrow border-0"
                  placeholder="0.00"
                />
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 ">
                  <SelectTokenPopover balances={balances} />
                </div>
              </div>
              <hr className="border-gray-300/40 " />
              <div className="relative">
                <Input
                  type="number"
                  className="w-full bg-transparent pl-0 py-2 pr-10 remove-arrow border-0"
                  placeholder="$0.00"
                />
                <Button
                  variant={"secondary"}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-3xl opacity-60"
                >
                  MAX
                </Button>
              </div>
            </div>
          </div>

          {/* {isSendToAddrValid ? (
            <div className="break-all text-xs w-full text-center cursor-pointer  bg-gray-500 hover:bg-gray-600 text-white/60 p-2 rounded-md">
              Send to{" "}
              <span className="text-green-300">"{sendToWalletAddr}"</span>
            </div>
          ) : !isSendToAddrValid && sendToWalletAddr.length ? (
            <div className="break-all text-xs">Input valid address</div>
          ) : null} */}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SendTokenSelectDrawer;
