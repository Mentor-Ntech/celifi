"use client";
import * as React from "react";
import Image from "next/image";
import { useAccount, useReadContract } from "wagmi";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import useTokenBalances from "./TokensData";
import NoWallet from "../NoWalletConnection";

import ReceiveTokenDrawer from "./ReceiveTokenDrawer";
import SendTokenDrawer from "./SendTokenDrawer";

const TokensTable = () => {
	const { address, isConnected } = useAccount();
	const addressToUse = address;
	const { balances, loading, sendToken } = useTokenBalances(
		addressToUse as string
	);

	const [receiveDrawerOpen, setReceiveDrawerOpen] = React.useState(false);
	const [sendDrawerOpen, setSendDrawerOpen] = React.useState(false);


	return (
		<div className="text-Celifi-Gray">
			{!isConnected ? (
				<div className="w-full flex justify-center items-center">
					<NoWallet />
				</div>
			) : (
				<>
					<div className="flex items-center justify-around gap-6">
						<div
							className="flex justify-center items-center max-md:h-[40px] max-md:w-[129px] md:h-12 w-36 bg-custom-button-gradient rounded-[2px] text-white text-sm cursor-pointer"
							onClick={() => setReceiveDrawerOpen(true)}
						>
							<p>Receive</p>
						</div>
						<div
							className="flex justify-center items-center max-md:h-[40px] max-md:w-[129px] md:h-12 w-36 bg-custom-button-gradient rounded-[2px] text-white text-sm cursor-pointer"
							onClick={() => setSendDrawerOpen(true)}
						>
							<p>Send</p>
						</div>
					</div>

					<ReceiveTokenDrawer
						setReceiveDrawerOpen={setReceiveDrawerOpen}
						receiveDrawerOpen={receiveDrawerOpen}
						addressToUse={addressToUse as string}
					/>
					<SendTokenDrawer
						setSendDrawerOpen={setSendDrawerOpen}
						sendDrawerOpen={sendDrawerOpen}
						addressToUse={addressToUse as string}
					/>

					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="">Token</TableHead>
								<TableHead className="text-left">Amount</TableHead>
								<TableHead className="text-right">Per usd</TableHead>
								<TableHead className="text-right">USD Value</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody className="w-full">
							{balances.map((token, index) => (
								<TableRow className="max-md:text-xs" key={token.address}>
									<TableCell>
										<div className="flex gap-2">
											<div className="bg-Celifi-Gray bg-clip-content rounded-full">
												<Image
													width={30}
													height={30}
													src={token.image}
													alt=""
												/>
											</div>
											{token.symbol}
										</div>
									</TableCell>
									<TableCell className="text-left">{token.amount}</TableCell>
									<TableCell className="text-right">
										{token.usdvalue.toFixed(5)}
									</TableCell>
									<TableCell className="text-right">
										{token.usdAmount.toFixed(5)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</>
			)}
		</div>
	);
};

export default TokensTable;
