"use client"

import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { BotIcon as Robot, LineChart, ListChecks, Bell, Headphones, FileText } from 'lucide-react'

const features = [
  {
    title: "AI Agents for Task Automation",
    description: "Virtual assistants like Virtual Call Agent and Data Entry Agent automate routine tasks, such as client interactions and data population, improving efficiency.",
    icon: Robot,
    image: "/ai-agents.jpg",
    imageAlt: "AI Agents Automation"
  },
  {
    title: "Real-Time Sentiment Analysis",
    description: "AI monitors live calls to detect client emotions, flags frustration, and provides human agents with de-escalation suggestions to enhance call outcomes.",
    icon: LineChart,
    image: "/sentiment-analysis.jpeg",
    imageAlt: "Sentiment Analysis"
  },
  {
    title: "Dynamic Claim Prioritization",
    description: "AI classifies and ranks claims based on urgency, sentiment, and SLA deadlines, ensuring critical cases are handled promptly.",
    icon: ListChecks,
    image: "/dynamic-calls.jpeg",
    imageAlt: "Claim Prioritization"
  },
  {
    title: "Proactive Client Updates",
    description: "AI agents send automatic updates via email, SMS, or WhatsApp, keeping clients informed about claim statuses and reducing follow-up calls.",
    icon: Bell,
    image: "/notification-update.avif",
    imageAlt: "Client Updates"
  },
  {
    title: "Real-Time Agent Assistance",
    description: "During calls, an AI assistant offers live suggestions and contextual knowledge to human agents, ensuring quick and accurate responses.",
    icon: Headphones,
    image: "/voice-assistance.png",
    imageAlt: "Agent Assistance"
  },
  {
    title: "AI-Powered Call Summaries",
    description: "Automatically generates concise post-call summaries, highlighting key issues and resolutions for better documentation and follow-up.",
    icon: FileText,
    image: "/summary.avif",
    imageAlt: "Call Summaries"
  }
]

export function FeatureTimeline() {
  return (
    <div className="relative py-20">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-white via-yellow-400 to-yellow-500" />

      {/* Features */}
      <div className="relative">
        {features.map((feature, index) => (
          <TimelineItem
            key={feature.title}
            feature={feature}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

function TimelineItem({ feature, index }: { feature: typeof features[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`mb-32 flex items-center justify-center gap-8 last:mb-0 ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* Content */}
      <div className="w-1/2 p-6">
        <div className="flex items-center gap-4 mb-4">
          <feature.icon className="h-8 w-8 text-yellow-400" />
          <h3 className="text-2xl font-bold">{feature.title}</h3>
        </div>
        <p className="text-gray-400">{feature.description}</p>
      </div>

      {/* Timeline dot */}
      <div className="relative">
        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400" />
      </div>

      {/* Image */}
      <div className="w-1/2">
        <Image
          src={feature.image}
          alt={feature.imageAlt}
          width={600}
          height={400}
          className="rounded-lg"
        />
      </div>
    </motion.div>
  )
}

