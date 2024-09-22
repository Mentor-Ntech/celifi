import { useEffect, useState } from "react";
import { useReadContract, useWriteContract } from "wagmi";
import ERC20ABI from "../../abi/IERC20.json";
import { MainnetTokens } from "@/Utils/Tokens";
import { ethers, Contract, Signer } from "ethers";
const tokentracker = process.env.TokenTracker;
import { TokenChartData } from "@/types/data-type";
import { errorMessage } from "@/types/data-type";

import axios from "axios";

export interface Tokens {
	name: string;
	amount: number;
	address: string;
	symbol: string;
	decimals: number;
	image: string;
	usdAmount: number;
	usdvalue: number;
}

export const MainentRPC = "https://forno.celo.org";
 export const provider = new ethers.providers.JsonRpcProvider(MainentRPC);
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


export const getPriceChart = async (tokenName: string, from: number, to: number, interval: string): Promise<TokenChartData | errorMessage> => {
	try {
	  const response = await axios.get(`/api/tokenHistory`, {
		params: {
		  tokenName,
		  from,
		  to,
		  interval
		}
	  });
  
	  return response.data
	} catch (error) {
	  console.error(`Error fetching price for ${tokenName}:`, error);
	  throw error
	}
  };

//reading only

const createContract = async (tokenAddress: string) => {
	const celoTokenContract = new Contract(tokenAddress, ERC20ABI, provider);
	return celoTokenContract;
};
//writing a transaction
// const createsignerContract = async (
// 	tokenAddress: string,
// 	signer: Co
// ) => {
// 	const celoTokenContract = new Contract(tokenAddress, ERC20ABI, signer);
// 	return celoTokenContract;
// };

const getBalance = async (tokenAddress: string, userAddress: string) => {
	const celoTokenContract = await createContract(tokenAddress);
	const balance = await celoTokenContract.balanceOf(userAddress);
	return (Number(balance.toString()) / 10 ** 18).toFixed(5);
};

//get signer

const getsigner = async (): Promise<Signer> => {
	const signer = await provider.getSigner();
	return signer;
};

//send Tokens to external address

const useTokenBalances = (userAddress: string) => {
	const [balances, setBalances] = useState<Tokens[]>([]);
	const [loading, setLoading] = useState(true);

	const { writeContractAsync: send ,error} = useWriteContract();

	const sendToken = async (
		tokenAddress: `0x${string}`,
		externalAddress: string,
		amount: bigint
	): Promise<boolean | undefined | string> => {
		try {
			const tx = await send({
				abi: ERC20ABI,
				address: tokenAddress,
				functionName: "transfer",
				args: [externalAddress, amount],
			});

			console.log(tx);
			//const receipt = await provider.waitForTransaction(tx);

			// Check the transaction status
			if (!error) {
				console.log("Transaction successful!");
				//return true;
				return tx
			} else {
				console.log("Transaction failed!");
				return false;
			}
		} catch (err) {

      throw err;
		}
	};

	useEffect(() => {
		if (!userAddress) {
			setBalances([]);
			setLoading(false);
			return;
		}
		const fetchBalances = async () => {
			setLoading(true);
			const balancePromises = MainnetTokens.map(async (token, index) => {
				try {
					//const amount =  balance(token.address, 0);
					const bal = await getBalance(token.address, userAddress);
					const price = await getPriceInUsd(token.name);
					console.log("price price", price);
					console.log("data data", token.address);

					return {
						name: token.name,
						symbol: token.symbol,
						amount: Number(bal) || 0,
						address: token.address as string,
						decimals: token.decimals,
						image: token.image,
						usdAmount: Number(bal) * price,
						usdvalue: price,
					};
				} catch (error) {
					console.error(`Error fetching balance for ${token.symbol}:`, error);
					return {
						name: token.name,
						symbol: token.symbol,
						amount: 0,
						address: token.address as string,
						decimals: token.decimals,
						image: token.image,
						usdAmount: 0,
						usdvalue: 0,
					};
				}
			});

			const balances = await Promise.all(balancePromises);
			setBalances(balances);
			setLoading(false);
		};

		fetchBalances();
	}, []);

	return { balances, loading, sendToken };
};

export default useTokenBalances;
