import Image from "next/image";
import { Inter,Noto_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import ComingSoon from "@/components/ComingSoon";


export default function Home() {
  return (
    <main
      className="h-full w-full flex justify-center items-center"
    >
      <ComingSoon/>
      {/* <div className="flex justify-center items-center text-Celifi-Yellow"><h1>HELLO THERE WELCOME TO CELIFI</h1></div>
      */}
    </main>
  );
}
