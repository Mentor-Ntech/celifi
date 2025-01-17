import React, { useEffect, useRef, useState } from "react";
import { ScanBarcode } from "lucide-react";
import { Card,CardContent,CardDescription, CardHeader } from "./ui/card";

import QrScanner from "qr-scanner";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";


interface props{
    setonScan: (data: string) => void;
    openQr: boolean
    setOpenQr: (data:boolean) => void;
   
   

}

const Scan = ({setonScan,openQr,setOpenQr}:props) => {
  const scanner = useRef<QrScanner | null>(null);
  const videoEl = useRef<HTMLVideoElement | null>(null);
  const qrCodeEl = useRef<HTMLDivElement | null>(null);
  const [qrOn, setQrOn] = useState<boolean>(false);
  const [closeQr,setQr] = useState<boolean>(false);
  const [scannedResult, setScannedResult] = useState<string | undefined>("");
  

  // Success
  const onScanSuccess = (result: QrScanner.ScanResult) => {
    console.log(result);
    setonScan(result?.data)
    setScannedResult(result?.data);
    closeScanner()
    

    
    if (scanner.current) {
      setOpenQr(false)
        scanner.current.stop();
        setQrOn(false); // Turn off video display
      }
  };

  // Fail
  const onScanFail = (err: string | Error) => {
    console.log(err);
    
  };

  const closeScanner = () => {
    if (scanner.current) {
      scanner.current.stop();
      scanner.current = null;
      setOpenQr(false);
      setQrOn(false);
      // Stop the video stream if possible
      if (videoEl.current && videoEl.current.srcObject) {
        const stream = videoEl.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
        videoEl.current.srcObject = null;
      }
    }
  };
  
  const handleScanClick = () => {
    if (videoEl.current && !scanner.current) {
      // Initialize the scanner on click
      scanner.current = new QrScanner(videoEl.current, onScanSuccess, {
        onDecodeError: onScanFail,
        preferredCamera: "environment",
        highlightScanRegion: true,
        highlightCodeOutline: true,
        overlay: qrCodeEl.current || undefined,
      });

      // Start QR Scanner
      scanner.current
        .start()
        .then(() => setQrOn(true))
        .catch((err) => {
          console.error(err);
          setQrOn(false);
          setOpenQr(false)
        });
    }
  };
 
  useEffect(()=>{
    if(openQr){
      handleScanClick()

    }else{
      closeScanner()
    }
    
   

  },[openQr])

  return (
    <div className="flex justify-center items-center w-full h-full">
      <Card className="w-80 h-80 bg-[#5F793C4D] rounded-2xl overflow-hidden flex items-center justify-center  border-green-400 ">
        
        <CardContent className="w-full h-full p-0">
          <video
            className="w-full h-full object-cover"
            ref={videoEl}
            style={{ pointerEvents: "none" }}
            playsInline
          />
        </CardContent>
       
      </Card>
    </div>
  );
};

export default Scan;
