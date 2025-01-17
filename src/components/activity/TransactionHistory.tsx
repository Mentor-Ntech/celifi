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
import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { formatDate } from "@/hooks/dateFormat";
import { TransactionsPerPeriod } from "@/types/data-type";
import { formatDateToString } from "@/hooks/grouptxByDate";

interface TransactionHistoryProps {
  transactions: TransactionsPerPeriod; // Adjusted type here
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
        {Object.entries(transactions).map(([date, txs]) => (
          <React.Fragment key={date}>
            <CardHeader><h2 className="text-white">{formatDateToString(date)}</h2></CardHeader>
            
            
            {txs.map((tx, index) => (
              
              <TableRow
                key={index}
                className="max-md:text-xs hover:bg-Celifi-Light-Green border-b border-Celifi-Gray"
              >
                 {!isNaN(tx.value) && !isNaN(tx.tokenDecimal) &&(
                <TableCell className="font-medium w-full bg-Celifi-Slate-Green">
                  <Card className="text-Celifi-Gray bg-transparent border-none">
                    <CardContent onClick={() => handleDrawer(tx)}>
                      <div className="grid grid-cols-3 gap-4 items-center">

                        <CardDescription className="text-left">
                        <span className="ml-8" >
                          {tx.tokenSymbol}

                          </span>
                          <span className="flex items-center gap-2">
                          {tx.transactionType === "Sent" ? (
                            <CircleArrowUp size={15} color="#EA2604" />
                          ) : (
                            <CircleArrowDown size={15} color="Green" />
                          )}
                           <span>
                          {tx.transactionType === "Sent" ? <h4>Sent</h4> :<h4>Received</h4> }

                          </span>

                          </span>
                         
                         
                        </CardDescription>
                       
                        <CardDescription className="text-left">
                          <span className="text-[#476520]">
                         
                          </span>
                        </CardDescription>
                        
                        <CardDescription className="text-left flex gap-4">
                          <span>
                          {tx.transactionType == "Sent"? `-`:`+`} 
                          </span>
                          

                          
                          
                            <span className="">
                            {(Number(tx.value) / 10 ** Number(tx.tokenDecimal)).toFixed(4)}{" "}
                            
                          </span>

                           
                          
                        </CardDescription>
                      </div>
                    </CardContent>
                  </Card>
                </TableCell>
                 )}
              </TableRow>
            ))}
          </React.Fragment>
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
