import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "./ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SendIcon } from "./icons/Send"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

interface SendRequestProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SendRequest({ isOpen, onClose }: SendRequestProps) {
  return (
    <div className="">
<AlertDialog   open={isOpen} onOpenChange={open => !open && onClose()}>
      <AlertDialogTrigger asChild>
       
      </AlertDialogTrigger>
      <AlertDialogContent className=" bg-Celifi-Primary border-none ">
      <Card className="bg-transparent border-none h-5/6 rounded-xl text-Celifi-Yellow">
  <CardHeader>
    
    <CardDescription className="text-Celifi-Yellow text-xs flex justify-between items-center">
        <span>Send us feature request</span>
        <Button className="bg-transparent " variant="destructive" onClick={onClose}> X</Button>
    </CardDescription>
  </CardHeader>
  <CardContent className=" h-1/2 rounded-sm">
    <Textarea className="w-full h-full bg-transparent border  border-Celifi-Yellow text-xs text-Celifi-Yellow" placeholder="Input Message ..."/>
  </CardContent>
  <CardFooter className="flex  items-center p-4">
 
          
         <Button className="bg-gradient-to-r from-[#C5C83E] to-[#799F46] text-black  w-full gap-2"><SendIcon/>Send</Button>
        
  </CardFooter>
</Card>

       
      </AlertDialogContent>
    </AlertDialog>
    </div>
    
  )
}
