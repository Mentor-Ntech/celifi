"use client";
import React, { useEffect, useState } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import toast from "react-hot-toast";
import { ScanBarcode, X } from "lucide-react";
import { Input } from "../ui/input";
import SendTokenSelectDrawer from "./SendTokenSelectDrawer";
const { ethers } = require("ethers-v6");
import Scan from "../qr-scanner";
import { Button } from "../ui/button";
import { QrScanner } from "../qr-scanner/qr-scannerModal";
import qrcodeIcon from "../../../public/svg/bx_qr-scan.svg"
import Image from "next/image";

interface SendTokenDrawerProps {
  sendDrawerOpen: boolean;
  setSendDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addressToUse: string;
}

const SendTokenDrawer: React.FC<SendTokenDrawerProps> = ({
  sendDrawerOpen,
  setSendDrawerOpen,
  addressToUse,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(addressToUse);
    toast.success("Copied to clipboard");
  };

  const [sendToWalletAddr, setSendToWalletAddr] = useState("");
  const [isSendToAddrValid, setIsSendToAddrValid] = useState(false);
  const [isSendTokenSelectOpen, setIsSendTokenSelectOpen] = useState(false);
  const [openScanner,setOpenScanner]= useState<boolean>(false)

  const handleScan = (data: string) => {
    setSendToWalletAddr(data); 
  };

  useEffect(() => {
    const isAddrValid = ethers.isAddress(sendToWalletAddr);
    console.log("isAddrValid", isAddrValid);
    if (isAddrValid && sendDrawerOpen) {
      setIsSendToAddrValid(true);
    } else if (!sendDrawerOpen) {
      setSendToWalletAddr("");
      setIsSendToAddrValid(false);
      setIsSendTokenSelectOpen(false);
    } else {
      setIsSendToAddrValid(false);
    }
  }, [sendToWalletAddr, sendDrawerOpen]);

  return (
    <>
    
      <Drawer open={sendDrawerOpen} onOpenChange={setSendDrawerOpen}>
        <DrawerContent className="h-screen bg-Celifi-Primary text-Celifi-Gray border-none">
       
          <div className="flex  mt-4">
            <X
              onClick={() => setSendDrawerOpen(false)}
              className=" text-white/80 cursor-pointer ml-3 w-8 h-8"
            />
          <div className="w-full flex items-center gap-1">
  
  <div className="flex-grow-[3]">
    <Input
      className="w-full rounded-3xl text-sm bg-transparent"
      placeholder="Input wallet address"
      onChange={(e) => setSendToWalletAddr(e.target.value)}
      value={sendToWalletAddr}
    />
  </div>

  
  <div className="flex-grow-[1] flex justify-center items-center">
    <div
      className="bg-transparent"
      onClick={() => {
        setOpenScanner(true);
        setSendToWalletAddr("");
      }}
    >
      <Image src={qrcodeIcon} alt="scan" className="w-full h-auto" />
    </div>
  </div>
</div>

            {/* //new scan */}
           
          </div>
         
          <div className="flex flex-col h-full items-center  mx-auto w-full md:max-w-xl py-10 px-3 md:px-10 space-y-4">
            {isSendToAddrValid ? (
              <div
                className="break-all text-xs w-full text-center cursor-pointer  bg-gray-500 hover:bg-gray-600 text-white/60 p-2 rounded-md"
                onClick={() => setIsSendTokenSelectOpen(true)}
              >
                Send to{" "}
                <span className="text-green-300">&quot;{sendToWalletAddr}&quot;</span>
              </div>
            ) : !isSendToAddrValid && sendToWalletAddr.length ? (
              <div className="break-all text-xs">Input valid address</div>
            ) : null}
            
            
          </div>
          {openScanner &&( <QrScanner isOpen={openScanner} setScan={setOpenScanner} setScanResult={handleScan} />)}
          {isSendTokenSelectOpen && (
            <SendTokenSelectDrawer
              setIsSendTokenSelectOpen={setIsSendTokenSelectOpen}
              setSendDrawerOpen={setSendDrawerOpen}
              sendDrawerOpen={sendDrawerOpen}
              sendToWalletAddr={sendToWalletAddr}
              addressToUse={addressToUse as string}
            />
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SendTokenDrawer;
