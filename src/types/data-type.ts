import { BigNumber } from "ethers";

export  interface TokenChartData{
    prices?:[number,number][],
    market_caps?:[number,number][],
    total_volumes?:[number,number][],
}

export interface errorMessage{
    message:string,
}


export interface tokensQuotes{
    tokenIn:`0x${string}`,

    tokenOut:`0x${string}`,
    tokenAmount:string 
}

export interface tokensSwap{
    tokenIn:`0x${string}`,

    tokenOut:`0x${string}`,
    tokenInAmount:string  ,
    userAddress:`0x${string}` |  undefined,
}

export interface TransactionData {
    blockHash: string;
    blockNumber: string;
    confirmations: string;
    contractAddress: string;
    cumulativeGasUsed: string;
    date: string;
    from: string;
    gas: string;
    gasPrice: string;
    gasUsed: string;
    hash: string;
    input: string;
    logIndex: string;
    nonce: string;
    timeStamp: string;
    to: string;
    tokenDecimal: number;
    tokenName: string;
    tokenSymbol: string;
    transactionIndex: string;
    transactionType: string;
    value: number;
  }
  
  export interface TransactionsPerPeriod{
    [date:string]: TransactionData[]
  }