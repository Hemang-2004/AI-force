"use client"

import * as React from "react"
import { Plus } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { Task } from "@/app/scheduler/page"

interface NewTaskDialogProps {
  onAddTask: (task: Omit<Task, "id">) => void
}

export function NewTaskDialog({ onAddTask }: NewTaskDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [formData, setFormData] = React.useState({
    title: "",
    clientName: "",
    date: new Date(),
    time: "",
    priority: "medium" as Task["priority"],
    status: "incoming" as Task["status"],
    description: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTask(formData)
    setOpen(false)
    setFormData({
      title: "",
      clientName: "",
      date: new Date(),
      time: "",
      priority: "medium",
      status: "incoming",
      description: ""
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold">
          <Plus className="mr-2 h-4 w-4" /> New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black/90 border-yellow-400/20">
        <DialogHeader>
          <DialogTitle className="text-yellow-400 text-xl">Create New Task</DialogTitle>
          <DialogDescription className="text-gray-300">
            Add a new task to your schedule.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-yellow-400">Task Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="bg-black/20 border-yellow-400/20 text-white"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="client-name" className="text-yellow-400">Client Name</Label>
            <Input
              id="client-name"
              value={formData.clientName}
              onChange={(e) => setFormData(prev => ({ ...prev, clientName: e.target.value }))}
              className="bg-black/20 border-yellow-400/20 text-white"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="date" className="text-yellow-400">Date</Label>
            <Input
              id="date"
              type="date"
              value={formData.date.toISOString().split('T')[0]}
              onChange={(e) => setFormData(prev => ({ ...prev, date: new Date(e.target.value) }))}
              className="bg-black/20 border-yellow-400/20 text-white"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time" className="text-yellow-400">Time</Label>
            <Input
              id="time"
              value={formData.time}
              onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
              className="bg-black/20 border-yellow-400/20 text-white"
              placeholder="e.g., 10:00 AM"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="priority" className="text-yellow-400">Priority</Label>
            <Select
              value={formData.priority}
              onValueChange={(value: Task["priority"]) => 
                setFormData(prev => ({ ...prev, priority: value }))
              }
            >
              <SelectTrigger className="bg-black/20 border-yellow-400/20 text-white">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent className="bg-black border-yellow-400/20">
                <SelectItem value="high" className="text-red-400">High</SelectItem>
                <SelectItem value="medium" className="text-yellow-400">Medium</SelectItem>
                <SelectItem value="low" className="text-green-400">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="status" className="text-yellow-400">Status</Label>
            <Select
              value={formData.status}
              onValueChange={(value: Task["status"]) => 
                setFormData(prev => ({ ...prev, status: value }))
              }
            >
              <SelectTrigger className="bg-black/20 border-yellow-400/20 text-white">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent className="bg-black border-yellow-400/20">
                <SelectItem value="incoming" className="text-green-400">Incoming</SelectItem>
                <SelectItem value="outgoing" className="text-blue-400">Outgoing</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description" className="text-yellow-400">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="bg-black/20 border-yellow-400/20 text-white"
              required
            />
          </div>
          <div className="flex justify-end gap-3 mt-4">
            <Button 
              type="button"
              variant="outline" 
              onClick={() => setOpen(false)}
              className="border-yellow-400/20 text-white hover:bg-yellow-400/10"
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
            >
              Create Task
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

