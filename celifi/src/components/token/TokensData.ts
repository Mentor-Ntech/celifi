import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import ERC20ABI from "../../abi/IERC20.json";
import { MainnetTokens } from "@/Utils/Tokens";
import {ethers,Contract} from "ethers"

export interface  Tokens{
  name: string;
  amount: number;
address :string;
symbol: string;
decimals: number;
image: string;

}

const MainentRPC = "https://forno.celo.org"
const provider = new ethers.JsonRpcProvider(MainentRPC)
// const celoTokenContract = new Contract(MainnetTokens.CELO.address, ERC20ABI,
//   provider
//   )



const createContract =async (tokenAddress:string)=>{
  const celoTokenContract = new Contract(tokenAddress, ERC20ABI
    ,provider
    )
    return celoTokenContract
}

const getBalance = async(tokenAddress:string,userAddress:string)=>{
  const celoTokenContract = await createContract(tokenAddress)
 const  balance  = await celoTokenContract.balanceOf(userAddress)
 return  (Number(balance.toString())/ 10**18).toFixed(4)

 

}



const useTokenBalances = (userAddress:string) => {
  const [balances, setBalances] = useState<Tokens[]>([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchBalances = async () => {
      setLoading(true);
      const balancePromises = MainnetTokens.map(async (token,index) => {
        try {
          //const amount =  balance(token.address, 0);
          const bal = await getBalance(token.address,userAddress)
          console.log("data data",token.address)


          return {
          name: token.name,
          symbol:token.symbol,
            amount: Number(bal)|| 0,
            address: token.address as string,
            decimals: token.decimals,
            image: token.image,
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
