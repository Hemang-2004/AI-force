'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function MainBanner() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {isClient && (
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bpo-workflow.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Transforming BPO with AI Agents for Unmatched Efficiency
        </h1>
        <Link
          href="/demo"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
        >
          Request Demo
        </Link>
      </div>
    </section>
  )
}

