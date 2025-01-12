"use client"

import { motion } from "framer-motion"
import { Bell, AlertTriangle, CheckCircle, Info } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const notifications = [
  {
    id: 1,
    type: "urgent",
    icon: AlertTriangle,
    title: "High Priority Case #1234",
    description: "Client awaiting response for over 24 hours",
    time: "2 hours ago"
  },
  {
    id: 2,
    type: "success",
    icon: CheckCircle,
    title: "Task Completed",
    description: "Successfully resolved Case #5678",
    time: "3 hours ago"
  },
  {
    id: 3,
    type: "info",
    icon: Info,
    title: "System Update",
    description: "New AI model deployment scheduled for tomorrow",
    time: "5 hours ago"
  }
]

export function Notifications() {
  return (
    <Card className="bg-black/40 backdrop-blur-sm border-yellow-400/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notifications
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start space-x-4 rounded-lg border border-white/10 p-4"
            >
              <notification.icon className={`h-5 w-5 ${
                notification.type === "urgent" ? "text-red-400" :
                notification.type === "success" ? "text-green-400" :
                "text-blue-400"
              }`} />
              <div className="flex-1">
                <h4 className="text-sm font-medium">{notification.title}</h4>
                <p className="text-sm text-gray-400">{notification.description}</p>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

