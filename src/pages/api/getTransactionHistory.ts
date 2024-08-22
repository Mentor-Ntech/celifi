import axios from "axios";
import { ethers } from "ethers";

export const fetchTransactions = async (address: string, network: string, setTransactions: Function, setLoading: Function, setError: Function) => {
  try {
    const baseURL =
      network === "alfajores"
        ? "https://explorer.celo.org/alfajores/api"
        : "https://explorer.celo.org/mainnet/api";

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
      const transactionType = getTransactionType(tx, address);
      const date = new Date(tx.timeStamp * 1000).toLocaleDateString();
      return { ...tx, tokenSymbol, transactionType, date };
    }));

    setTransactions(enrichedTxData);
  } catch (err) {
    setError("Failed to fetch transactions.");
  } finally {
    setLoading(false);
  }
};

export const getTokenSymbol = async (to: string) => {
  const tokenAddresses: { [key: string]: string } = {
    "0x765DE816845861e75A25fCA122bb6898B8B1282a": "cUSD",
    "0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73": "cEUR",
    "0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787": "cREAL",
    "0x456a3D042C0DbD3db53D5489e98dFb038553B0d0": "cKES",
    "0xcebA9300f2b948710d2653dD7B07f33A8B32118C": "USDC",
    "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e": "USDT"
  };

  return tokenAddresses[to.toLowerCase()] || "CELO";
};

export const getTransactionType = (tx: any, walletAddress: string ) => {
  if (!tx.to) return "Contract Deployed";
  if (tx.from.toLowerCase() === walletAddress?.toLowerCase()) return "Sent";
  if (tx.to.toLowerCase() === walletAddress?.toLowerCase()) return "Received";
  return "Other";
};

export const connectWallet = async (setWalletAddress: Function, setNetwork: Function, setError: Function) => {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setWalletAddress(accounts[0]);

      const network = await provider.getNetwork();
      if (network.chainId === 42220) {
        setNetwork("mainnet");
      } else if (network.chainId === 44787) {
        setNetwork("alfajores");
      } else {
        setError("Unsupported network.");
      }
    } catch (err) {
      setError("Failed to connect wallet.");
    }
  } else {
    setError("MetaMask not detected.");
  }
};
