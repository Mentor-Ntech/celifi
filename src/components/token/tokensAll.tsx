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
  import { Input } from "../ui/input";
  import { Button } from "../ui/button";
  
import useTokenBalances from "./TokensData";
import NoWallet from "../NoWalletConnection";

import { stringToBigint } from "@/hooks/stringToBigint";


const TokensTable = () => {
    const { address,isConnected } = useAccount();
    const [opendialog,setOpendialog] = React.useState<boolean>(false);
    const [externalAddress,setExternalAddres] = React.useState<string>("")
    const [amount,setAmount] = React.useState<string>("")
    const [tokenAddress,setTokenAddress] = React.useState<string>("")
    const [tokenSymbol,setTokenSymbol] = React.useState<string>("")
    const addressToUse =  address ;
     const { balances, loading,sendToken } = useTokenBalances(addressToUse as string);
    // const { balances, loading } = isConnected ? useTokenBalances(address as string) : { balances: [], loading: false };

    const handlesend = async()=>{
        if(amount && externalAddress && tokenAddress){
            const amountBigint = stringToBigint(amount);
            await sendToken(tokenAddress as `0x${string}`,externalAddress,amountBigint);
                setOpendialog(false);
                setAmount("");
                setExternalAddres("");
                }else{
                    console.log("address",externalAddress)
                    console.log("amount",amount)
                    console.log("tokenAddress",tokenAddress)
                    alert("Please fill all fields");

                }

    }

    return (
        <div className="text-Celifi-Gray">
            <div className="w-5/6">
            <AlertDialog  open={opendialog} >
  
  <AlertDialogContent >
    <AlertDialogHeader>
      <AlertDialogTitle>Sending {tokenSymbol} </AlertDialogTitle>
      <Input className="text-center" placeholder="0x566433...8565" onChange={(e)=> setExternalAddres(e.target.value)}/>
      <Input className="text-center" placeholder="10" onChange={(e)=> setAmount(e.target.value)}/>

    </AlertDialogHeader>
    <AlertDialogFooter >
        <div className="flex justify-between items-center w-full ">
        <Button onClick={()=>setOpendialog(false)}>Cancel</Button>
        <Button onClick={handlesend}>Continue</Button>
        </div>
    
      
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

            </div>
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
                            <TableRow className="max-md:text-xs" onClick={() => {
                                setOpendialog(true);
                                setTokenAddress(token.address);
                                setTokenSymbol(token.symbol)
                              }} key={token.address}>
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
