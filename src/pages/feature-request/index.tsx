import Image from "next/image";
import { Inter, Noto_Sans } from "next/font/google";
import { CommandDemo } from "@/components/pages/LandingPage";
import TokensPage from "@/components/pages/Dashboard";
const inter = Inter({ subsets: ["latin"] });
import ComingSoon from "@/components/ComingSoon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <div className="mx-auto w-full space-y-4 text-Celifi-Gray max-w-lg">
        <h2 className="text-2xl md:text-3xl">Send us a feature request</h2>
        <form
          className="space-y-5"
          action="https://getform.io/f/bxojgyma"
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

          <Button className="w-full bg-[#476520]  hover:bg-[#476520]/80 text-sm font-light rounded-sm p-6">
            Send
          </Button>
        </form>
      </div>
    </main>
  );
}
