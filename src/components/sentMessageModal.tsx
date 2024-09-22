import * as React from "react";
import { X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer";

import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import done from "../../public/svg/done.svg"
import Image from "next/image";
interface ScanProps {
  setMessage: (data: boolean) => void;  
  hash:string;
  message:string;
  isOpen: boolean;
}

export function SentMessage({ setMessage, isOpen,hash,message }: ScanProps) {
  

  return (
    <Drawer open={isOpen} onOpenChange={setMessage}>
      <DrawerContent className="flex items-center justify-center h-screen bg-Celifi-Primary text-Celifi-Gray border-none p-0">
        <X
          onClick={() => setMessage(false)}
          className="text-white/80 cursor-pointer ml-3 w-8 h-8 absolute top-4 left-4"
        />
         <div className="flex justify-center items-center w-full h-full">
         <Card className="w-80 h-80 bg-transparent border-none">
        <CardContent className="w-full h-full p-0 flex flex-col justify-center items-center">
            <Image src={done} alt="Done" />
            <CardHeader>
                <h2 className="text-Celifi-Gray text-2xl font-bold text-center
                ">{message}!</h2>
            </CardHeader>
            <CardDescription>
                <p className="text-Celifi-Gray text-sm text-center"><a href={`https://explorer.celo.org/mainnet/tx/${hash}`}><span className="text-Celifi-Swap-Green">View Transaction</span></a></p>
            </CardDescription>

        </CardContent>
       </Card>
         </div>
        
      
       
      </DrawerContent>
    </Drawer>
  );
}
