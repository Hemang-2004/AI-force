"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Users, Clock, Target, BarChart } from 'lucide-react'

const metrics = [
  {
    title: "Total Claims Processed",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: BarChart
  },
  {
    title: "Average Resolution Time",
    value: "2.3 days",
    change: "-8.3%",
    trend: "down",
    icon: Clock
  },
  {
    title: "Active Agents",
    value: "124",
    change: "+4.2%",
    trend: "up",
    icon: Users
  },
  {
    title: "Target Achievement",
    value: "94.8%",
    change: "+2.1%",
    trend: "up",
    icon: Target
  }
]

export function MetricsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-yellow-400">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{metric.value}</div>
            <div className="flex items-center space-x-2">
              {metric.trend === "up" ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <p className={metric.trend === "up" ? "text-green-500" : "text-red-500"}>
                {metric.change}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

