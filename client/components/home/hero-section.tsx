"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import FloatingElements from "@/components/ui/floating-elements"

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleImageError = () => {
    setImageError(true)
  }

  return (
    <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700">
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Background Image with 3D Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          x: useTransform(useSpring(mousePosition.x), [0, 1], [-20, 20]),
          y: useTransform(useSpring(mousePosition.y), [0, 1], [-20, 20]),
        }}
      >
        {!imageError ? (
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/luxury-indian-wedding.png" 
              alt="Luxury Wedding Setting" 
              fill 
              priority 
              className="hero-image w-full h-full"
              sizes="100vw"
              quality={95}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXXGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              onError={handleImageError}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        ) : (
          <div className="hero-fallback w-full h-full flex items-center justify-center">
            <div className="text-center text-white/80">
              <div className="text-6xl mb-4">💒</div>
              <h2 className="text-2xl font-serif mb-2">Luxury Wedding Events</h2>
              <p className="text-lg">Creating magical moments since 1993</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
          style={{
            x: useTransform(useSpring(mousePosition.x), [0, 1], [-10, 10]),
            y: useTransform(useSpring(mousePosition.y), [0, 1], [-10, 10]),
          }}
        >
          <motion.h2 
            className="text-gold-300 font-serif text-xl md:text-2xl mb-3"
            animate={{
              textShadow: [
                "0 0 20px rgba(212, 175, 55, 0.3)",
                "0 0 40px rgba(212, 175, 55, 0.6)",
                "0 0 20px rgba(212, 175, 55, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Authentic Kerala Sadhya Experience Since 1993
          </motion.h2>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6 leading-tight"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            Experience the <motion.span 
              className="text-gold-400"
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 20px rgba(212, 175, 55, 0.5)",
                  "0 0 40px rgba(212, 175, 55, 0.8)",
                  "0 0 20px rgba(212, 175, 55, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >Traditional Sadhya</motion.span> Feast
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Served on fresh banana leaves with authentic Kerala flavors, our traditional sadhya brings the essence of 
            Kerala's rich culinary heritage to your special occasions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10"
        >
          <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white min-w-[200px] h-14 text-lg">
            <Link href="/book-sadhya">Book Your Sadhya</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 min-w-[200px] h-14 text-lg group"
          >
            <Link href="/sadhya-menu" className="flex items-center">
              View Sadhya Menu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 0.8 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
