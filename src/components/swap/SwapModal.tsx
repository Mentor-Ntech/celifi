"use client";
import React, { useEffect, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Token } from "./SwapCard";
import { MainnetTokens as untypedMainnetToken } from "@/Utils/Tokens";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { tokenPairs,tokenPairs2 } from "@/Utils/Tokens";
import { Separator } from "../ui/separator";

const MainnetTokens = untypedMainnetToken as Token[];

interface SwapModalProps {
	baseToken: Token;
	setBaseToken: React.Dispatch<React.SetStateAction<Token>>;
	openDialog: boolean;
	setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
	quoteToken: Token;
	selectedOption: "base" | "quote" | "";
	setSelectedOption: React.Dispatch<
		React.SetStateAction<"base" | "quote" | "">
	>;
	setQuoteToken: React.Dispatch<React.SetStateAction<Token>>;
}

interface TokenPairs {
	[key: string]: Token[];
}

const pairTokens = (tokenPair: string) => {
	
	const result = tokenPairs2.flatMap((token) => (token as Record<string, any>)[tokenPair] || []);
	return result;
  };
  
const filtIt = tokenPairs2.flatMap((token)=> token)
//filter
const filt3 = Object.entries(tokenPairs)
const filteredTokenList:Token[] = tokenPairs2.map((pair) => {
	const [key, value] = Object.entries(pair)[0];
	return value[0];
  });


// Extract the first token from each tokenPair object
// const filteredTokenList = Object.values(tokenPairs)
// 	.flatMap((pair) => pair.slice(0, 1))
// 	.sort((a, b) => a.name.localeCompare(b.name)) as Token[];

const SwapModal: React.FC<SwapModalProps> = ({
	baseToken,
	setBaseToken,
	openDialog,
	setOpenDialog,
	quoteToken,
	selectedOption,
	setSelectedOption,
	setQuoteToken,
}) => {
	const [searchResults, setSearchResults] =
		useState<Token[]>(filteredTokenList);
	const [search, setSearch] = useState<string>("");

	useEffect(() => {
		
		const filteredSearch = filteredTokenList.filter((searchResult) => {
			const result =
				searchResult.address
					.toLowerCase()
					.includes(search.toLocaleLowerCase()) ||
				searchResult.name.toLowerCase().includes(search.toLowerCase()) ||
				searchResult.symbol.toLowerCase().includes(search.toLowerCase());

			return result;
		});
		setSearchResults(filteredSearch);
	}, [search]);

	useEffect(() => {
		if (openDialog === false) {
			setSearchResults(filteredTokenList);
		}
	}, [openDialog]);

	const handleSetToken = (tokenInfo: Token) => {
		
		if (selectedOption === "base") {
			setBaseToken({ ...tokenInfo, amount: "" });
		}
		if (selectedOption === "quote") {
			setQuoteToken({ ...tokenInfo, amount: "" });
		}

		setSearch("");
		setOpenDialog(false);
	};

	return (
		<div>
			<Dialog open={openDialog} onOpenChange={setOpenDialog}>
				<DialogContent className="sm:max-w-[425px] border border-[#799F46]/75 bg-black text-gray-100">
					<DialogHeader>
						<DialogTitle className="mb-2">Select a token</DialogTitle>
						<div className="border border-[#799F46]/75 rounded-full flex px-3 justify-center items-center">
							<Search className="opacity-30 w-6 h-6 " />
							<Input
								type="text"
								onChange={(e) => setSearch(e.target.value)}
								placeholder="Search name or place address"
								className="border-none  shadcn-input bg-transparent"
							/>
						</div>
					</DialogHeader>
					<div className="flex gap-3 flex-wrap">
						{filteredTokenList.map((MainnetToken) => (
							<div
								key={MainnetToken.address}
								onClick={() => handleSetToken(MainnetToken)}
								className={`flex gap-2 border rounded-3xl border-[#799F46]/75 text-gray-800 px-2 py-1 ${
									(selectedOption === "base" &&
										baseToken.name === MainnetToken.name &&
										"bg-[#476520]") ||
									(selectedOption === "quote" &&
										quoteToken.name === MainnetToken.name &&
										"bg-[#476520]") ||
									"bg-gray-500"
								} ${
									(selectedOption === "base" &&
										quoteToken.symbol === MainnetToken.symbol &&
										"pointer-events-none opacity-40") ||
									(selectedOption === "quote" &&
										baseToken.symbol === MainnetToken.symbol &&
										"pointer-events-none opacity-40") ||
									" cursor-pointer "
								}`}
							>
								{MainnetToken.image && (
									<Image
										width={27}
										height={27}
										src={MainnetToken.image}
										alt={MainnetToken.name}
									/>
								)}
								<p className="text-white">{MainnetToken.symbol}</p>
							</div>
						))}
					</div>
					{/* <Separator /> */}
					<ScrollArea className=" h-[300px]   ">
						<div className="pt-3">
							<h3 className="text-lg font-semibold opacity-60 mb-5">
								{search ? "Search results" : "Tokens"}
							</h3>
							{searchResults.length ? (
								<ul className="flex flex-col gap-3">
									{searchResults.map((searchResult) => (
										<>
											<li
												key={searchResult.address}
												onClick={() => handleSetToken(searchResult)}
												className={`${
													(selectedOption === "base" &&
														quoteToken.symbol === searchResult.symbol &&
														"pointer-events-none opacity-40") ||
													(selectedOption === "quote" &&
														baseToken.symbol === searchResult.symbol &&
														"pointer-events-none opacity-40") ||
													"hover:bg-gray-800 cursor-pointer "
												}`}
											>
												<div className="flex gap-4 items-center">
													
													<Image
														width={30}
														height={30}
														src={searchResult.image}
														alt={searchResult.name}
														className="bg-gray-300 rounded-full w-10 h-10"
													/>
													<div className="flex flex-col gap-1">
														<h4>{searchResult.name}</h4>
														<p className="opacity-60 text-sm">
															{searchResult.symbol}
														</p>
													</div>
												</div>
											</li>
                      <Separator className="bg-[#476520]"/>
										</>
									))}
								</ul>
							) : (
								<div className="flex justify-center items-center">
									No token found
								</div>
							)}
						</div>
					</ScrollArea>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default SwapModal;
