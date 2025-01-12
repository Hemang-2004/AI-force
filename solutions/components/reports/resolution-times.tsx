"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { category: "Claims", time: 2.5 },
  { category: "Inquiries", time: 1.2 },
  { category: "Complaints", time: 3.1 },
  { category: "Documentation", time: 1.8 },
  { category: "Appeals", time: 4.2 }
]

export function ResolutionTimes() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis
          dataKey="category"
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
          tickFormatter={(value) => `${value}d`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
            border: "1px solid rgba(250,204,21,0.2)"
          }}
          labelStyle={{ color: "#facc15" }}
          itemStyle={{ color: "#ffffff" }}
        />
        <Bar
          dataKey="time"
          fill="#facc15"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

