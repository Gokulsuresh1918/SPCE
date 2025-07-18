"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [isClient])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(139, 69, 19, 0.1) 0%, rgba(212, 175, 55, 0.05) 50%, transparent 100%)`,
        }}
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(139, 69, 19, 0.1) 0%, rgba(212, 175, 55, 0.05) 50%, transparent 100%)",
            "radial-gradient(circle at 80% 80%, rgba(139, 69, 19, 0.1) 0%, rgba(212, 175, 55, 0.05) 50%, transparent 100%)",
            "radial-gradient(circle at 20% 20%, rgba(139, 69, 19, 0.1) 0%, rgba(212, 175, 55, 0.05) 50%, transparent 100%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating geometric shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + (i * 15)}%`,
            top: `${10 + (i * 20)}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        >
          <div
            className={`w-16 h-16 opacity-10 ${
              i % 2 === 0
                ? "bg-gold-400 rounded-full"
                : i % 3 === 0
                ? "bg-maroon-400 transform rotate-45"
                : "bg-white rounded-lg"
            }`}
          />
        </motion.div>
      ))}

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  )
}

export default AnimatedBackground 