//import { ethers,utils } from "ethers";
import { ethers as ethersV6 } from "ethers-v6";

export const stringToBigint =(amount:string):bigint=>{

    return ethersV6.parseEther(amount);
}