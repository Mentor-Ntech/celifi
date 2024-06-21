"use client";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart, { CategoryScale } from "chart.js/auto";
import DoughnutLabel from "chartjs-plugin-doughnutlabel-v3";
import { Loader2 } from "lucide-react";

export const Data = [
  {
    id: 1,
    wallet: "Wallet Value",
    availableToken: 80000,
  },
];

Chart.register(CategoryScale, DoughnutLabel);

const DefiChart = () => {
  
  const [isMobile, setIsMobile] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const [chartData, setChartData] = useState({
    // labels: Data.map((data) => data.year),
    datasets: [
      {
        // label: "Token",
        data: Data.map((data) => data.availableToken),
        backgroundColor: ["#EDEEC2"],
        borderColor: "black",
        borderWidth: 2,
        cutout: "70%",
        circumference: 180,
        rotation: 270,
      },
    ],
    labels: Data.map((data) => data.wallet),
  });

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

  if (isLoading)
    return (
      <div className="flex max-md:h-[154px] h-[193px] justify-center items-center">
        <Loader2 className="animate-spin text-white" />
      </div>
    );

  return (
    <div className="relative">
      <Doughnut
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
        <div className="text-md md:text-3xl">$1566.56</div>
      </div>
    </div>
  );
};

export default DefiChart;
