import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card";


interface TransactionHistoryProps {
  transactions: any[];
  network: string;
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions, network }) => {
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
                <CardHeader>
                  <p>To: <span>{tx.to || "Contract Deployed"}</span></p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <CardDescription className="text-left">Amount: <span className="text-[#476520]">{(tx.value / 10 ** 18).toFixed(3)} {tx.tokenSymbol}</span></CardDescription>
                    <CardDescription className="text-left">Date: <span className="text-[#476520]">{tx.date}</span></CardDescription>
                    <CardDescription className="text-left">Type: <span className="text-[#476520]">{tx.transactionType}</span></CardDescription>
                  </div>
                </CardContent>
              </Card>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionHistory;
