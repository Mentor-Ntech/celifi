import React, { useEffect, useRef, useState } from "react";
import { ScanBarcode } from "lucide-react";

import QrScanner from "qr-scanner";
import { Button } from "./ui/button";


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
    
      <div className="relative flex flex-col justify-center items-center w-full h-screen">
        <video
          className="h-96 w-full"
          ref={videoEl}
          style={{ pointerEvents: "none" }}
          playsInline
        />
  
        
        <Button
  variant="destructive"
  className="fixed bottom-8 right-8 z-50"
  onClick={() => closeScanner()}
>
  Cancel
</Button>
      </div>
    );
};

export default Scan;
