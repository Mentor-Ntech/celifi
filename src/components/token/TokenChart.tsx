"use client";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart, { CategoryScale } from "chart.js/auto";
import DoughnutLabel from "chartjs-plugin-doughnutlabel-v3";
import { Loader2 } from "lucide-react";

export interface  Tokens{
  name: string;
  amount: number;
address :string;
symbol: string;
decimals: number;
image: string;
usdAmount:number;
usdvalue:number;

}

interface TokenChartProps {
  TokensData: Tokens[];
  userAddress:`0x${string}` | undefined
}

export const Data = [
  {
    id: 1,
    token: "BTC",
    availableToken: 80000,
    userLost: 823,
  },
  {
    id: 2,
    token: "CUSD",
    availableToken: 45677,
    userLost: 345,
  },
  {
    id: 3,
    token: "CELO",
    availableToken: 78888,
    userLost: 555,
  },
  {
    id: 4,
    token: "USDT",
    availableToken: 90000,
    userLost: 4555,
  },
  {
    id: 5,
    token: "ETH",
    availableToken: 4300,
    userLost: 234,
  },
];

Chart.register(CategoryScale, DoughnutLabel);

const TokenChart = ({ TokensData,userAddress }: TokenChartProps) => {
  const [isMobile, setIsMobile] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [totalTokenAmount,setTotalTokenAmount]= useState(
    0
  )
  const [chartData, setChartData] = useState<{
    datasets: {
      data: number[];
      backgroundColor: string[];
      borderColor: string;
      borderWidth: number;
      cutout: string;
      circumference: number;
      rotation: number;
    }[];
    labels: string[];
  }>({
    datasets: [],
    labels: [],
  });

  // const [chartData, setChartData] = useState({
  //   // labels: Data.map((data) => data.year),
  //   datasets: [
  //     {
  //       // label: "Token",
  //       data: TokensData?.map((data:Tokens) => data.amount),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2,
  //       cutout: "70%",
  //       circumference: 180,
  //       rotation: 270,
  //     },
  //   ],
  //   labels: TokensData?.map((data) => data.symbol),
    
  // });

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize(); // Set the initial state
    window.addEventListener("resize", handleResize);
    
   

    setIsLoading(false);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(()=>{
    if (!userAddress) {
      setChartData({
        datasets: [],
        labels: [],
      });
      const totalAmount =  0 ;
    setTotalTokenAmount(totalAmount);
    return
      
    }
    const totalAmount = TokensData.reduce((acc, token) => acc + token.usdAmount, 0);
    setTotalTokenAmount(totalAmount);
    setChartData({
      datasets: [
        {
          data: TokensData.map((data) => data.usdAmount),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
          cutout: "70%",
          circumference: 180,
          rotation: 270,
        },
      ],
      labels: TokensData.map((data) => data.symbol),
    });
   
  },[userAddress,TokensData])
  
  if (isLoading)
    return (
      <div className="flex max-md:h-[154px] h-[193px] justify-center items-center">
        <Loader2 className="animate-spin text-white" />
      </div>
    );

  return (
    <div className="relative ">
      <Doughnut
        // className="w-[50%]"
        data={chartData}
        options={{
          aspectRatio: isMobile ? 3 : 5,
          plugins: {
            // title: {
            //   display: true,
            //   text: "Users Gained between 2016-2020",
            // },
            // dataLabels: {
            //     display: true,
            //     backgroundColor: "#ccc",
            //     borderRadius: 3,
            //     font: {
            //         color: 'red',
            //         weight: 'bold',
            //     }
            // },
            legend: {
              display: false,
            },
            // doughnutLabel: {
            //   labels: [
            //     {
            //       text: "550",
            //       font: {
            //         size: 20,
            //         weight: "bold",
            //       },
            //     },
            //     {
            //       text: "total",
            //     },
            //   ],
            // },
          },
        }}
      />
      <div className="text-white text-center absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="max-sm:text-xs sm:text-base md:text-xl text-[#80868B]">
          Total Wallet Value
        </div>
        <div className="text-md md:text-3xl">${totalTokenAmount.toFixed(5)}</div>
      </div>
    </div>
  );
};

export default TokenChart;
