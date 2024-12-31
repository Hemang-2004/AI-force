'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const aiTools = [
  {
    name: "RPA (Robotic Process Automation)",
    description: "Automates repetitive tasks, improving efficiency and reducing errors in data entry and claim status updates.",
    examples: ["UiPath", "Blue Prism"]
  },
  {
    name: "NLP (Natural Language Processing)",
    description: "Enables AI to understand and generate human-like text, facilitating better query handling and insights generation.",
    examples: ["BERT", "GPT"]
  },
  {
    name: "Speech-to-Text",
    description: "Converts spoken language into written text, enabling real-time transcription and analysis of customer calls for improved service quality.",
    examples: ["Google Speech-to-Text", "OpenAI Whisper"]
  },
]

export default function AIModelsTools() {
  const [activeToolIndex, setActiveToolIndex] = useState(0)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">AI Models and Tools</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="bg-gray-100 rounded-lg p-6">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={index}
                  className={`mb-4 cursor-pointer ${activeToolIndex === index ? 'text-blue-600' : ''}`}
                  onClick={() => setActiveToolIndex(index)}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-xl font-semibold">{tool.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-2/3 px-4">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">{aiTools[activeToolIndex].name}</h3>
              <p className="mb-6">{aiTools[activeToolIndex].description}</p>
              <h4 className="text-lg font-semibold mb-2">Examples:</h4>
              <ul className="list-disc list-inside">
                {aiTools[activeToolIndex].examples.map((example, index) => (
                  <li key={index}>{example}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

