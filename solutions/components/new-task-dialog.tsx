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
import type { Task } from "./task-list"

interface NewTaskDialogProps {
  onAddTask: (task: Omit<Task, "id">) => void
}

export function NewTaskDialog({ onAddTask }: NewTaskDialogProps) {
  const [open, setOpen] = React.useState(false)
  const [formData, setFormData] = React.useState({
    clientName: "",
    type: "callback",
    priority: "medium",
    dueTime: "",
    description: "",
    status: "pending"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddTask(formData)
    setOpen(false)
    setFormData({
      clientName: "",
      type: "callback",
      priority: "medium",
      dueTime: "",
      description: "",
      status: "pending"
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
            Add a new task or follow-up item to your schedule.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="client-name" className="text-yellow-400">Client Name</Label>
            <Input
              id="client-name"
              value={formData.clientName}
              onChange={(e) => setFormData(prev => ({ ...prev, clientName: e.target.value }))}
              className="bg-black/20 border-yellow-400/20 text-white placeholder:text-gray-500"
              placeholder="Enter client name"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="priority" className="text-yellow-400">Priority</Label>
            <Select 
              value={formData.priority}
              onValueChange={(value: "high" | "medium" | "low") => 
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
            <Label htmlFor="due-time" className="text-yellow-400">Due Time</Label>
            <Input
              id="due-time"
              value={formData.dueTime}
              onChange={(e) => setFormData(prev => ({ ...prev, dueTime: e.target.value }))}
              className="bg-black/20 border-yellow-400/20 text-white placeholder:text-gray-500"
              placeholder="e.g., 2 hours, 1 day"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description" className="text-yellow-400">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="bg-black/20 border-yellow-400/20 text-white placeholder:text-gray-500"
              placeholder="Enter task details..."
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

