"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  rotation: number
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const generateElements = () => {
      const newElements: FloatingElement[] = []
      for (let i = 0; i < 8; i++) {
        newElements.push({
          id: i,
          x: (i * 12.5) % 100,
          y: (i * 15.625) % 100,
          size: 10 + (i % 3) * 5,
          delay: (i % 4) * 0.5,
          duration: 2 + (i % 3),
          rotation: (i * 45) % 360,
        })
      }
      setElements(newElements)
    }

    generateElements()
  }, [isClient])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [element.rotation, element.rotation + 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          <div
            className={`w-full h-full rounded-full opacity-20 ${
              element.id % 3 === 0
                ? "bg-gold-400"
                : element.id % 3 === 1
                ? "bg-maroon-400"
                : "bg-white"
            }`}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements 