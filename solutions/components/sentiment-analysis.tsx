"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts"

const data = [
  { time: "00:00", positive: 65, neutral: 25, negative: 10 },
  { time: "04:00", positive: 70, neutral: 20, negative: 10 },
  { time: "08:00", positive: 60, neutral: 30, negative: 10 },
  { time: "12:00", positive: 75, neutral: 20, negative: 5 },
  { time: "16:00", positive: 80, neutral: 15, negative: 5 },
  { time: "20:00", positive: 70, neutral: 20, negative: 10 },
]

export function SentimentAnalysis() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20 text-white">
        <CardHeader>
          <CardTitle>Sentiment Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="positive" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4ade80" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4ade80" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="neutral" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#facc15" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#facc15" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="negative" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f87171" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#f87171" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="positive"
                  stroke="#4ade80"
                  fillOpacity={1}
                  fill="url(#positive)"
                  stackId="1"
                />
                <Area
                  type="monotone"
                  dataKey="neutral"
                  stroke="#facc15"
                  fillOpacity={1}
                  fill="url(#neutral)"
                  stackId="1"
                />
                <Area
                  type="monotone"
                  dataKey="negative"
                  stroke="#f87171"
                  fillOpacity={1}
                  fill="url(#negative)"
                  stackId="1"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

