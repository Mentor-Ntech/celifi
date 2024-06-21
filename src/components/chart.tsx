
import { Bar, BarChart, Legend, Line, LineChart, Pie, PieChart, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from "recharts"


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


  

  
  const data02 = [
    {
      "name": "cUSD",
      "value": 2400
    },
    {
      "name": "CELO",
      "value": 4567,
      "fill": "#989F46"
    },
    {
      "name": "NFT",
      "value": 1398,
      "fill": "#9BCC5A"
    },
    {
      "name": "cKES",
      "value": 9800,
      "fill": "#FCFF52"
    },
    
  ];

export function Chart() {
 

  return (
    <div className="flex justify-center items-center">
    
<PieChart width={730} height={250} >
  <h1 className="text-green-400">100</h1>
  <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={50}  startAngle={180} 
                    endAngle={0}  outerRadius={88} fill="#82ca9d" label />
                    <Tooltip />
</PieChart>
    </div>
  )
}