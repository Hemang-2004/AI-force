"use client"

import * as React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

const data = [
  {
    id: 1,
    agent: "John Smith",
    claimsProcessed: 145,
    avgResolutionTime: "2.3 days",
    satisfaction: 94,
    status: "excellent"
  },
  {
    id: 2,
    agent: "Sarah Johnson",
    claimsProcessed: 132,
    avgResolutionTime: "2.5 days",
    satisfaction: 92,
    status: "excellent"
  },
  {
    id: 3,
    agent: "Michael Brown",
    claimsProcessed: 128,
    avgResolutionTime: "2.8 days",
    satisfaction: 88,
    status: "good"
  },
  {
    id: 4,
    agent: "Emily Davis",
    claimsProcessed: 118,
    avgResolutionTime: "3.1 days",
    satisfaction: 85,
    status: "good"
  },
  {
    id: 5,
    agent: "David Wilson",
    claimsProcessed: 98,
    avgResolutionTime: "3.5 days",
    satisfaction: 82,
    status: "average"
  }
]

export function DataTable() {
  const downloadCSV = () => {
    // Convert data to CSV format
    const headers = ["Agent", "Claims Processed", "Avg Resolution Time", "Satisfaction (%)", "Status"]
    const csvData = data.map(row => [
      row.agent,
      row.claimsProcessed,
      row.avgResolutionTime,
      row.satisfaction,
      row.status
    ])
    
    // Add headers and join with newlines
    const csvContent = [
      headers.join(","),
      ...csvData.map(row => row.join(","))
    ].join("\n")
    
    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    const timestamp = new Date().toISOString().split('T')[0]
    
    link.setAttribute('href', url)
    link.setAttribute('download', `performance_report_${timestamp}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button
          onClick={downloadCSV}
          variant="outline"
          className="border-yellow-400/20 text-black-xl hover:bg-yellow-400/10"
        >
          <Download className="mr-2 h-4 w-4" />
          Download CSV
        </Button>
      </div>
      <div className="rounded-md border border-yellow-400/20">
        <Table>
          <TableHeader>
            <TableRow className="border-yellow-400/20 hover:bg-yellow-400/5">
              <TableHead className="text-yellow-400">Agent</TableHead>
              <TableHead className="text-yellow-400 text-right">Claims Processed</TableHead>
              <TableHead className="text-yellow-400">Avg Resolution Time</TableHead>
              <TableHead className="text-yellow-400 text-right">Satisfaction</TableHead>
              <TableHead className="text-yellow-400">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id} className="border-yellow-400/20 hover:bg-yellow-400/5">
                <TableCell className="font-medium text-white">{row.agent}</TableCell>
                <TableCell className="text-right text-white">{row.claimsProcessed}</TableCell>
                <TableCell className="text-white">{row.avgResolutionTime}</TableCell>
                <TableCell className="text-right text-white">{row.satisfaction}%</TableCell>
                <TableCell>
                  <Badge
                    className={
                      row.status === 'excellent'
                        ? 'bg-green-500 text-white'
                        : row.status === 'good'
                        ? 'bg-yellow-400 text-black'
                        : 'bg-blue-500 text-white'
                    }
                  >
                    {row.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

