import { Account } from "viem";
import { provider } from "@/components/token/TokensData";
import { useAccount } from "wagmi";
import { tokensSwap } from "@/types/data-type";
import { Mento } from "@mento-protocol/mento-sdk";
import { getTokenQuotes } from "./quotes";


export const SwapTokens = async({tokenIn,tokenOut,tokenInAmount,userAddress}:tokensSwap)=>{
    
    const signer = provider.getSigner(userAddress)
    const mento = await Mento.create(signer);
    const allowanceTxObj = await mento.increaseTradingAllowance(
        tokenIn,
        tokenInAmount
      );
      const quoteAmountOut = await getTokenQuotes({tokenIn,tokenOut,tokenAmount:tokenInAmount})


      const allowanceTx = await signer.sendTransaction(allowanceTxObj);
  const allowanceReceipt = await allowanceTx.wait();
  const expectedAmountOut = quoteAmountOut.mul(99).div(100); // allow 1% slippage from quote
  const swapTxObj = await mento.swapIn(
    tokenIn,
    tokenOut,
    tokenInAmount,
    expectedAmountOut
  )
  const swapTx = await signer.sendTransaction(swapTxObj);
  const swapTxReceipt = await swapTx.wait();

  return {allowanceReceipt,swapTxReceipt}


}






