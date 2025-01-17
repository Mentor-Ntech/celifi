"use client"
import React from "react";
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
  import { Button } from "@/components/ui/button"

  import { Spinner } from "./ui/spinner";


  interface spinerProps{
    message: string,
    open:boolean,
    setOpen:(isOpen: boolean)=>void
  }
  
  export function AlertSpinner({message,open,setOpen}:spinerProps) {

    
    
    return (
      <AlertDialog  open={open} onOpenChange={setOpen}>
        
        <AlertDialogContent className="bg-transparent border-none w-1/2 ">
        <Spinner  className="text-green-600 text-5xl" size="large"  ><span className="text-green-600 text-xl">{message}</span></Spinner>
        
          
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  