import React from "react"

import  {Card,CardContent,CardDescription,CardHeader,CardFooter,CardTitle} from "./ui/card"

const NoWallet =()=>{
    return(
        <Card className="w-1/2 h-1/4">
            <CardContent>
                <CardHeader>
                    Please Connect a Wallet
                </CardHeader>


            </CardContent>


        </Card>

    )

}

export default NoWallet;  //exporting the component