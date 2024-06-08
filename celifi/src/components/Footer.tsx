import React from "react"
import { Button } from "./ui/button"
import { HeroIcon } from "./icons/Hero"
import { CelifiIcon } from "./icons/CelifiLogo"


export function Footer(){
    return(
        <div className="h-20 w-screen flex justify-between pr-4  items-center text-sm">
            <div className="flex flex-col gap-4">
                
                <Button className=" text-Celifi-Yellow" variant="link">Governance</Button>

            </div>
           
            <div className="flex flex-col gap-4">
                
                <Button className=" text-Celifi-Yellow" variant="link">Staking</Button>

            </div>
            <div className="flex flex-col gap-4">
                
                <Button className=" text-Celifi-Yellow" variant="link">Dashboard</Button>

            </div>
            <div className="flex flex-col gap-4">
                
                <Button className=" text-Celifi-Yellow" variant="link">Swap</Button>

            </div>
            <div className="flex flex-col gap-4">
                
                <Button className=" text-Celifi-Yellow" variant="link">Liquidity</Button>

            </div>

        </div>
    )
}