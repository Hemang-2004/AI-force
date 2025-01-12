"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", efficiency: 85, satisfaction: 90, resolution: 78 },
  { month: "Feb", efficiency: 87, satisfaction: 88, resolution: 82 },
  { month: "Mar", efficiency: 89, satisfaction: 92, resolution: 85 },
  { month: "Apr", efficiency: 86, satisfaction: 91, resolution: 83 },
  { month: "May", efficiency: 90, satisfaction: 89, resolution: 87 },
  { month: "Jun", efficiency: 92, satisfaction: 93, resolution: 90 }
]

export function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis 
          dataKey="month" 
          stroke="#888888" 
          fontSize={12} 
          tickLine={false} 
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: "rgba(0,0,0,0.9)", 
            border: "1px solid rgba(250,204,21,0.2)" 
          }}
          labelStyle={{ color: "#facc15" }}
          itemStyle={{ color: "#ffffff" }}
        />
        <Line
          type="monotone"
          dataKey="efficiency"
          stroke="#facc15"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="satisfaction"
          stroke="#4ade80"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="resolution"
          stroke="#60a5fa"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

