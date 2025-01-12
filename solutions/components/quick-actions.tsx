"use client"

import { motion } from "framer-motion"
import { Plus, UserPlus, Bot, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function QuickActions() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-wrap gap-4 mb-8"
    >
      <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
        <Plus className="mr-2 h-4 w-4" /> New Claim
      </Button>
      <Button variant="outline" className="border-yellow-400/20">
        <UserPlus className="mr-2 h-4 w-4" /> Assign Task
      </Button>
      <Button variant="outline" className="border-yellow-400/20">
        <Bot className="mr-2 h-4 w-4" /> AI Assistant
      </Button>
      <Button variant="outline" className="border-yellow-400/20">
        <Filter className="mr-2 h-4 w-4" /> Filter View
      </Button>
    </motion.div>
  )
}

