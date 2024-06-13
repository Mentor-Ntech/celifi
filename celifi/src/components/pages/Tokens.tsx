"use client"
import React, { useState } from "react"
import { Input } from "../ui/input"
import { SearchIcon } from "../icons/Search"
import { Button } from "../ui/button"
import { CelifiIcon } from "../icons/CelifiLogo"
import { HeroIcon } from "../icons/Hero"
import { SendRequest } from "../SendRequest"
import { Chart } from "../chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TokensTable } from "../TokensTable"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "../ui/separator"
import { ScrollAreaDemo } from "../tokensAll"



const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)



export function Tokens() {
  
  return (
      <div className="w-screen min-h-screen  ">
          
          <div className="flex justify-between md:justify-end items-center w-full pr-4  md:pr-32  border-b-2 border-Celifi-Light-Green">
              <div className="block md:hidden "> <Button className="bg-transparent   hover:bg-transparent"><CelifiIcon/></Button></div>
             
          <Button className="rounded-xl border-none w-1/2 md:w-1/4  bg-Celifi-Light-Green   hover:bg-Celifi-Light-Green  " ><SearchIcon/> <Input type="email" className="bg-transparent  border-none outline-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 ring-offset-0 ring-0" placeholder="Search Address"/></Button>


          </div>
          <div className="w-full h-1/2 flex justify-center mt-5   items-center ">
            <Chart/>             

          </div>
          
          <div className="w-full  flex flex-col text-Celifi-Yellow justify-between  md:justify-center items-center   ">
          
          <Tabs defaultValue="tokens" className="md:w-3/4  w-full">
  <TabsList className="flex justify-between items-center bg-transparent ">
    <TabsTrigger className="" value="tokens">Tokens</TabsTrigger>
    <TabsTrigger value="nft">NFT</TabsTrigger>
    <TabsTrigger value="defi">Defi</TabsTrigger>
    <TabsTrigger value="performance">Performance</TabsTrigger>
   
  </TabsList>
  <TabsContent value="tokens">
    <div className="w-full flex justify-between items-center p-4">
      <div>Token</div>
      <div>Amount</div>
      
      <div>USD Value</div>
    </div>
  <ScrollAreaDemo/>
  {/* <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4"> */}
    {/* <TokensTable/> */}
    {/* </ScrollArea> */}
  </TabsContent>
  <TabsContent value="nft">Change your NFT here.</TabsContent>
  <TabsContent value="defi">Change your DEFI here.</TabsContent>
  <TabsContent value="performance">Change your Performance here.</TabsContent>
  
</Tabs>


          </div>
         

      
        
        
      </div>

      
      
           

    
  
     
     
      
  )
}

