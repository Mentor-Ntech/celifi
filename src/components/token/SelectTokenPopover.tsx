"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { Tokens } from "./TokensData";

interface SelectTokenPopoverProps {
	balances: Tokens[];
	containerRef: React.RefObject<HTMLDivElement>;
	selectedTokenSymbol: string;
	setSelectedTokenSymbol: React.Dispatch<React.SetStateAction<string>>;
}

export function SelectTokenPopover({
	balances,
	containerRef,
	selectedTokenSymbol,
	setSelectedTokenSymbol,
}: SelectTokenPopoverProps) {
	const [open, setOpen] = React.useState(false);
	const [tokensBalances, setTokensBalances] = React.useState<Tokens[]>([]);

	React.useEffect(() => {
		setTokensBalances(balances);
		setSelectedTokenSymbol(balances[0]?.symbol);
	}, [balances.length]);

	function splitAndCapitalize(str: string) {
		let words = str.split("-");

		for (let i = 0; i < words.length; i++) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		}

		return words.join(" ");
	}

	const popoverBtnContent = () => {
		if (selectedTokenSymbol) {
			const selectedToken = tokensBalances.find(
				(tokensBalance) => tokensBalance.symbol === selectedTokenSymbol
			);
			if (selectedToken)
				return (
					<div className="flex gap-2 justify-center items-center">
						<div className="bg-Celifi-Gray bg-clip-content rounded-full">
							<Image width={30} height={30} src={selectedToken.image} alt="" />
						</div>
						{selectedToken.symbol}
					</div>
				);
		}
	};
	return (
		<Popover modal={true} open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="secondary"
					role="combobox"
					aria-expanded={open}
					className="rounded-3xl justify-between opacity-80"
				>
					{selectedTokenSymbol ? popoverBtnContent() : "Select token..."}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="p-0" container={containerRef.current}>
				<Command>
					<CommandInput placeholder="Search token..." />
					<CommandEmpty>No tokensBalance found.</CommandEmpty>
					<CommandGroup>
						{tokensBalances.map((tokensBalance) => (
							<CommandList>
								<CommandItem
									key={tokensBalance.symbol}
									value={`${tokensBalance.symbol} ${tokensBalance.name}`}
									onSelect={(currentValue) => {
										const currVal = currentValue.split(" ")[0];
										setSelectedTokenSymbol(
											currVal === selectedTokenSymbol ? "" : currVal
										);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											"mr-2 h-4 w-4",
											selectedTokenSymbol === tokensBalance.symbol
												? "opacity-100"
												: "opacity-0"
										)}
									/>
									<div className="flex w-full py-1 items-center gap-10">
										<div className="flex gap-2 items-center w-28">
											<div className="bg-Celifi-Gray bg-clip-content rounded-full">
												<Image
													width={30}
													height={30}
													src={tokensBalance.image}
													alt=""
												/>
											</div>
											{splitAndCapitalize(tokensBalance.name)}
										</div>
										<div className="flex flex-col gap-2">
											<p className="text-sm whitespace-nowrap">{`${tokensBalance.amount.toFixed(
												2
											)} ${tokensBalance.symbol} `}</p>
											<p className="text-xs opacity-70">{`$${tokensBalance.usdAmount.toFixed(
												2
											)}`}</p>
										</div>
									</div>
								</CommandItem>
							</CommandList>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
