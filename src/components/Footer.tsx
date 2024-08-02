import React from "react";
import { Button } from "./ui/button";
import { HeroIcon } from "./icons/Hero";
import { CelifiIcon } from "./icons/CelifiLogo";
import { SwapIcon } from "./icons/swap";
import { LiquidityIcon } from "./icons/liquidity";
import { StakingIcon } from "./icons/Staking";
import { DashboardIcon } from "./icons/Dashboard";
import { GovernanceIcon } from "./icons/Governance";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

export function Footer() {
	const router = useRouter();
	const pathname = usePathname();
	console.log(pathname);
	// router.p
	return (
		<div className="   bg-Celifi-Dark-Gray  h-20 w-screen  flex md:justify-center justify-between pr-4 md:gap-5 items-center  mr-2 rounded ">
			{/* <Link href={"/governance"} className="flex flex-col justify-center  items-center  text-xs">
				<div className="bg-  rounded-full">
					<GovernanceIcon
						className={` ${
							pathname.includes("governance")
								? "text-Celifi-Yellow"
								: "text-Celifi-Gray"
						}`}
					/>
				</div>

				<Button
					onClick={() => router.push("/governance")}
					className={`  text-xs ${
						pathname.includes("governance")
							? "text-Celifi-Yellow"
							: "text-Celifi-Gray"
					}`}
					variant="link"
				>
					Governance
				</Button>
			</Link> */}

			<Link href={"/staking"} className="flex flex-col justify-center  items-center  text-xs">
				<div className="  rounded-full">
					<StakingIcon
						className={` ${
							pathname.includes("staking")
								? "text-Celifi-Yellow"
								: "text-Celifi-Gray"
						}`}
					/>
				</div>

				<Button
					// onClick={() => router.push("/staking")}
					className={` text-xs  ${
						pathname.includes("staking")
							? "text-Celifi-Yellow"
							: "text-Celifi-Gray"
					}`}
					variant="link"
				>
					Staking
				</Button>
			</Link>
			<Link href={"/dashboard"} className="flex flex-col justify-center  items-center  text-xs">
				<div className="rounded-full">
					<DashboardIcon
						className={` ${
							pathname.includes("dashboard")
								? "text-Celifi-Yellow"
								: "text-Celifi-Gray"
						}`}
					/>
				</div>

				<Button
					// onClick={() => router.push("/dashboard")}
					className={` text-xs ${
						pathname.includes("dashboard")
							? "text-Celifi-Yellow"
							: "text-Celifi-Gray"
					}`}
					variant="link"
				>
					Dashboard
				</Button>
			</Link>
			<Link href={'/swap'} className="flex flex-col justify-center  items-center  text-xs">
				<div className=" rounded-full">
					<SwapIcon
						className={` ${
							pathname.includes("swap")
								? "text-Celifi-Yellow"
								: "text-Celifi-Gray"
						}`}
					/>
				</div>

				<Button
					// onClick={() => router.push("/swap")}
					className={`  text-xs ${
						pathname.includes("swap")
							? "text-Celifi-Yellow"
							: "text-Celifi-Gray"
					}`}
					variant="link"
				>
					Swap
				</Button>
			</Link>
			{/* <div className="flex flex-col justify-center  items-center  text-xs">
				<div className=" rounded-full">
					<LiquidityIcon className="text-gray-300" />
				</div>

				<Button
					onClick={() => router.push("/liquidity")}
					className="text-Celifi-Gray text-xs "
					variant="link"
				>
					Liquidity
				</Button>
			</div> */}
		</div>
	);
}
