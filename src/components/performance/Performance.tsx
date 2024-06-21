import React from "react";
import PerformanceChart from "./PerformanceChart";
import { LineChart } from "./LineChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Performance = () => {
  return (
    <div>
      <div className="flex justify-end text-[#62665C]">
        <Select>
          <SelectTrigger className="w-[120px] bg-transparent  border-none">
            <SelectValue placeholder="Timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">24 hours</SelectItem>
            <SelectItem value="dark">7 days</SelectItem>
            <SelectItem value="system">1 Month</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[120px] bg-transparent  border-none">
            <SelectValue placeholder="Assets" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">BTC</SelectItem>
            <SelectItem value="dark">CELO</SelectItem>
            <SelectItem value="system">cUSD</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <LineChart />
    </div>
  );
};

export default Performance;
