import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import React from "react";
interface RequestFeatureProps {
	reqFeatureOpen: boolean;
	setReqFeatureOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const RequestFeature = ({
	reqFeatureOpen,
	setReqFeatureOpen,
}: RequestFeatureProps) => {
	return (
		<Drawer open={reqFeatureOpen} onOpenChange={setReqFeatureOpen}>
			<DrawerContent className="px-4 bg-Celifi-Primary text-Celifi-Gray border-none">
				<div className="mx-auto w-full max-w-lg">
					<DrawerHeader className="px-0">
						<DrawerTitle className="text-2xl md:text-3xl">
							Send us a feature request
						</DrawerTitle>
					</DrawerHeader>
					<form
						className="space-y-5"
						action="https://getform.io/f/byvpqzra"
						method="POST"
					>
						<Input
							placeholder="Email"
							type="email"
							name="email"
							className="bg-transparent border-[#476520] w-full"
							required
						/>
						<Textarea
							name="message"
							placeholder="Input message"
							className="bg-transparent border-[#476520] w-full h-60"
							required
						/>

						<DrawerFooter className="px-0">
							<Button className="w-full bg-[#476520]  hover:bg-[#476520]/80 text-sm font-light rounded-2xl p-6">
								Send
							</Button>
						</DrawerFooter>
					</form>
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default RequestFeature;
