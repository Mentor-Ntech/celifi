import Image from "next/image";
import { Inter,Noto_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}

    >
      <div className="flex justify-center items-center text-Celifi-Yellow"><h1>HELLO THERE WELCOME TO CELIFI</h1></div>
     
    </main>
  );
}
