"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Users, Calendar, Star } from "lucide-react"

const AnimatedStats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: Heart,
      number: "1000+",
      label: "Sadhya Events",
      color: "text-maroon-500",
      bgColor: "bg-maroon-50",
    },
    {
      icon: Users,
      number: "1 Cr +",
      label: "Happy Guests",
      color: "text-gold-500",
      bgColor: "bg-gold-50",
    },
    {
      icon: Calendar,
      number: "30",
      label: "Years of Tradition",
      color: "text-maroon-500",
      bgColor: "bg-maroon-50",
    },
    {
      icon: Star,
      number: "4.9",
      label: "Customer Rating",
      color: "text-gold-500",
      bgColor: "bg-gold-50",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">
            Our Kerala Sadhya Legacy
          </h2>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Three decades of serving authentic Kerala sadhya and preserving traditional culinary heritage.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="text-center group"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="bg-gradient-to-br from-maroon-900/80 via-maroon-800/80 to-maroon-700/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/20"
                whileHover={{
                  rotateY: 180,
                  transition: { duration: 0.6 }
                }}
              >
                <stat.icon className="h-10 w-10 text-gold-400" />
              </motion.div>
              
              <motion.div
                className="mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-white mb-1"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2 + 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-200 font-medium">{stat.label}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AnimatedStats 