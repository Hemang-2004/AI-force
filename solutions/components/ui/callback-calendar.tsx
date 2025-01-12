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

// Added more callbacks including January 10, 2025
const callbacks = [
  {
    date: new Date(2025, 0, 10), // January 10, 2025
    client: "Alex Thompson",
    time: "09:00 AM",
    status: "confirmed",
    type: "Product Demo"
  },
  {
    date: new Date(2025, 0, 10),
    client: "Maria Garcia",
    time: "11:30 AM",
    status: "pending",
    type: "Initial Consultation"
  },
  {
    date: new Date(2025, 0, 10),
    client: "David Chen",
    time: "2:15 PM",
    status: "confirmed",
    type: "Strategy Meeting"
  },
  {
    date: new Date(2025, 0, 11),
    client: "Sarah Johnson",
    time: "10:00 AM",
    status: "confirmed",
    type: "Follow-up Meeting"
  },
  {
    date: new Date(2025, 0, 12),
    client: "James Wilson",
    time: "3:30 PM",
    status: "pending",
    type: "Technical Review"
  }
]

export function CallbackCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date(2025, 0, 10)) // Set to January 10, 2025

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
                classNames={{
                  head_cell: "text-center font-medium text-muted-foreground",
                  cell: "text-center p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                  day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                  day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
                  day_today: "bg-accent text-accent-foreground",
                  day_outside: "text-muted-foreground opacity-50",
                  day_disabled: "text-muted-foreground opacity-50",
                  day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
                  day_hidden: "invisible",
                }}
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
                  <p className="font-medium text-white">{callback.client}</p>
                  <p className="text-sm text-gray-400">{callback.time} - {callback.type}</p>
                </div>
                <Badge
                  variant={callback.status === "confirmed" ? "default" : "secondary"}
                  className={cn(
                    callback.status === "confirmed" ? "bg-green-500/20 text-green-300" : "bg-yellow-500/20 text-yellow-300"
                  )}
                >
                  {callback.status}
                </Badge>
              </div>
            ))
          ) : (
            <div className="text-center p-6 border border-dashed border-yellow-400/20 rounded-lg">
              <p className="text-yellow-400">No callbacks scheduled for {format(date || new Date(), "MMMM d, yyyy")}</p>
              <p className="text-sm text-gray-400 mt-1">Select a different date to view callbacks</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

