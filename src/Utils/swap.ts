//import { provider } from "@/components/token/TokensData";
import { useSendTransaction } from "wagmi";
import { tokensSwap } from "@/types/data-type";
import { Mento } from "@mento-protocol/mento-sdk";
import { getTokenQuotes } from "./quotes";
import { ethers,providers,Wallet } from "ethers";


 const MainentRPC = "https://forno.celo.org";
 const provider = new providers.JsonRpcProvider(MainentRPC,42220)

const SwapTokens = ({
  tokenIn,
  tokenOut,
  tokenInAmount,
  userAddress,
}: tokensSwap) => {
  console.log("Starting swap...");
  const { data:allowanceReceipt, sendTransactionAsync: sendAllowanceTransaction } = useSendTransaction();
  const { data: swapTxReceipt,sendTransactionAsync: sendSwapTransaction } = useSendTransaction();

  const swap = async () => {
    try {
      // Initialize the Mento SDK with the user's signer
      if (!userAddress) return { allowanceReceipt: null, swapTxReceipt: null };
//const signer = new Wallet(userAddress, provider);
      const signer =  provider.getSigner(userAddress);
      console.log("signer is signer", signer);
      const mento = await Mento.create(signer);

      // Increase the trading allowance for tokenIn
      const allowanceTxObj = await mento.increaseTradingAllowance(
        tokenIn,
        ethers.utils.parseEther(tokenInAmount)
      );

      console.log("the allowanceTxObj", allowanceTxObj);

      // Send the allowance transaction
      const allowanceTx = await sendAllowanceTransaction({
        to: allowanceTxObj.to as `0x${string}`,
        data: allowanceTxObj.data as `0x${string}`,
        value: allowanceTxObj.value as bigint || undefined,
      });
      

      console.log("Allowance transaction confirmed.");

      // Retrieve the token quote
      const quoteAmountOut = await getTokenQuotes({
        tokenIn,
        tokenOut,
        tokenAmount: tokenInAmount,
      });

      console.log("Quoted amount obtained:", quoteAmountOut.toString());

      // Calculate the expected amount out with 1% slippage
      const expectedAmountOut = quoteAmountOut.mul(99).div(100);

      // Create and send the swap transaction
      const swapTxObj = await mento.swapIn(
        tokenIn,
        tokenOut,
        ethers.utils.parseEther(tokenInAmount),
        expectedAmountOut
      );

      console.log("Swap transaction created.");
      const swapTx = await sendSwapTransaction({
        to: swapTxObj.to as `0x${string}`,
        data: swapTxObj.data as `0x${string}`,
        value: swapTxObj.value as bigint || undefined,
      });
      

      console.log("Swap transaction confirmed.");

      return { allowanceReceipt, swapTxReceipt };
    } catch (error: any) {
      console.error("Error in swap process:", error);
      throw new Error(`Swap failed: ${error.message}`);
    }
  };

  return { swap };
};

export default SwapTokens;
