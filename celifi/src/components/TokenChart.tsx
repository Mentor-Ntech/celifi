"use client";
import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import Chart, { CategoryScale } from "chart.js/auto";
import DoughnutLabel from "chartjs-plugin-doughnutlabel-v3";

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

const TokenChart = () => {
  const [chartData, setChartData] = useState({
    // labels: Data.map((data) => data.year),
    datasets: [
      {
        // label: "Token",
        data: Data.map((data) => data.availableToken),
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
    labels: Data.map((data) => data.token),
  });

  return (
    <div className="relative ">
      <Doughnut
        // className="w-[50%]"
        data={chartData}
        options={{
          aspectRatio: 2.7,
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

export default TokenChart;
