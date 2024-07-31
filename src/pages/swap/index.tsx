import Image from "next/image";
import { Inter,Noto_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import ComingSoon from "@/components/ComingSoon";
import SwapCard from "@/components/swap/SwapCard";


export default function Home() {
  return (
    <main
      className="h-full w-full flex justify-center items-center"
    >
      <SwapCard/>
    </main>
  );
}
