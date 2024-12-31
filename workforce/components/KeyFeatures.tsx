'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaRobot, FaPhoneVolume, FaChartLine, FaComments } from 'react-icons/fa'

const features = [
  {
    title: "Virtual Call Agent",
    description: "AI-powered agent that handles routine client calls and escalates complex issues.",
    icon: FaRobot
  },
  {
    title: "Callback Manager Agent",
    description: "Intelligent scheduling and prioritization of follow-up calls.",
    icon: FaPhoneVolume
  },
  {
    title: "Dynamic Claim Prioritization",
    description: "AI-driven system that prioritizes claims based on urgency and complexity.",
    icon: FaChartLine
  },
  {
    title: "AI Sentiment Analysis",
    description: "Real-time analysis of customer sentiment for improved interaction.",
    icon: FaComments
  }
]

export default function KeyFeatures() {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="bg-gray-100 rounded-lg p-8 h-full">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`mb-6 cursor-pointer ${activeFeature === index ? 'text-blue-600' : ''}`}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-2xl font-semibold mb-2 flex items-center">
                    <feature.icon className="mr-2" />
                    {feature.title}
                  </h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-semibold mb-4">{features[activeFeature].title}</h3>
              <p className="mb-6">{features[activeFeature].description}</p>
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={`/feature-${activeFeature + 1}.jpg`}
                  alt={features[activeFeature].title}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

