//const { Mento } = require("@mento-protocol/mento-sdk");
//const { providers } = require("ethers");



import { providers } from "ethers";
import {Mento} from "@mento-protocol/mento-sdk"
import { MainentRPC,provider } from "@/components/token/TokensData";


export const getAllTokenTradePairs = async()=>{
    const mento = await Mento.create(provider);

    const pairs = await mento.getTradeablePairs();
    console.log(`Found ${pairs.length} tradeable pairs:`);
    return pairs;
    

}

