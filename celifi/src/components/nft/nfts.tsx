import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle } from "../ui/card";
  
    const nfts = [
        {
          name: "Bored Ape",
          id: 2305,
          price: "$92.05",
          usdValue: "$250.00",
          image: "/svg/boredape.svg"
        },
        {
          name: "CryptoPunk",
          id: 1321,
          price: "$110.75",
          usdValue: "$300.00",
          image: "/svg/boredape.svg"
        },
        {
          name: "Art Blocks",
          id: 876,
          price: "$45.25",
          usdValue: "$120.00",
          image: "/svg/boredape.svg"
        },
        {
          name: "Meebit",
          id: 542,
          price: "$80.55",
          usdValue: "$210.00",
          image: "/svg/boredape.svg"
        },
        {
          name: "Cool Cat",
          id: 9823,
          price: "$67.40",
          usdValue: "$175.00",
          image: "/svg/boredape.svg"
        },
        {
          name: "Doodles",
          id: 310,
          price: "$55.75",
          usdValue: "$150.00",
          image: "/svg/boredape.svg"
        },
        {
          name: "VeeFriends",
          id: 6782,
          price: "$99.95",
          usdValue: "$270.00",
          image: "/svg/boredape.svg"
        },
        {
          name: "CloneX",
          id: 4821,
          price: "$123.45",
          usdValue: "$330.00",
          image: "/svg/boredape.svg"
        },
        {
          name: "Azuki",
          id: 3214,
          price: "$87.65",
          usdValue: "$220.00",
          image: "/svg/boredape.svg"
        },
        {
          name: "Moonbirds",
          id: 7629,
          price: "$105.55",
          usdValue: "$285.00",
          image: "/svg/boredape.svg"
        }
      ];
      
  
  const NFTSTable = () => {
    return (
      <Table className=" text-Celifi-Gray  ">
        <TableHeader>
          <TableRow className="hover:bg-transparent" >
            <TableHead >NFTS</TableHead>
           
          </TableRow>
        </TableHeader>
        <TableBody>
          {nfts.map((token) => (
            <TableRow className="max-md:text-xs hover:bg-Celifi-Light-Green border-none " key={token.id}>
              <TableCell className="font-medium w-full bg-Celifi-Slate-Green ">
                <Card className="flex text-Celifi-Gray h-32 justify-between items-center bg-transparent border-none ">
                    <CardHeader>
                    <div className="bg-transparent bg-clip-content h-full ">
                                    <Image width={100} height={100} src={token.image} alt="" />
                                </div>

                    </CardHeader>
                    <CardContent className="flex flex-col justify-start items-start ">
                    
                    <CardDescription className="flex gap-4">
                        <div> {token.name}</div>
                        <div> {token.id}</div>
                           

                        </CardDescription>
                        <CardDescription className="flex gap-4">
                        <div> {token.name}</div>

                        </CardDescription>
                        <CardDescription className="flex gap-4 justify-between w-full">
                        <div>Floor Price</div>
                        
                           

                        </CardDescription>
                        <CardDescription className="flex gap-4">
                            
                           <Button className="border-none text-Celifi-Slate-Yellow" variant="link">Know more</Button>

                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                    <div className=""> {token.price}</div>
                    </CardFooter>
                </Card>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
  
  export default NFTSTable;
  