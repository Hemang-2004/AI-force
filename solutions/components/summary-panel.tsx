"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const sentimentData = [
  { name: "Mon", positive: 40, neutral: 24, negative: 10 },
  { name: "Tue", positive: 30, neutral: 20, negative: 15 },
  { name: "Wed", positive: 45, neutral: 25, negative: 8 },
  { name: "Thu", positive: 35, neutral: 18, negative: 12 },
  { name: "Fri", positive: 50, neutral: 22, negative: 5 },
]

const metrics = [
  {
    title: "Average Resolution Time",
    value: "2.5 days",
    change: "-12%",
    changeType: "positive"
  },
  {
    title: "Tasks Completed Today",
    value: "24/30",
    change: "+8%",
    changeType: "positive"
  },
  {
    title: "Escalation Rate",
    value: "4.2%",
    change: "-2%",
    changeType: "positive"
  }
]

export function SummaryPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs ${
                metric.changeType === "positive" ? "text-green-400" : "text-red-400"
              }`}>
                {metric.change} from last month
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="md:col-span-2 lg:col-span-3"
      >
        <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
          <CardHeader>
            <CardTitle>Sentiment Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={sentimentData}>
                <XAxis dataKey="name" stroke="#888888" />
                <YAxis stroke="#888888" />
                <Bar dataKey="positive" fill="#4ade80" radius={[4, 4, 0, 0]} />
                <Bar dataKey="neutral" fill="#facc15" radius={[4, 4, 0, 0]} />
                <Bar dataKey="negative" fill="#f87171" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

