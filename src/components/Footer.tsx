import React from "react"
import { Button } from "./ui/button"
import { HeroIcon } from "./icons/Hero"
import { CelifiIcon } from "./icons/CelifiLogo"
import { SwapIcon } from "./icons/swap"
import { LiquidityIcon } from "./icons/liquidity"
import { StakingIcon } from "./icons/Staking"
import { DashboardIcon } from "./icons/Dashboard"
import { GovernanceIcon } from "./icons/Governance"
import { useRouter } from "next/router"

export function Footer(){
    const router = useRouter()
    return(
        
        <div className="   bg-Celifi-Dark-Gray  h-20 w-screen  flex md:justify-center justify-between pr-4 gap-0 items-center  mr-2 rounded ">
           <div className="flex flex-col justify-center  items-center  text-xs">
           <div className="bg-  rounded-full">
                    <GovernanceIcon/>
                </div>
                
                <Button className=" text-Celifi-Gray text-xs " variant="link">Governance</Button>

            </div>
           
            <div className="flex flex-col justify-center  items-center  text-xs">
            <div className="  rounded-full">
                    <StakingIcon/>
                </div>
                
                <Button className=" text-Celifi-Gray text-xs" variant="link">Staking</Button>

            </div>
            <div className="flex flex-col justify-center  items-center  text-xs">
            <div className="bg- bg-Celifi-Yellow bg-clip-content rounded-full">
            <DashboardIcon/>
                </div>
                
                <Button  onClick={()=>router.push("/dashboard")} className="text-Celifi-Yellow text-xs " variant="link">Dashboard</Button>

            </div>
            <div className="flex flex-col justify-center  items-center  text-xs">
                <div className=" rounded-full">
                    <SwapIcon/>
                </div>
                
                <Button className=" text-Celifi-Gray  text-xs" variant="link">Swap</Button>

            </div>
            <div className="flex flex-col justify-center  items-center  text-xs">
            <div className=" rounded-full">
                    <LiquidityIcon/>
                </div>
                
                
                <Button className="text-Celifi-Gray text-xs " variant="link">Liquidity</Button>

            </div>

        </div>
    )
}