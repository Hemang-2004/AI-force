"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, AlertTriangle, Calendar, Plus } from 'lucide-react'
import { NewTaskDialog } from "./new-task-dialog"

// Define the Task type
export type Task = {
  id: number
  clientName: string
  type: string
  priority: "high" | "medium" | "low"
  dueTime: string
  description: string
  status: string
}

const initialTasks: Task[] = [
  {
    id: 1,
    clientName: "John Smith",
    type: "callback",
    priority: "high",
    dueTime: "2 hours",
    description: "Follow up on claim #12345",
    status: "overdue"
  },
  {
    id: 2,
    clientName: "Sarah Johnson",
    type: "email",
    priority: "medium",
    dueTime: "4 hours",
    description: "Send policy update documentation",
    status: "pending"
  },
]

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)

  const addTask = (newTask: Omit<Task, "id">) => {
    setTasks(currentTasks => [
      {
        ...newTask,
        id: Math.max(...currentTasks.map(t => t.id)) + 1
      },
      ...currentTasks
    ])
  }

  const completeTask = (taskId: number) => {
    setTasks(currentTasks => 
      currentTasks.filter(task => task.id !== taskId)
    )
  }

  return (
    <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-yellow-400 text-xl font-bold">Tasks & Follow-ups</CardTitle>
          <div className="flex gap-2">
            <NewTaskDialog onAddTask={addTask} />
            <Button 
              variant="outline" 
              size="sm" 
              className="border-yellow-400/20 text-yellow-400 hover:bg-yellow-400/10"
            >
              <Clock className="mr-2 h-4 w-4" />
              View All
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <AnimatePresence>
          {tasks.map((task, index) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4 last:mb-0"
            >
              <div className="flex items-start space-x-4 rounded-lg border border-yellow-400/20 p-4 hover:bg-yellow-400/5 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-medium text-yellow-400">{task.clientName}</h3>
                    <Badge 
                      variant={task.priority === 'high' ? 'destructive' : 'secondary'}
                      className={
                        task.priority === 'high' 
                          ? 'bg-red-500 text-white' 
                          : task.priority === 'medium'
                          ? 'bg-yellow-400 text-black'
                          : 'bg-green-500 text-white'
                      }
                    >
                      {task.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-300 mb-2">{task.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Clock className="h-4 w-4 text-yellow-400" />
                    <span>Due in {task.dueTime}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="h-8 w-8 p-0 text-green-400 hover:text-green-500 hover:bg-green-400/10"
                    onClick={() => completeTask(task.id)}
                  >
                    <CheckCircle className="h-4 w-4" />
                  </Button>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    className="h-8 w-8 p-0 text-yellow-400 hover:text-yellow-500 hover:bg-yellow-400/10"
                  >
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

