import * as React from "react"
import { ScrollArea } from "./ui/scroll-area"
import { Separator } from "./ui/separator"
import { TokensTable } from "./TokensTable"
import { MainnetTokens } from "@/Utils/Tokens"
import { TokenData } from "@/helpers/tokenData"


const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ScrollAreaDemo() {
  return (
    
    <ScrollArea className="md:h-32 h-96 w-full rounded-md border">
      <div className="p-4 overflow-auto ">
        {/* <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4> */}
        {TokenData.map((element,index) => (
          <>
            <div key={element.name} className="text-sm text-Celifi-Gray flex  justify-between items-center p-2">
             <div> {element.name}</div>
             <div> {element.amountEth}</div>
             <div> {element.price}</div>
             <div> {element.value}</div>
             
             
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
