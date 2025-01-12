"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'
import type { Task } from "@/app/scheduler/page"

interface TaskTableProps {
  tasks: Task[]
  selectedDate?: Date
  onToggleStatus: (taskId: number) => void
}

export function TaskTable({ tasks, selectedDate, onToggleStatus }: TaskTableProps) {
  const filteredTasks = selectedDate
    ? tasks.filter(task => task.date.toDateString() === selectedDate.toDateString())
    : tasks

  return (
    <div className="rounded-md border border-yellow-400/20">
      <Table>
        <TableHeader>
          <TableRow className="border-yellow-400/20 hover:bg-yellow-400/5">
            <TableHead className="w-12 text-yellow-400">Done</TableHead>
            <TableHead className="text-yellow-400">Task</TableHead>
            <TableHead className="text-yellow-400">Time</TableHead>
            <TableHead className="text-yellow-400">Priority</TableHead>
            <TableHead className="text-yellow-400">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTasks.map((task) => (
            <TableRow 
              key={task.id} 
              className={`border-yellow-400/20 hover:bg-yellow-400/5 ${
                task.status === 'completed' ? 'opacity-50' : ''
              }`}
            >
              <TableCell>
                <Checkbox
                  checked={task.status === 'completed'}
                  onCheckedChange={() => onToggleStatus(task.id)}
                  className="border-yellow-400/20 data-[state=checked]:bg-yellow-400 data-[state=checked]:text-black"
                />
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-medium text-white">{task.title}</span>
                  <span className="text-sm text-gray-400">{task.clientName}</span>
                </div>
              </TableCell>
              <TableCell className="text-white">{task.time}</TableCell>
              <TableCell>
                <Badge 
                  variant={
                    task.priority === 'high' 
                      ? 'destructive' 
                      : task.priority === 'medium'
                      ? 'default'
                      : 'secondary'
                  }
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
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {task.status === 'incoming' ? (
                    <>
                      <ArrowDownLeft className="h-4 w-4 text-green-400" />
                      <span className="text-green-400">Incoming</span>
                    </>
                  ) : task.status === 'outgoing' ? (
                    <>
                      <ArrowUpRight className="h-4 w-4 text-blue-400" />
                      <span className="text-blue-400">Outgoing</span>
                    </>
                  ) : (
                    <span className="text-gray-400">Completed</span>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

