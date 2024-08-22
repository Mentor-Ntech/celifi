import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";
import { TransactionData } from "@/types/data-type";
import { ActivityDrawer } from "./activityDrawer";
import { Button } from "@headlessui/react";
import { CircleArrowDown,CircleArrowUp } from "lucide-react";

interface TransactionHistoryProps {
  transactions: TransactionData[];
  network: string;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  transactions,
  network,
}) => {
  const [selectedTransaction, setSelectedTransaction] = useState<TransactionData | null>(null);

  const handleDrawer = (tx: TransactionData) => {
    setSelectedTransaction(tx);
  };

  const handleCloseDrawer = () => {
    setSelectedTransaction(null);
  };

  return (
    <Table className="text-Celifi-Gray">
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead>WALLET HISTORY ({network.toUpperCase()})</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((tx, index) => (
          <TableRow
            key={index}
            className="max-md:text-xs hover:bg-Celifi-Light-Green border-b border-Celifi-Gray"
          >
            <TableCell className="font-medium w-full bg-Celifi-Slate-Green">
              <Card className="text-Celifi-Gray bg-transparent border-none">
               
                <CardContent onClick={() => handleDrawer(tx)}>
                  <div className="grid grid-cols-3 gap-4 items-center">
                  <CardDescription className="text-left">
                     {tx.transactionType == "Sent"? <CircleArrowDown size={30} color="Red"/>:<CircleArrowUp size={30} color="Green"/>}
                    </CardDescription>
                    <CardDescription className="text-left">
                      Amount:{" "}
                      <span className="text-[#476520]">
                        {(tx.value / 10 ** tx.tokenDecimal).toFixed(3)}{" "}
                        {tx.tokenSymbol}
                      </span>
                    </CardDescription>
                    <CardDescription className="text-left">
                      Date:{" "}
                      <span className="text-[#476520]">{tx.date}</span>
                    </CardDescription>
                   
                    
                  </div>
                </CardContent>
              </Card>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      {selectedTransaction && (
        <ActivityDrawer
          data={selectedTransaction}
          open={true}
          setOpen={handleCloseDrawer}
        />
      )}
    </Table>
  );
};

export default TransactionHistory;
