import React from "react";
import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer";
import QrCode from "./QrCode";
import toast from "react-hot-toast";
import { X,Share2 } from "lucide-react";
import { Copy } from "lucide-react";
import { shareToGoogleMail,shareToWhatsApp } from "@/share/share";
import { Button } from "../ui/button";


interface ReceiveTokenDrawerProps {
  receiveDrawerOpen: boolean;
  setReceiveDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  addressToUse: string;
}

const ReceiveTokenDrawer: React.FC<ReceiveTokenDrawerProps> = ({
  receiveDrawerOpen,
  setReceiveDrawerOpen,
  addressToUse,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(addressToUse);
    toast.success("Copied to clipboard");
  };

  return (
    <Drawer open={receiveDrawerOpen} onOpenChange={setReceiveDrawerOpen}>
      <DrawerContent className="h-screen bg-Celifi-Primary text-Celifi-Gray border-none">
        <X
          onClick={() => setReceiveDrawerOpen(false)}
          className=" text-white/80 cursor-pointer ml-3 w-8 h-8"
        />
        <div className="flex flex-col h-full items-center justify-center mx-auto w-full max-w-sm p-10 space-y-4">
          <QrCode value={addressToUse as `0x${string}`} />

          <div className="break-all">
            <p className="text-xs text-center">{addressToUse}</p>
          </div>
          <div  className="flex justify-around items-center gap-4"> 
          <div
            className="flex justify-center items-center max-md:h-[40px]  md:h-12 w-36 bg-custom-button-gradient rounded-[2px] text-white text-sm cursor-pointer px-3"
            onClick={() => handleCopy()}
          >
           
            <p className="inline-flex gap-3 justify-center items-center">
              Copy address <Copy className="w-4 h-4" />
            </p>
          </div>
          <Button variant="link" className="bg-transparent"> <Share2 color="white" onClick={()=>shareToWhatsApp(addressToUse)}/></Button>
         

          </div>
        
          
          
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ReceiveTokenDrawer;
