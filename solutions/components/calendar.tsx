"use client"

import * as React from "react"
import { CalendarIcon } from 'lucide-react'
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const callbacks = [
  {
    date: new Date(2024, 0, 15),
    client: "John Smith",
    time: "10:30 AM",
    status: "pending"
  },
  {
    date: new Date(2024, 0, 15),
    client: "Sarah Johnson",
    time: "2:00 PM",
    status: "confirmed"
  },
  {
    date: new Date(2024, 0, 16),
    client: "Bob Wilson",
    time: "11:15 AM",
    status: "pending"
  }
]

export function CallbackCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const todaysCallbacks = callbacks.filter(
    callback => callback.date.toDateString() === date?.toDateString()
  )

  return (
    <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-white">
          <span>Callback & Follow-Up Scheduler</span>
          <Popover>
            <PopoverTrigger asChild>
              <button
                className={cn(
                  "inline-flex items-center rounded-md border border-yellow-400/20 px-3 py-2 text-sm font-medium hover:bg-yellow-400/10",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {todaysCallbacks.length > 0 ? (
            todaysCallbacks.map((callback, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border border-white/10 hover:bg-white/5"
              >
                <div>
                  <p className="font-medium">{callback.client}</p>
                  <p className="text-sm text-gray-400">{callback.time}</p>
                </div>
                <Badge
                  variant={callback.status === "confirmed" ? "default" : "secondary"}
                >
                  {callback.status}
                </Badge>
              </div>
            ))
          ) : (
            <p className="text-center text-yellow-400">No callbacks scheduled for this date</p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

