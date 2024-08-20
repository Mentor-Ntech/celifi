import React, { useEffect, useState } from "react";
import TransactionHistory from "./TransactionHistory";
import { fetchTransactions, connectWallet } from "@/pages/api/getTransactionHistory";

const Activity: React.FC = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
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

  useEffect(() => {
    if (walletAddress && network) {
      fetchTransactions(walletAddress, network, setTransactions, setLoading, setError);
    }
  }, [walletAddress, network]);

  if (loading) return <div className="text-Celifi-Gray">Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <TransactionHistory transactions={transactions} network={network} />
  );
};

export default Activity;
