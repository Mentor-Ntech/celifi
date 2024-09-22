import React from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import QrCode from "./QrCode";
import toast from "react-hot-toast";
import { X, Share2 } from "lucide-react";
import { Copy } from "lucide-react";
import { shareToGoogleMail, shareToWhatsApp } from "@/share/share";
import { Button } from "../ui/button";
import { CopyIcon } from "../icons/CopyIcon";
import { ShareIcon } from "../icons/ShareIcon";

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

          {/* <div className="break-all">
            <p className="text-xs text-center">{addressToUse}</p>
          </div> */}
          <div
            className="grid grid-cols-5 gap-5 bg-[#476520] rounded-md text-white text-sm  p-3"
            // onClick={() => handleCopy()}
          >
            <p className="col-span-3  break-words gap-3 justify-center  items-center ">
              {addressToUse}
            </p>
            {/* Copy address <Copy className="w-4 h-4" /> */}
            <div className="col-span-2 flex w-full justify-between ">
              <div
                className="bg-[#354B17] p-4 cursor-pointer hover:scale-110  rounded-md"
                onClick={() => handleCopy()}
              >
                <CopyIcon className="text-[#799F46] " />
              </div>
              <div
                className="bg-[#354B17] hover:scale-110 cursor-pointer p-4 rounded-md"
                onClick={() => shareToWhatsApp(addressToUse)}
              >
                <ShareIcon className="text-[#799F46] " />
              </div>
            </div>
          </div>
          <div>
            <p className="text-center">
              {" "}
              This address can only be used to receive compatible tokens
            </p>
          </div>
          {/* <Button
              variant="outline"
              className="bg-transparent py-4 px-4 rounded-sm hover:bg-gray-50/10 border-[#476520]"
            >
              <Share2
                color="#476520"
                className="w-4 h-4"
                onClick={() => shareToWhatsApp(addressToUse)}
              />
            </Button> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ReceiveTokenDrawer;
