"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const companies = [
  { name: 'American Express', logo: '/american.svg' },
  { name: 'Master Card', logo: '/master.svg' },
  { name: 'NetApp', logo: '/netapp.svg' },
  { name: 'Oracle', logo: '/oracle.svg' },
  { name: 'BoAt', logo: '/boat.svg' },
  { name: 'Cisco', logo: '/cisco.svg' },
  { name: 'Morgan Stanley', logo: '/all.svg' },
  { name: 'Goldman Sachs', logo: '/goldman.svg' },
  { name: 'JP Morgan and Chase', logo: '/jpm.svg' },
  { name: 'Media.net', logo: '/medianet.svg' },
  { name: 'Ford', logo: '/ford.svg' },
  { name: 'BMW', logo: '/bmw.svg' },
  { name: 'Koenigsegg', logo: '/visa.svg' },
  { name: 'Arista', logo: '/arista.svg' },
  { name: 'BUXX', logo: '/buxx.svg' },
  { name: 'Bank Of Korea', logo: '/korea.svg' },
  { name: 'Mc Donalds', logo: '/mcd.svg' },
  { name: 'KFC', logo: '/kfc.svg' },
  { name: 'VISA', logo: '/visa.svg' },
  { name: 'TradeDesk', logo: '/buxx.svg' },
]

export function CompanyLogos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = containerRef.current
    if (!scrollContainer) return

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full border-none bg-black/95 shadow-2xl">
      <CardHeader className="pb-0">
        <CardTitle className="text-center text-3xl font-bold tracking-tight text-white">
          Companies That Trust Us
          <div className="mx-auto mt-4 h-1 w-24 bg-yellow-400/70"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="overflow-hidden p-0">
        <div className="relative w-full">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-black/95 to-transparent"></div>
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-black/95 to-transparent"></div>
          
          <div className="w-full overflow-hidden py-12">
            <div
              ref={containerRef}
              className="flex space-x-16 overflow-x-hidden whitespace-nowrap px-8"
            >
              {/* Double the logos for seamless loop */}
              {[...companies, ...companies].map((company, index) => (
                <motion.div
                  key={`${company.name}-${index}`}
                  className="flex-none"
                  initial={{ opacity: 1 }}
                  whileHover={{ 
                    scale: 1.1,
                    filter: "brightness(1.2)",
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="group relative">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="h-12 w-auto object-contain brightness-[2] contrast-125 filter invert opacity-70 transition-all duration-300 group-hover:opacity-100"
                    />
                    <div className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 transform opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="rounded-md bg-black/80 px-2 py-1 text-xs text-yellow-400">
                        {company.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
