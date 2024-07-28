import { providers,utils } from "ethers";
import {Mento} from "@mento-protocol/mento-sdk"
import { MainentRPC,provider } from "@/components/token/TokensData";
import { tokensQuotes } from "@/types/data-type";


export const getTokenQuotes = async({tokenIn,tokenOut,tokenAmount}:tokensQuotes)=>{
    

    const mento = await Mento.create(provider);
    const amountIn = utils.parseEther(tokenAmount);
    const quoteAmountOut = await mento.getAmountOut(tokenIn,tokenOut,amountIn)
   
    return quoteAmountOut;



}

