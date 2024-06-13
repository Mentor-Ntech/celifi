import TokenChart from "@/components/TokenChart";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DefiChart from "@/components/defi/DefiChart";
import Defi from "@/components/defi/Defi";
import Performance from "@/components/performance/Performance";
import PerformanceChart from "@/components/performance/PerformanceChart";

const TokensPage = () => {
  const [tabValue, setTabValue] = useState("tokens");
  return (
    <>
      <div className="">tokens</div>
      {tabValue === "tokens" ? (
        <TokenChart />
      ) : tabValue === "defi" ? (
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
