import * as React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { MainnetTokens } from "@/Utils/Tokens";
import Image from "next/image";
import { useAccount, useReadContract } from 'wagmi';
import ERC20ABI from "../../abi/IERC20.json";
import { 
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import useTokenBalances from "./TokensData";


const TokensTable = () => {
    const { address,isConnected } = useAccount();
    const addressToUse = isConnected ? address : "0x37c123d902F4383Ee13aE8445E2477a364930394";
    const { balances, loading } = useTokenBalances(addressToUse as string);
    const balance = (tokenAddress: `0x${string}`, index: number) => {
        const data = useReadContract({
            address: tokenAddress,
            abi: ERC20ABI,
            functionName: 'balanceOf',
            args: ["0x37c123d902F4383Ee13aE8445E2477a364930394"]
        });
        
        
        return Number(data.data as string);
    }

    return (
        <Table className="text-Celifi-Gray">
            <TableHeader>
                <TableRow>
                    <TableHead className="">Token</TableHead>
                    <TableHead className="text-left">Amount</TableHead>
                    <TableHead className="text-right">Per usd</TableHead>
                    <TableHead className=" text-right">USD Value</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {balances.map((token, index) => (
                    <TableRow className="max-md:text-xs" key={token.address}>
                        <TableCell>
                            <div className="flex gap-2">
                                <div className="bg-Celifi-Gray bg-clip-content rounded-full">
                                    <Image width={30} height={30} src={token.image} alt="" />
                                </div>
                                {token.symbol}
                            </div>
                        </TableCell>
                        <TableCell className=" text-left">
                            {token.amount}
                        </TableCell>
                        <TableCell className="text-right">
                            {token.usdvalue.toFixed(5)}
                        </TableCell>
                        <TableCell className="text-right">
                            {token.usdAmount.toFixed(5)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TokensTable;
