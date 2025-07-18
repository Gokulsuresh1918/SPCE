"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"
import Image from "next/image"

interface TestimonialCard3DProps {
  quote: string
  author: string
  role: string
  image: string
  rating?: number
}

const TestimonialCard3D = ({ quote, author, role, image, rating = 5 }: TestimonialCard3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold-400 rounded-full opacity-20"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 20)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main card content */}
      <div
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
      >
        {/* Quote icon */}
        <motion.div
          className="absolute -top-4 -right-4 text-gold-300 opacity-20"
          style={{
            transform: "translateZ(25px)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg className="h-16 w-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </motion.div>

        {/* Rating stars */}
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <motion.svg
              key={i}
              className="h-5 w-5 text-gold-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                type: "spring",
                stiffness: 200,
              }}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
          ))}
        </div>

        {/* Quote text */}
        <motion.p
          className="text-lg italic text-gray-700 mb-6 leading-relaxed"
          style={{
            transform: "translateZ(10px)",
          }}
        >
          "{quote}"
        </motion.p>

        {/* Author info */}
        <div className="flex items-center">
          <motion.div
            className="relative w-12 h-12 rounded-full overflow-hidden mr-4"
            style={{
              transform: "translateZ(20px)",
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Image src={image} alt={author} fill className="object-cover object-center" />
          </motion.div>
          <div>
            <motion.h4
              className="font-semibold text-gray-900"
              style={{
                transform: "translateZ(15px)",
              }}
            >
              {author}
            </motion.h4>
            <motion.p
              className="text-sm text-gray-600"
              style={{
                transform: "translateZ(15px)",
              }}
            >
              {role}
            </motion.p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard3D 