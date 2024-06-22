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
import NoWallet from "../NoWalletConnection";


const TokensTable = () => {
    const { address,isConnected } = useAccount();
    const addressToUse =  address ;
     const { balances, loading } = useTokenBalances(addressToUse as string);
    // const { balances, loading } = isConnected ? useTokenBalances(address as string) : { balances: [], loading: false };

    return (
        <div className="text-Celifi-Gray">
            {!isConnected ? (
                <div className="w-full flex justify-center items-center">
                    <NoWallet />
                </div>
            ) : (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Token</TableHead>
                            <TableHead className="text-left">Amount</TableHead>
                            <TableHead className="text-right">Per usd</TableHead>
                            <TableHead className="text-right">USD Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="w-full">
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
                                <TableCell className="text-left">
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
            )}
        </div>
    );
};

export default TokensTable;
