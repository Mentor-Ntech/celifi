import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import ERC20ABI from "../../abi/IERC20.json";
import { MainnetTokens } from "@/Utils/Tokens";
import {ethers,Contract, ContractRunner, Signer} from "ethers"
const tokentracker = process.env.TokenTracker

import axios from 'axios';


export interface  Tokens{
  name: string;
  amount: number;
address :string;
symbol: string;
decimals: number;
image: string;
usdAmount:number;
usdvalue:number;

}

const MainentRPC = "https://forno.celo.org"
const provider = new ethers.JsonRpcProvider(MainentRPC)
// const celoTokenContract = new Contract(MainnetTokens.CELO.address, ERC20ABI,
//   provider
//   )

const getPriceInUsd = async (tokenName: string): Promise<number> => {
  try {
    const response = await axios.get(`/api/getPrice?tokenName=${tokenName}`);
    const priceData = response.data[tokenName];
    if (priceData && priceData.usd) {
      return priceData.usd;
    } else {
      throw new Error(`Price data not found for token: ${tokenName}`);
    }
  } catch (error) {
    console.error(`Error fetching price for ${tokenName}:`, error);
    return 0;
  }
};

//reading only

const createContract =async (tokenAddress:string)=>{
  const celoTokenContract = new Contract(tokenAddress, ERC20ABI
    ,provider
    )
    return celoTokenContract
}
//writing a transaction
const createsignerContract =async (tokenAddress:string,signer:ContractRunner)=>{
  const celoTokenContract = new Contract(tokenAddress, ERC20ABI
    ,signer
    )
    return celoTokenContract
}

const getBalance = async(tokenAddress:string,userAddress:string)=>{
  const celoTokenContract = await createContract(tokenAddress)
 const  balance  = await celoTokenContract.balanceOf(userAddress)
 return  (Number(balance.toString())/ 10**18).toFixed(5)

 

}

//get signer

const getsigner =async():Promise<Signer>=>{
  
  
  const signer = provider.getSigner();
  return signer
}

//send Tokens to external address

export const sendToken = async(tokenAddress:string,externalAddress:string,amount:bigint):Promise<string>=>{
  const signer = await getsigner()
  const celoTokenContract = await createsignerContract(tokenAddress,signer)
  const tx = await celoTokenContract.transfer(externalAddress,amount)
  await tx.wait()
  return tx.hash


}



const useTokenBalances = (userAddress:string) => {
  const [balances, setBalances] = useState<Tokens[]>([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    if (!userAddress) {
      setBalances([]);
      setLoading(false);
      return;
    }
    const fetchBalances = async () => {
      setLoading(true);
      const balancePromises = MainnetTokens.map(async (token,index) => {
        try {
          //const amount =  balance(token.address, 0);
          const bal = await getBalance(token.address,userAddress)
          const price = await getPriceInUsd(token.name)
          console.log("price price",price)
          console.log("data data",token.address)


          return {
          name: token.name,
          symbol:token.symbol,
            amount: Number(bal)|| 0,
            address: token.address as string,
            decimals: token.decimals,
            image: token.image,
            usdAmount:(Number(bal)*price),
            usdvalue:price
            
          };
        } catch (error) {
          console.error(`Error fetching balance for ${token.symbol}:`, error);
          return {
            name: token.name,
            symbol:token.symbol,
              amount:  0,
              address: token.address as string,
              decimals: token.decimals,
              image: token.image,
              usdAmount:0,
              usdvalue:0,
          };
        }
      });

      const balances = await Promise.all(balancePromises);
      setBalances(balances);
      setLoading(false);
    };

    fetchBalances();
  }, []);

  return { balances, loading };
};

export default useTokenBalances;
