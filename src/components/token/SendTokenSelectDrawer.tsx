"use client";
import React, { useEffect, useState } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import toast from "react-hot-toast";
import { Loader2, Wallet, X } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SelectTokenPopover } from "./SelectTokenPopover";
import useTokenBalances, { Tokens } from "./TokensData";
import { cn } from "@/lib/utils";
import { stringToBigint } from "@/hooks/stringToBigint";
import { AlertSpinner } from "../spinner";

interface SendTokenSelectDrawerProps {
	sendDrawerOpen: boolean;
	setSendDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setIsSendTokenSelectOpen: React.Dispatch<React.SetStateAction<boolean>>;
	addressToUse: string;
	sendToWalletAddr: string;
}

const SendTokenSelectDrawer: React.FC<SendTokenSelectDrawerProps> = ({
	sendDrawerOpen,
	setSendDrawerOpen,
	setIsSendTokenSelectOpen,
	addressToUse,
	sendToWalletAddr,
}) => {
	console.log(addressToUse);
	const containerRef = React.useRef<HTMLDivElement>(null);

	const [tokenAddress, setTokenAddress] = React.useState<string>("");
	const [selectedTokenSymbol, setSelectedTokenSymbol] = React.useState("");
	const [selectedToken, setSelectedToken] = useState<Tokens>({
		name: "",
		amount: 0,
		address: "",
		symbol: "",
		decimals: 0,
		image: "",
		usdAmount: 0,
		usdvalue: 0,
	});
	const [canSend, setCanSend] = useState(false);
	

	// const addressToUse = address;
	const { balances, loading, sendToken } = useTokenBalances(
		addressToUse as string
	);
	const [tokenAmountInput, setTokenAmountInput] = useState<number | string>("");
	const [tokenValueInput, setTokenValueInput] = useState<number | string>("");
	const [sendBtnText, setSendBtnText] = useState<JSX.Element | string>(
		"Continue"
	);

	useEffect(() => {
		setTokenAmountInput("");
		setTokenValueInput("");
		setSendBtnText("Continue");
		const selectedToken = balances.find(
			(tokensBalance) => tokensBalance.symbol === selectedTokenSymbol
		);
		selectedToken && setSelectedToken(selectedToken);
		setTokenAddress(selectedToken?.address as string);
	}, [selectedTokenSymbol]);

	useEffect(() => {
		if (
			sendToWalletAddr &&
			tokenAmountInput &&
			(tokenAmountInput as number) <= selectedToken.amount
		) {
			setCanSend(true);
			setSendBtnText("Continue");
		} else {
			if ((tokenAmountInput as number) > selectedToken.amount) {
				setSendBtnText("Insufficient balance");
			}
			setCanSend(false);
		}
	}, [sendToWalletAddr, tokenAmountInput]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		if (name === "tokenAmountInput") {
			const inputTokenValue = selectedToken?.usdvalue * Number(value) || "";
			console.log(inputTokenValue);
			setTokenAmountInput(value);
			setTokenValueInput(inputTokenValue);
		} else if (name === "tokenValueInput") {
			const inputTokenAmount = Number(value) / selectedToken?.usdvalue || "";
			setTokenAmountInput(inputTokenAmount);
			setTokenValueInput(value);
		}
	};
	const handleMaxClick = () => {
		setTokenAmountInput(selectedToken?.amount);
		setTokenValueInput(selectedToken?.usdAmount);
	};

	const sendTokens = async () => {
		try {
			setSendBtnText(
				<div className="flex gap-1 items-center justify-center">
					<Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
				</div>
			);
			setCanSend(false);
			if (tokenAddress && sendToWalletAddr && tokenAmountInput) {
				const amountBigint = stringToBigint(tokenAmountInput as string);
				const res = await sendToken(
					tokenAddress as `0x${string}`,
					sendToWalletAddr,
					amountBigint
				);        
				toast.success("Tokens sent successfully!");
				setSendDrawerOpen(false);
				setIsSendTokenSelectOpen(false);
			} else {
				toast.error("Please fill all the fields");
			}
		} catch (error) {
			console.error(error);
			
			toast.error("Failed to send tokens. Please try again.");
		} finally {
			setCanSend(true);
      setSendBtnText("Continue");
		}
	};

	console.log(balances);

	return (
		<Drawer
			open={sendDrawerOpen}
			onOpenChange={setSendDrawerOpen}
			direction="right"
		>
			<DrawerContent className="h-screen bg-Celifi-Primary text-Celifi-Gray border-none drawer-direction">
				<div className="relative h-full ">
					<div className="flex  mt-4">
						<X
							onClick={() => {
								setIsSendTokenSelectOpen(false);
							}}
							className=" text-white/80 cursor-pointer ml-3 w-8 h-8"
						/>
					</div>
					<div
						ref={containerRef}
						className="flex flex-col h-full items-center  mx-auto w-full md:max-w-xl py-10 px-8 md:px-0   space-y-4"
					>
						<div className="w-full  ">
							<p className="text-xl"> Enter Amount</p>
							<div className="p-6 border border-gray-300/40 rounded-xl mt-4 space-y-3">
								<div className="flex justify-end items-center gap-1">
									<Wallet className="w-3 h-3" />
									<p className="text-xs">{selectedToken?.amount}</p>
								</div>
								<div className="relative">
									<Input
										type="number"
										name="tokenAmountInput"
										className="w-full bg-transparent pl-0 text-xl py-2 pr-10 remove-arrow border-0"
										placeholder="0.00"
										value={tokenAmountInput}
										onChange={handleChange}
									/>
									<div className="absolute right-0 top-1/2 transform -translate-y-1/2 ">
										<SelectTokenPopover
											balances={balances}
											containerRef={containerRef}
											selectedTokenSymbol={selectedTokenSymbol}
											setSelectedTokenSymbol={setSelectedTokenSymbol}
										/>
									</div>
								</div>
								<hr className="border-gray-300/40 " />
								<div className="relative">
									{tokenValueInput || tokenValueInput === 0 ? (
										<p className="absolute left-0 top-1/2 transform -translate-y-1/2">
											$
										</p>
									) : null}
									<Input
										type="number"
										name="tokenValueInput"
										className={cn(
											"w-full bg-transparent py-2 pl-0  pr-10 remove-arrow border-0",
											(tokenValueInput || tokenValueInput === 0) && "pl-2"
										)}
										placeholder="$0.00"
										value={tokenValueInput}
										onChange={handleChange}
									/>
									<Button
										variant={"secondary"}
										className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-3xl opacity-80"
										onClick={handleMaxClick}
									>
										MAX
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="absolute px-8 md:px-0  bottom-0 left-1/2 transform -translate-x-1/2 mb-8 w-full md:max-w-xl">
						<Button
							disabled={!canSend}
							className="w-full "
							variant={"secondary"}
							onClick={sendTokens}
						>
							{/* <Loader2 className="animate-spin"/>  */}
							{sendBtnText}
						</Button>
					</div>
					
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default SendTokenSelectDrawer;
