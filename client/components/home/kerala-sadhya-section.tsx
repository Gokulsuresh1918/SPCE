"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Card3D from "@/components/ui/3d-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Utensils, Users, Clock } from "lucide-react"
import Link from "next/link"

const KeralaSadhyaSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const sadhyaItems = [
    {
      name: "Parippu Curry",
      description: "Traditional yellow dal with coconut and spices",
      image: "/placeholder.svg?height=300&width=300&query=kerala parippu curry"
    },
    {
      name: "Sambar",
      description: "Tangy lentil stew with vegetables and tamarind",
      image: "/placeholder.svg?height=300&width=300&query=kerala sambar"
    },
    {
      name: "Rasam",
      description: "Spicy and tangy soup with black pepper and tamarind",
      image: "/placeholder.svg?height=300&width=300&query=kerala rasam"
    },
    {
      name: "Aviyal",
      description: "Mixed vegetables in coconut and yogurt gravy",
      image: "/placeholder.svg?height=300&width=300&query=kerala aviyal"
    },
    {
      name: "Thoran",
      description: "Stir-fried vegetables with grated coconut",
      image: "/placeholder.svg?height=300&width=300&query=kerala thoran"
    },
    {
      name: "Pachadi",
      description: "Sweet and sour yogurt-based side dish",
      image: "/placeholder.svg?height=300&width=300&query=kerala pachadi"
    }
  ]

  const features = [
    {
      icon: Leaf,
      title: "Fresh Banana Leaves",
      description: "Served traditionally on fresh banana leaves for authentic experience"
    },
    {
      icon: Utensils,
      title: "25+ Traditional Dishes",
      description: "Complete sadhya with all traditional accompaniments"
    },
    {
      icon: Users,
      title: "Expert Chefs",
      description: "Experienced Kerala chefs with 30+ years of expertise"
    },
    {
      icon: Clock,
      title: "Fresh Preparation",
      description: "All dishes prepared fresh on the day of your event"
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-green-50 to-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-maroon-800">
            The Authentic Kerala Sadhya Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the traditional Kerala feast served on fresh banana leaves with 25+ authentic dishes 
            prepared by our expert chefs using age-old recipes passed down through generations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="h-8 w-8 text-gold-600" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Sadhya Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sadhyaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card3D className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow" intensity={15}>
                <div className="aspect-square relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* Traditional Serving Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-serif mb-6 text-maroon-800">
                Traditional Serving on Banana Leaves
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our sadhya is served the traditional way on fresh banana leaves, with each dish placed in a 
                specific order following Kerala's age-old customs. The experience includes:
              </p>
              <ul className="space-y-3">
                {[
                  "Fresh banana leaves cleaned and prepared",
                  "Traditional seating arrangement on floor",
                  "Authentic serving order and placement",
                  "All accompaniments including pickles and papadam",
                  "Traditional desserts like payasam"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center text-gray-700"
                  >
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <Card3D className="aspect-square rounded-xl overflow-hidden" intensity={20}>
                <Image
                  src="/placeholder.svg?height=600&width=600&query=traditional kerala sadhya on banana leaf"
                  alt="Traditional Kerala Sadhya"
                  fill
                  className="object-cover"
                />
              </Card3D>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-serif mb-6 text-maroon-800">
            Ready to Experience Authentic Kerala Sadhya?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your traditional Kerala sadhya for weddings, festivals, or special occasions. 
            We serve across Kerala with authentic taste and traditional presentation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
              <Link href="/book-sadhya" className="flex items-center">
                Book Your Sadhya
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-maroon-500 text-maroon-500 hover:bg-maroon-50">
              <Link href="/sadhya-menu">View Complete Menu</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default KeralaSadhyaSection 