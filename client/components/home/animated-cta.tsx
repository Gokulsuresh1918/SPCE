"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

const AnimatedCTA = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity, scale }}
      className="py-24 md:py-32 bg-gradient-to-br from-maroon-500 via-maroon-600 to-maroon-700 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gold-400 rounded-full opacity-20"
            style={{
              left: `${(i * 8.33) % 100}%`,
              top: `${(i * 6.25) % 100}%`,
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

      {/* Floating sparkles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${10 + (i * 15)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="h-6 w-6 text-gold-300 opacity-40" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6 leading-tight">
            Ready to Experience{" "}
            <motion.span
              className="text-gold-400"
              animate={{
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
            >
              Authentic Kerala Sadhya?
            </motion.span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Book your traditional Kerala sadhya for weddings, festivals, or special occasions. 
            We bring authentic Kerala flavors to your doorstep.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white min-w-[200px] h-14 text-lg group">
              <Link href="/book-sadhya" className="flex items-center">
                Book Your Sadhya
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
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
        </motion.div>

        {/* Additional floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                left: `${10 + (i * 15)}%`,
                top: `${20 + (i * 20)}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, 20, 0],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default AnimatedCTA 