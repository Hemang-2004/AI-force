"use client"

import { motion } from 'framer-motion'
import { Phone, Bot, BarChart } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    title: "Client Call Initiation",
    description: "Incoming call is received and routed to the appropriate AI agent"
  },
  {
    icon: Bot,
    title: "AI Agent Actions",
    description: "AI processes the call in real-time, providing assistance and insights"
  },
  {
    icon: BarChart,
    title: "Automation & Insights",
    description: "Automated documentation and analytics for continuous improvement"
  }
]

export function Workflow() {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
      <div className="flex justify-center items-center gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative"
          >
            {/* Step content */}
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="mb-6">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl" />
                  <div className="relative h-16 w-16 rounded-full bg-yellow-400/20 flex items-center justify-center">
                    <step.icon className="h-8 w-8 text-yellow-400" />
                  </div>
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="absolute top-1/4 -right-4 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

