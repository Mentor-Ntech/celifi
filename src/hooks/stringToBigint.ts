import { ethers,parseEther } from "ethers";

export const stringToBigint =(amount:string):bigint=>{

    return parseEther(amount);
}