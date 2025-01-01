"use client"

import { motion } from 'framer-motion'
import { Zap, Heart, Scale } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: "Efficiency Gains",
    description: "Reduce task completion time by up to 60% through AI-powered automation",
    stat: "60%",
    statLabel: "Faster Processing"
  },
  {
    icon: Heart,
    title: "Enhanced Client Satisfaction",
    description: "Improve customer satisfaction scores with personalized service delivery",
    stat: "95%",
    statLabel: "Client Satisfaction"
  },
  {
    icon: Scale,
    title: "Scalability",
    description: "Easily adapt and scale your workflow processes as your business grows",
    stat: "3x",
    statLabel: "Growth Capacity"
  }
]

export function Benefits() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/5 to-transparent" />

      <div className="relative">
        <h2 className="text-3xl font-bold text-center mb-16">Benefits</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 to-transparent rounded-lg blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="relative p-6 rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm">
                <div className="mb-4">
                  <benefit.icon className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 mb-4">{benefit.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-yellow-400">{benefit.stat}</span>
                  <span className="text-sm text-gray-400">{benefit.statLabel}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

