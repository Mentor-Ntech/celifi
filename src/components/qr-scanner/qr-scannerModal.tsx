import * as React from "react";
import { X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
} from "@/components/ui/drawer";
import Scan from "../qr-scanner";
import { Card, CardDescription, CardHeader } from "../ui/card";

interface ScanProps {
  setScan: (data: boolean) => void;
  setScanResult:(data:string)=> void;
  isOpen: boolean;
}

export function QrScanner({ setScan, isOpen,setScanResult }: ScanProps) {
  

  return (
    <Drawer open={isOpen} onOpenChange={setScan}>
      <DrawerContent className="flex items-center justify-center h-screen bg-Celifi-Primary text-Celifi-Gray border-none p-0">
        <X
          onClick={() => setScan(false)}
          className="text-white/80 cursor-pointer ml-3 w-8 h-8 absolute top-4 left-4"
        />
        {/* Scan Component */}
        <div >
        <Scan setOpenQr={setScan} openQr={isOpen} setonScan={setScanResult} />
        <Card className="bg-transparent border-none">
          <CardHeader className="text-center">
            <h2 className="text-Celifi-Gray text-2xl font-bold">Scan QR code</h2>
          </CardHeader>
         
        </Card>
        </div>
       
      </DrawerContent>
    </Drawer>
  );
}
