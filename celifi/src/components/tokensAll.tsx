import * as React from "react"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"
import { TokensTable } from "./TokensTable"
import { MainnetTokens } from "@/Utils/Tokens"
import { TokenData } from "@/helpers/tokenData"
import Image from "next/image"
import { useReadContracts,useReadContract } from 'wagmi'
import ERC20ABI from "../abi/IERC20.json"
import { useAccount } from 'wagmi'
import {ethers,parseUnits,formatEther, BigNumberish} from "ethers"




const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ScrollAreaDemo() {
    const { address: userAddress } = useAccount()
//     const { data, error, isLoading } = useReadContract({
//         address:"0x765de816845861e75a25fca122bb6898b8b1282a",
//         abi: ERC20ABI,
//         functionName: 'balanceOf',
//         args: ["0x37c123d902F4383Ee13aE8445E2477a364930394"]}

        
// )

// // console.log("the data usbdbgdg",(data as string))

    const balance = (tokenAddress:`0x${string}`,index:number)=>{
        const  data = useReadContract({
            address: tokenAddress,
            abi: ERC20ABI,
            functionName: 'balanceOf',
            args: ["0x37c123d902F4383Ee13aE8445E2477a364930394"]}

            
    )
    console.log("the data is data",Number(data.data),index)
    return Number(data.data as string)

}
  return (
    
    <ScrollArea className="md:h-32 h-96 w-full rounded-md border">
      <div className="p-4 overflow-auto ">
        {/* <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4> */}
        {MainnetTokens.map((element,index) => (
          <>
            <div key={element.address} className="text-sm text-Celifi-Gray flex  justify-between items-center p-2">
             <div className="flex gap-2 "><div className=" bg-Celifi-Gray  bg-clip-content rounded-full"><Image  width={30} height={30} src={element.image} alt="" /></div> {element.symbol}</div>
             <div> {(Number(balance(element.address as `0x${string}`,index ))/10**18).toFixed(4) }</div>
             <div> {(Number(balance(element.address as `0x${string}`,index ))/10**18).toFixed(4) }</div>
             {/* <div> {element.price}</div>
             <div> {element.value}</div> */}
             
             
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
