"use client"

import { useState } from 'react'
import { Download, Calendar, TrendingUp, Users, Clock, BarChart3, PieChart, LineChart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/reports/data-table"
import { MetricsGrid } from "@/components/reports/metrics-grid"
import { PerformanceChart } from "@/components/reports/performance-chart"
import { WorkloadDistribution } from "@/components/reports/workload-distribution"
import { ResolutionTimes } from "@/components/reports/resolution-times"
import { DateRangePicker } from "@/components/reports/date-range-picker"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2024, 0, 1),
    to: new Date()
  })
  const [timeframe, setTimeframe] = useState("weekly")

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-yellow-400">Reports & Analytics</h1>
          <div className="flex items-center gap-4">
            <DateRangePicker date={dateRange} setDate={setDateRange} />
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[180px] bg-black/20 border-yellow-400/20 text-white">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent className="bg-black border-yellow-400/20">
                <SelectItem value="daily" className="text-white">Daily</SelectItem>
                <SelectItem value="weekly" className="text-white">Weekly</SelectItem>
                <SelectItem value="monthly" className="text-white">Monthly</SelectItem>
                <SelectItem value="quarterly" className="text-white">Quarterly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <MetricsGrid />

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-yellow-400">Performance Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <PerformanceChart />
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
            <CardHeader>
              <CardTitle className="text-yellow-400">Workload Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <WorkloadDistribution />
            </CardContent>
          </Card>
        </div>

        <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
          <CardHeader>
            <CardTitle className="text-yellow-400">Resolution Times</CardTitle>
          </CardHeader>
          <CardContent>
            <ResolutionTimes />
          </CardContent>
        </Card>

        <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-yellow-400">Performance Data</CardTitle>
            <Button 
              variant="outline" 
              className="border-yellow-400/20 text-black-400 hover:bg-yellow-400/10"
              onClick={() => {
                // CSV download logic will be implemented in data-table.tsx
              }}
            >
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </CardHeader>
          <CardContent>
            <DataTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

