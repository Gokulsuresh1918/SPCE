"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Card3D from "@/components/ui/3d-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar, Users, Star } from "lucide-react"
import Link from "next/link"

const TraditionalKeralaSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const keralaHighlights = [
    {
      title: "Traditional Recipes",
      description: "Age-old recipes passed down through generations",
      icon: "🍛",
      color: "bg-orange-100"
    },
    {
      title: "Fresh Ingredients",
      description: "Locally sourced fresh vegetables and spices",
      icon: "🥬",
      color: "bg-green-100"
    },
    {
      title: "Authentic Taste",
      description: "Original Kerala flavors and cooking methods",
      icon: "🌶️",
      color: "bg-red-100"
    },
    {
      title: "Cultural Experience",
      description: "Complete traditional dining experience",
      icon: "🏺",
      color: "bg-yellow-100"
    }
  ]

  const occasions = [
    {
      title: "Weddings",
      description: "Traditional wedding sadhya with all rituals",
      image: "/weddign.jpeg",
      details: "Complete wedding catering with traditional setup"
    },
    {
      title: "Festivals",
      description: "Onam, Vishu, and other Kerala festivals",
      image: "/temple.jpeg",
      details: "Authentic festival sadhya experience"
    },
    {
      title: "Corporate Events",
      description: "Traditional Kerala cuisine for corporate functions",
      image: "/corporate.jpeg",
      details: "Professional catering for business events"
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">
            Celebrating Kerala's Rich Culinary Heritage
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From the backwaters of Alleppey to the hills of Munnar, we bring the authentic taste of Kerala 
            to your special occasions with traditional sadhya and regional specialties.
          </p>
        </motion.div>

        {/* Kerala Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {keralaHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className="bg-gradient-to-br from-maroon-900/80 via-maroon-800/80 to-maroon-700/80 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 transition-transform border border-white/20"
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                {highlight.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
              <p className="text-gray-200 text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Occasions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {occasions.map((occasion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card3D className="bg-gradient-to-br from-maroon-900/80 via-maroon-800/80 to-maroon-700/80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-white/20" intensity={15}>
                <div className="aspect-[4/3] relative">
                  <Image
                    src={occasion.image}
                    alt={occasion.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{occasion.title}</h3>
                    <p className="text-white/90 text-sm mb-2">{occasion.description}</p>
                    <div className="flex items-center text-white/80 text-sm">
                      <Star className="h-4 w-4 mr-1" />
                      {occasion.details}
                    </div>
                  </div>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-serif mb-6 text-white">
            Serving All Over Kerala
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            We provide our authentic Kerala sadhya services throughout the entire state of Kerala, 
            from the northern districts to the southernmost regions, bringing the traditional taste to your doorstep.
          </p>
         
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
              <Link href="/contact" className="flex items-center">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-400/20">
              <Link href="/service-areas">Service Areas</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TraditionalKeralaSection 