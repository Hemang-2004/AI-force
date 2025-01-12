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
          <div className="relative overflow-hidden rounded-lg border border-yellow-400/20 bg-black/40 backdrop-blur-sm p-6">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              {/* Profile section */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-yellow-400/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-yellow-400">{testimonial.role}</p>
                  <p className="text-sm text-gray-400">{testimonial.company}</p>
                </div>
              </div>
              
              {/* Quote */}
              <blockquote className="relative">
                <div className="relative z-10 text-gray-300">
                  "{testimonial.quote}"
                </div>
              </blockquote>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

