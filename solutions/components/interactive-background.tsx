"use client"

import { useEffect, useRef } from 'react'

interface Dot {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  alpha: number
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const frameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initDots()
    }

    // Initialize dots
    const initDots = () => {
      dotsRef.current = []
      const spacing = 30
      const rows = Math.ceil(canvas.height / spacing)
      const cols = Math.ceil(canvas.width / spacing)

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          dotsRef.current.push({
            x: j * spacing,
            y: i * spacing,
            baseX: j * spacing,
            baseY: i * spacing,
            size: 2,
            alpha: 0.3
          })
        }
      }
    }

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dotsRef.current.forEach(dot => {
        const dx = mouseRef.current.x - dot.baseX
        const dy = mouseRef.current.y - dot.baseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 100

        if (distance < maxDistance) {
          const angle = Math.atan2(dy, dx)
          const force = (maxDistance - distance) / maxDistance
          dot.x = dot.baseX + Math.cos(angle) * force * 20
          dot.y = dot.baseY + Math.sin(angle) * force * 20
          dot.alpha = 0.3 + force * 0.7
          dot.size = 2 + force * 2
        } else {
          dot.x += (dot.baseX - dot.x) * 0.1
          dot.y += (dot.baseY - dot.y) * 0.1
          dot.alpha += (0.3 - dot.alpha) * 0.1
          dot.size += (2 - dot.size) * 0.1
        }

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 208, 0, ${dot.alpha})`
        ctx.fill()
      })

      frameRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    setSize()
    window.addEventListener('resize', setSize)
    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', setSize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: '#000' }}
    />
  )
}

