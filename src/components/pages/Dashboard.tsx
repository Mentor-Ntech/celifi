import TokenChart from "@/components/token/TokenChart";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DefiChart from "@/components/defi/DefiChart";
import Defi from "@/components/defi/Defi";
import Performance from "@/components/performance/Performance";
import PerformanceChart from "@/components/performance/PerformanceChart";
import TokensTable from "@/components/token/tokensAll";
import NftChart from "@/components/nft/nftChart";
import NFTSTable from "@/components/nft/nfts";
import  useTokenBalances  from "../token/TokensData";
import { useAccount } from "wagmi";
const sampleTokensData = [
  {
    tokenName: "BTC",
    amount: 80000,
    tokenAddress: "0x1234567890abcdef",
  },
  {
    tokenName: "CUSD",
    amount: 45677,
    tokenAddress: "0xabcdef1234567890",
  },
  {
    tokenName: "CELO",
    amount: 78888,
    tokenAddress: "0x9876543210fedcba",
  },
  {
    tokenName: "USDT",
    amount: 90000,
    tokenAddress: "0xfedcba0987654321",
  },
  {
    tokenName: "ETH",
    amount: 4300,
    tokenAddress: "0x0fedcba987654321",
  },
];

const TokensPage = () => {
  const [tabValue, setTabValue] = useState("tokens");
  const { address,isConnected } = useAccount();
  const addressToUse =  address ;
  const { balances, loading } = useTokenBalances(addressToUse as string);
  console.log("All datas",balances)
  return (
    <>
      <div className="">tokens</div>
      {tabValue === "tokens"  && !loading ?  (
       <TokenChart userAddress={address} TokensData={balances}  />
      )
       :tabValue === "nft" ? (
        <NftChart />
      ) :tabValue === "defi" ? (
        <DefiChart />
      ) : tabValue === "performance" ? (
        <PerformanceChart />
      ) : null}

      <div className="mt-6 md:mt-12 px-3 md:px-10">
        <Tabs defaultValue="tokens">
          <TabsList className="bg-transparent  justify-between mb-8 ">
            <TabsTrigger
              className=" flex flex-col text-xs sm:text-base rounded-none px-4 md:px-8  "
              value="tokens"
              onClick={() => setTabValue("tokens")}
            >
              Tokens
            </TabsTrigger>
            <TabsTrigger
              className=" flex flex-col text-xs sm:text-base  rounded-none px-4 md:px-8"
              value="nft"
              onClick={() => setTabValue("nft")}
            >
              NFT
            </TabsTrigger>
            <TabsTrigger
              className=" flex flex-col text-xs sm:text-base rounded-none px-4 md:px-8"
              value="defi"
              onClick={() => setTabValue("defi")}
            >
              DeFi
            </TabsTrigger>
            <TabsTrigger
              className=" flex flex-col text-xs sm:text-base rounded-none px-4 md:px-8"
              value="performance"
              onClick={() => setTabValue("performance")}
            >
              Performance
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tokens">
            <TokensTable />
          </TabsContent>
          <TabsContent value="nft">
            <NFTSTable />
          </TabsContent>
          <TabsContent value="defi">
            <Defi />
          </TabsContent>
          <TabsContent value="performance">
            <Performance />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default TokensPage;
