import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      position: 'right' as const, // Explicitly type 'right' as a literal type
    },
  },
  tension: 0.3,
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data = () => ({
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      label: "First dataset",
      data: [0, 3, 10, 9, 19, 15, 8, 15, 20],
      fill: "start",
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(252, 255, 82, 1)");
        gradient.addColorStop(1, "rgba(71, 101, 32, 0)");
        return gradient;
      },
      borderColor: "rgba(252, 255, 82, 1)",
    },
  ],
});

export function LineChart() {
  return <Line options={options} data={data()} />;
}
