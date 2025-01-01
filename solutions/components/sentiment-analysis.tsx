"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  // Animated,
} from "recharts"
import { motion } from 'framer-motion'

// Generate more data points
const generateData = (count: number) => {
  return Array.from({ length: count }, () => ({
    sentimentScore: Math.random() * 0.4 + 0.6,
    productivity: Math.random() * 50 + 50,
    priority: Math.floor(Math.random() * 10) + 1,
    resolution: Math.floor(Math.random() * 30) + 5,
    satisfaction: Math.floor(Math.random() * 30) + 70,
  }))
}

const sentimentData = generateData(50)

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <div className="bg-black/90 p-4 rounded-lg border border-gray-800">
        <p className="text-yellow-400">Sentiment Score: {data.sentimentScore.toFixed(2)}</p>
        <p className="text-blue-400">Productivity: {data.productivity.toFixed(1)}%</p>
        <p className="text-green-400">Priority: {data.priority}</p>
        <p className="text-purple-400">Resolution: {data.resolution}min</p>
        <p className="text-pink-400">Satisfaction: {data.satisfaction}%</p>
      </div>
    )
  }
  return null
}

export function SentimentAnalysis() {
  const [animatedData, setAnimatedData] = useState(sentimentData.map(item => ({ ...item, animatedProductivity: 0 })))

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(sentimentData.map(item => ({ ...item, animatedProductivity: item.productivity })))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sentiment Analysis Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[600px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart
                margin={{
                  top: 20,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <XAxis
                  type="number"
                  dataKey="sentimentScore"
                  name="Sentiment Score"
                  domain={[0.6, 1]}
                  label={{ value: 'Sentiment Score', position: 'bottom', fill: '#888' }}
                  tick={{ fill: '#888' }}
                />
                <YAxis
                  type="number"
                  dataKey="animatedProductivity"
                  name="Productivity"
                  domain={[50, 100]}
                  label={{ value: 'Productivity (%)', angle: -90, position: 'left', fill: '#888' }}
                  tick={{ fill: '#888' }}
                />
                <ZAxis
                  type="number"
                  dataKey="priority"
                  range={[50, 400]}
                  name="Priority"
                />
                <Tooltip content={<CustomTooltip />} />
                <Scatter data={animatedData} isAnimationActive={false}>
                  {animatedData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={`hsl(${entry.priority * 30}, 70%, 50%)`}
                    />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

