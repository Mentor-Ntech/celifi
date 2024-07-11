"use client"
import TokenChart from "@/components/token/TokenChart";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DefiChart from "@/components/defi/DefiChart";
import Defi from "@/components/defi/Defi";
import Performance from "@/components/performance/Performance";
import PerformanceChart from "@/components/performance/PerformanceChart";
import dynamic from 'next/dynamic'
import NftChart from "@/components/nft/nftChart";
import NFTSTable from "@/components/nft/nfts";
import  useTokenBalances  from "../token/TokensData";
import { useAccount } from "wagmi";
//import('@/components/token/TokensAll')

const TokensTable = dynamic(() => import("../token/tokensAll"), { 
  ssr: false,
  loading: () => <p>Loading...</p> // Optional loading component
})

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
