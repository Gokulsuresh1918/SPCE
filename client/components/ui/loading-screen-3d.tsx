"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

interface LoadingScreen3DProps {
  onComplete: () => void
}

const LoadingScreen3D = ({ onComplete }: LoadingScreen3DProps) => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(onComplete, 500)
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete, isClient])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 flex items-center justify-center overflow-hidden"
        >
          {/* Floating background elements */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gold-400 rounded-full opacity-30"
                style={{
                  left: `${(i * 5.5) % 100}%`,
                  top: `${(i * 7.3) % 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, 50, 0],
                  scale: [1, 1.5, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8 + (i % 4),
                  repeat: Infinity,
                  delay: (i % 3) * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center flex flex-col items-center justify-center">
            {/* Logo/Title */}
            <motion.div
              initial={{ scale: 0, rotateY: -180 }}
              animate={{ scale: 1, rotateY: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-2">
                Sree Padmanabha
              </h1>
              <p className="text-xl text-gold-300">Kerala Sadhya Specialists</p>
            </motion.div>

            {/* 3D Loading Bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-80 h-3 bg-white/20 rounded-full overflow-hidden mb-4 mx-auto"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full relative"
                style={{
                  width: `${progress}%`,
                  transform: "translateZ(10px)",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Progress Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-white/80"
            >
              Loading... {progress}%
            </motion.div>

            {/* Floating elements around the loading area */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gold-400 rounded-full opacity-40"
                  style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${30 + (i * 10)}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen3D 