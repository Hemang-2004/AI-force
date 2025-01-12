"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Claims Processing", value: 35 },
  { name: "Customer Support", value: 25 },
  { name: "Documentation", value: 20 },
  { name: "Quality Assurance", value: 15 },
  { name: "Training", value: 5 }
]

const COLORS = ['#facc15', '#4ade80', '#60a5fa', '#f472b6', '#c084fc']

export function WorkloadDistribution() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            backgroundColor: "rgba(0,0,0,0.9)", 
            border: "1px solid rgba(250,204,21,0.2)" 
          }}
          labelStyle={{ color: "#facc15" }}
          itemStyle={{ color: "#ffffff" }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

