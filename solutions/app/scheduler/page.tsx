"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
// import { TaskTable } from "@/components/scheduler/task-table"
import { NewTaskDialog } from "@/components/scheduler/new-task-dialog"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export type Task = {
  id: number
  title: string
  clientName: string
  date: Date
  time: string
  priority: "high" | "medium" | "low"
  status: "incoming" | "outgoing" | "completed"
  description: string
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: "Client Meeting",
    clientName: "John Smith",
    date: new Date(2024, 0, 15),
    time: "10:00 AM",
    priority: "high",
    status: "incoming",
    description: "Initial consultation for new claim"
  },
  {
    id: 2,
    title: "Follow-up Call",
    clientName: "Sarah Johnson",
    date: new Date(2024, 0, 15),
    time: "2:00 PM",
    priority: "medium",
    status: "outgoing",
    description: "Review policy updates"
  },
  {
    id: 3,
    title: "Document Review",
    clientName: "Mike Brown",
    date: new Date(2024, 0, 16),
    time: "11:00 AM",
    priority: "low",
    status: "incoming",
    description: "Review claim documentation"
  },
  {
    id: 4,
    title: "Team Sync",
    clientName: "Team",
    date: new Date(2024, 0, 16),
    time: "3:00 PM",
    priority: "medium",
    status: "incoming",
    description: "Weekly team sync meeting"
  },
  {
    id: 5,
    title: "Client Update",
    clientName: "Emily White",
    date: new Date(2024, 0, 17),
    time: "9:00 AM",
    priority: "high",
    status: "outgoing",
    description: "Provide status update"
  },
  {
    id: 6,
    title: "Policy Review",
    clientName: "David Lee",
    date: new Date(2024, 0, 17),
    time: "1:00 PM",
    priority: "medium",
    status: "incoming",
    description: "Annual policy review"
  },
  {
    id: 7,
    title: "Claim Processing",
    clientName: "Lisa Chen",
    date: new Date(2024, 0, 18),
    time: "10:30 AM",
    priority: "high",
    status: "incoming",
    description: "Process new claim"
  },
  {
    id: 8,
    title: "Training Session",
    clientName: "New Agents",
    date: new Date(2024, 0, 18),
    time: "2:30 PM",
    priority: "low",
    status: "outgoing",
    description: "New agent orientation"
  },
  {
    id: 9,
    title: "Client Meeting",
    clientName: "Robert Wilson",
    date: new Date(2024, 0, 19),
    time: "11:30 AM",
    priority: "medium",
    status: "incoming",
    description: "Discuss claim status"
  },
  {
    id: 10,
    title: "Documentation",
    clientName: "Anna Martinez",
    date: new Date(2024, 0, 19),
    time: "4:00 PM",
    priority: "low",
    status: "outgoing",
    description: "Update client files"
  },
]

export default function SchedulerPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [filter, setFilter] = useState<string>("all")

  const addTask = (newTask: Omit<Task, "id">) => {
    setTasks(currentTasks => [
      {
        ...newTask,
        id: Math.max(...currentTasks.map(t => t.id)) + 1
      },
      ...currentTasks
    ])
  }

  const toggleTaskStatus = (taskId: number) => {
    setTasks(currentTasks =>
      currentTasks.map(task =>
        task.id === taskId
          ? { ...task, status: task.status === 'completed' ? 'incoming' : 'completed' }
          : task
      )
    )
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === "all") return true
    return task.priority === filter
  })

  const getTasksForDate = (date: Date) => {
    return tasks.filter(task => 
      task.date.toDateString() === date.toDateString()
    ).length
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-yellow-400">Scheduler</h1>
          <div className="flex gap-4">
            <NewTaskDialog onAddTask={addTask} />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px] bg-black/20 border-yellow-400/20 text-white">
                <SelectValue placeholder="Filter by priority" />
              </SelectTrigger>
              <SelectContent className="bg-black border-yellow-400/20">
                <SelectItem value="all" className="text-white">All Tasks</SelectItem>
                <SelectItem value="high" className="text-red-400">High Priority</SelectItem>
                <SelectItem value="medium" className="text-yellow-400">Medium Priority</SelectItem>
                <SelectItem value="low" className="text-green-400">Low Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
  <CardHeader>
    <CardTitle className="text-yellow-400">Calendar</CardTitle>
  </CardHeader>
  <CardContent>
    <Calendar
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      className="rounded-md border border-yellow-400/20 bg-white text-black p-3"
      modifiers={{
        hasTasks: (date) => getTasksForDate(date) > 0
      }}
      modifiersStyles={{
        hasTasks: {
          backgroundColor: "rgba(250, 204, 21, 0.2)",
          fontWeight: "bold",
          color: "black"
        }
      }}
      styles={{
        nav_button: "bg-yellow-400 text-black hover:bg-yellow-500",
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        caption: "relative items-center justify-center flex py-2",
        head_cell: "text-black font-medium",
        cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-yellow-400",
        day: "h-9 w-9 p-0 font-normal text-black hover:bg-yellow-100",
        day_selected: "bg-yellow-400 text-black hover:bg-yellow-400",
        day_today: "bg-yellow-100 text-black",
      }}
    />
  </CardContent>
</Card>

        </div>
      </div>
    </div>
  )
}

