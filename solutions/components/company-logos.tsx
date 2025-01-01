"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

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
    <div className="w-full overflow-hidden bg-black/50 backdrop-blur-sm py-12">
      <div
        ref={containerRef}
        className="flex space-x-12 overflow-x-hidden whitespace-nowrap"
      >
        {/* Double the logos for seamless loop */}
        {[...companies, ...companies].map((company, index) => (
          <motion.div
            key={`${company.name}-${index}`}
            className="flex-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

