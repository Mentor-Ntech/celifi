import React, { useEffect, useState } from "react";
import TransactionHistory from "./TransactionHistory";
import { fetchTransactions, connectWallet } from "@/pages/api/getTransactionHistory";
import axios from "axios";
import { useAccount } from "wagmi";
import { TransactionData } from "@/types/data-type";

const Activity: React.FC = () => {
  const {address} = useAccount()
  const [transactions, setTransactions] = useState<TransactionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [network, setNetwork] = useState<string>("mainnet");

  useEffect(() => {
    connectWallet(setWalletAddress, setNetwork, setError);

    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        connectWallet(setWalletAddress, setNetwork, setError);
      });
    }
  }, []);

  async function fetchData() {
    setLoading(true)
    try {
      const response = await axios.get(`/api/transactionhistory?address=${address}`);
      console.log("the data is", response.data);
      if(response.status == 200){
        setTransactions(response.data);
        setLoading(false)

      }else if (response.status ==400){
        setError(response.statusText)
        setLoading(false)

        
      }
      else{
        setError("Error fetching transactions")
      }
     
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }
  

  useEffect(() => {
    fetchData()
    
    
  }, [address]);

  if (loading) return <div className="text-Celifi-Gray">Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <TransactionHistory transactions={transactions} network={network} />
  );
};

export default Activity;
