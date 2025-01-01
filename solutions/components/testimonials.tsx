"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: "Shreyas Biradar",
    role: "Operations Manager",
    company: "Global Solutions Inc.",
    image: "/biradar.jpeg",
    quote: "The AI-powered system has revolutionized our workflow. We've seen a 40% increase in efficiency."
  },
  {
    name: "Khyati Seth",
    role: "Senior Analyst",
    company: "MasterCard",
    image: "/khyati.jpeg",
    quote: "Our team's productivity has skyrocketed since implementing this solution. Client satisfaction is at an all-time high."
  },
  {
    name: "Saloni Shrimali",
    role: "Digital Marketing Lead",
    company: "Rippling",
    image: "/saloni.jpeg",
    quote: "The automated workflow has cut our processing time in half. It's been a game-changer for our department."
  },
  {
    name: "Varnit Mittal",
    role: "IT Manager",
    company: "ServiceFirst",
    image: "/varnit.jpeg",
    quote: "Integration was seamless, and the results were immediate. Our agents love the AI assistance features."
  }
]

export function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative group"
        >
          {/* Computer screen frame */}
          <div className="relative bg-gray-900 rounded-lg p-1">
            <div className="bg-gray-800 rounded-t-lg p-2 flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="relative aspect-video bg-gray-950 p-4">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
              <div className="relative z-10 h-full flex items-center">
                <div className="space-y-4">
                  {/* Profile section */}
                  <div className="flex items-center space-x-4">
                    <div className="relative w-16 h-16">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Quote section styled as terminal */}
                  <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                    <p className="text-green-400">$ echo "{testimonial.quote}"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

