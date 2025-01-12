"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowUp, ArrowDown, Clock, CheckCircle, AlertTriangle } from 'lucide-react'

const metrics = [
  {
    title: "Average Resolution Time",
    value: "2.5 days",
    change: -12,
    target: "3.0 days",
    progress: 85,
    icon: Clock
  },
  {
    title: "Task Completion Rate",
    value: "94%",
    change: 8,
    target: "90%",
    progress: 94,
    icon: CheckCircle
  },
  {
    title: "Escalation Rate",
    value: "4.2%",
    change: -2,
    target: "5%",
    progress: 78,
    icon: AlertTriangle
  }
]

export function PerformanceMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-3 text-white">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20 text-white-bold">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-3">
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className={`text-sm ${
                  metric.change > 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {metric.change > 0 ? (
                    <ArrowUp className="inline h-4 w-4" />
                  ) : (
                    <ArrowDown className="inline h-4 w-4" />
                  )}
                  {Math.abs(metric.change)}%
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Progress</span>
                  <span>Target: {metric.target}</span>
                </div>
                <Progress value={metric.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

