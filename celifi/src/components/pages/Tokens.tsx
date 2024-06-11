
import React, { useState } from "react"
import { Input } from "../ui/input"
import { SearchIcon } from "../icons/Search"
import { Button } from "../ui/button"
import { CelifiIcon } from "../icons/CelifiLogo"
import { HeroIcon } from "../icons/Hero"
import { SendRequest } from "../SendRequest"
import { Chart } from "../chart"

export function Tokens() {
  
  return (
      <div className="w-screen min-h-screen relative">
          
          <div className="flex justify-between md:justify-end items-center w-full pr-4  md:pr-32  border-b-2 border-Celifi-Light-Green">
              <div className="block md:hidden "> <Button className="bg-transparent   hover:bg-transparent"><CelifiIcon/></Button></div>
             
          <Button className="rounded-xl border-none w-1/2 md:w-1/4  bg-Celifi-Light-Green   hover:bg-Celifi-Light-Green  " ><SearchIcon/> <Input type="email" className="bg-transparent  border-none outline-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 ring-offset-0 ring-0" placeholder="Search Address"/></Button>


          </div>
          <div className="w-full h-1/2 flex justify-center mt-5   items-center">
            <Chart/>
              

          </div>

          <div className="w-full p-8 flex flex-col text-Celifi-Yellow justify-center items-center   ">
              <h1 >The multi-utility dashboard</h1>
              <h1>that accelerates your Defi Assessment</h1>


          </div>
          <div className="w-full p-4 ">
          <Button className="rounded border-none w-full  md:w-1/4  bg-Celifi-Light-Green   hover:bg-Celifi-Light-Green  " ><SearchIcon/> <Input type="email" className="bg-transparent  border-none outline-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 ring-offset-0 ring-0" placeholder="Search Address"/></Button>
          <Button   variant="link" className=" text-[#C5C83E] bg-clip-text">Send us a feature request</Button>

          </div>

          <div className="absolute bottom-0 left-0 w-full flex justify-center mb-4">
              <HeroIcon />

          </div>
        
      </div>

      
      
           

    
  
     
     
      
  )
}

