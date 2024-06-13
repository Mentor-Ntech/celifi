import * as React from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { MainnetTokens } from "@/Utils/Tokens";
import Image from "next/image";
import { useReadContract } from 'wagmi';
import ERC20ABI from "../../abi/IERC20.json";
import { 
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const TokensTable = () => {
    const balance = (tokenAddress: `0x${string}`, index: number) => {
        const data = useReadContract({
            address: tokenAddress,
            abi: ERC20ABI,
            functionName: 'balanceOf',
            args: ["0x37c123d902F4383Ee13aE8445E2477a364930394"]
        });
        
        console.log("the data is", Number(data.data), index);
        return Number(data.data as string);
    }

    return (
        <Table className="text-Celifi-Gray">
            <TableHeader>
                <TableRow>
                    <TableHead className="">Token</TableHead>
                    <TableHead className="text-center">Amount</TableHead>
                    <TableHead className=" text-right">USD Value</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {MainnetTokens.map((token, index) => (
                    <TableRow className="max-md:text-xs" key={token.address}>
                        <TableCell>
                            <div className="flex gap-2">
                                <div className="bg-Celifi-Gray bg-clip-content rounded-full">
                                    <Image width={30} height={30} src={token.image} alt="" />
                                </div>
                                {token.symbol}
                            </div>
                        </TableCell>
                        <TableCell className="text-center">
                            {(Number(balance(token.address as `0x${string}`, index)) / 10**18).toFixed(4)}
                        </TableCell>
                        <TableCell className="text-right">
                            {(Number(balance(token.address as `0x${string}`, index)) / 10**18).toFixed(4)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TokensTable;
