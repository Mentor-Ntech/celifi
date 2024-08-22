import * as React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";
import { TransactionData } from "@/types/data-type";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { X } from "lucide-react";

interface ActivityProps {
  data: TransactionData;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function ActivityDrawer({ data, open, setOpen }: ActivityProps) {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer open={open} onOpenChange={setOpen} >
      <DrawerContent className="h-screen bg-Celifi-Primary text-Celifi-Gray border-none">
      {/* <div className="flex  mt-4">
            <X
              onClick={() => setOpen(false)}
              className=" text-white/80 cursor-pointer ml-3 w-8 h-8"
            /> </div> */}
        <div className="flex flex-col   items-center p-10 h-full w-full ">
          <DrawerHeader>
            <DrawerDescription className="text-xl">You've {data.transactionType}</DrawerDescription>
           
          </DrawerHeader>

          <div className="p-4 pb-0">
            <div className="text-sm space-y-2">
              
             
              <div><strong className="text-4xl"> {Number((( data.value)/10 ** data.tokenDecimal).toFixed(4))} {data.tokenSymbol}</strong></div>
            
              <div><strong><DrawerDescription> On: {data.date}</DrawerDescription></strong></div>
             
             
            </div>
          </div>

          <DrawerFooter className="w-full md:w-1/4">
            <Button variant="outline" className="text-Celifi-Swap-Green"><a href={`https://explorer.celo.org/mainnet/tx/${data.hash}`} >Blockchain receipt</a></Button>
            <DrawerClose asChild>
              <Button variant="destructive">Done</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
