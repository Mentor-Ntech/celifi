import React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardFooter,
	CardTitle,
} from "./ui/card";
import Image from "next/image";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "lucide-react";
import { NetWorkDangerIcon } from "./icons/netWorkDanger";
import { CelifiIcon } from "./icons/CelifiLogo";
const NoWallet = () => {
	return (
		<Alert className="bg-Celifi-Slate-Yellow">
			<RocketIcon className="h-4 w-4" />
			<AlertTitle>Connect Your Wallet!</AlertTitle>
			<AlertDescription className="flex justify-center items-center ">
				<NetWorkDangerIcon />
			</AlertDescription>
		</Alert>
	);
};

export default NoWallet; //exporting the component
