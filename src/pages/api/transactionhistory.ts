import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { getTokenSymbol, getTransactionType } from './getTransactionHistory';
import { groupTokensByDate } from '@/hooks/grouptxByDate';

const baseURL ="https://explorer.celo.org/mainnet/api";
export default async function handler(req: NextApiRequest, res: NextApiResponse){
    const { address } = req.query;
    if(!address) return res.status(400).json({ message: "Address is required"})
        const txResponse = await axios.get(
            `${baseURL}?module=account&action=txlist&address=${address}`
          );
      
          const tokenTxResponse = await axios.get(
            `${baseURL}?module=account&action=tokentx&address=${address}`
          );
          
          const combinedTxData = [...txResponse.data.result, ...tokenTxResponse.data.result];
    combinedTxData.sort((a: any, b: any) => b.timeStamp - a.timeStamp);
    const filteredTxData = combinedTxData.filter((tx: any) => parseFloat(tx.value) !== 0);

    const enrichedTxData = await Promise.all(filteredTxData.slice(0, 20).map(async (tx: any) => {
      const tokenSymbol = tx.tokenSymbol || await getTokenSymbol(tx.to);
      const transactionType = getTransactionType(tx, address as string);
      const date = new Date(tx.timeStamp * 1000).toLocaleDateString();
      return { ...tx, tokenSymbol, transactionType, date };
    }));
    const groupedTxData =  groupTokensByDate(enrichedTxData);
   // console.log("the grouped data is",groupedTxData)
    return res.status(200).json(groupedTxData);






}