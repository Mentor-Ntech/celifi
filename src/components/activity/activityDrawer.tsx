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
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent className="h-screen bg-Celifi-Primary text-Celifi-Gray border-none">
      <div className="flex  mt-4">
            <X
              onClick={() => setOpen(false)}
              className=" text-white/80 cursor-pointer ml-3 w-8 h-8"
            /> </div>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Transaction Details</DrawerTitle>
            <DrawerDescription>
              Details of the selected transaction.
            </DrawerDescription>
          </DrawerHeader>

          <div className="p-4 pb-0">
            <div className="text-sm space-y-2">
              <div><strong>Hash:</strong> {data.hash}</div>
              <div><strong>From:</strong> {data.from}</div>
              <div><strong>To:</strong> {data.to}</div>
              <div><strong>Value:</strong> {data.value}</div>
              <div><strong>Token:</strong> {data.tokenSymbol}</div>
              <div><strong>Date:</strong> {data.date}</div>
              <div><strong>Gas Used:</strong> {data.gasUsed}</div>
              <div><strong>Transaction Type:</strong> {data.transactionType}</div>
              {/* Add more fields as needed */}
            </div>
          </div>

          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
