"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, Star, Users, Calendar, Award } from "lucide-react"
import Card3D from "@/components/ui/3d-card"
import FloatingElements from "@/components/ui/floating-elements"

const services = [
  {
    id: "wedding",
    title: "Wedding Planning",
    description:
      "Comprehensive wedding planning services from conception to execution, ensuring every detail is perfect.",
    image: "/placeholder.svg?height=600&width=800&query=luxury indian wedding mandap with floral decorations",
    features: [
      "Personalized wedding concept development",
      "Venue selection and management",
      "Vendor coordination and management",
      "Custom décor design and execution",
      "Guest management and RSVP tracking",
      "Day-of coordination and timeline planning",
      "Budget management and tracking",
    ],
    pricing: "Starting from ₹3,50,000",
    icon: "💒",
    color: "from-pink-500 to-rose-500",
    animationType: "floating-hearts"
  },
  {
    id: "catering",
    title: "Catering Services",
    description:
      "Exquisite multi-cuisine catering with a focus on traditional South Indian and international delicacies.",
    image: "/placeholder.svg?height=600&width=800&query=elegant indian food catering display with traditional dishes",
    features: [
      "Customized menu planning and tasting sessions",
      "Specialized chefs for regional cuisines",
      "Vegetarian, non-vegetarian, and Jain options",
      "Live cooking stations and food displays",
      "Premium tableware and service equipment",
      "Professional service staff and floor management",
      "Special dietary accommodations",
    ],
    pricing: "Starting from ₹1,200 per plate",
    icon: "🍽️",
    color: "from-orange-500 to-red-500",
    animationType: "steam-rising"
  },
  {
    id: "decoration",
    title: "Stage & Venue Decoration",
    description: "Stunning décor solutions that transform ordinary spaces into extraordinary celebratory venues.",
    image:
      "/placeholder.svg?height=600&width=800&query=luxury indian wedding stage decoration with flowers and lighting",
    features: [
      "Themed concept development and visualization",
      "Custom floral arrangements and installations",
      "Lighting design and execution",
      "Entrance and pathway décor",
      "Table styling and centerpieces",
      "Backdrop and stage design",
      "Prop sourcing and custom fabrication",
    ],
    pricing: "Starting from ₹1,50,000",
    icon: "🌸",
    color: "from-purple-500 to-pink-500",
    animationType: "falling-petals"
  },
  {
    id: "photography",
    title: "Photography & Videography",
    description: "Capturing precious moments with our team of professional photographers and cinematographers.",
    image: "/placeholder.svg?height=600&width=800&query=wedding photographer capturing indian bride and groom portrait",
    features: [
      "Pre-event photoshoots and concept videos",
      "Candid and traditional photography coverage",
      "Cinematic film production",
      "Drone aerial photography and videography",
      "Same-day edit highlights video",
      "Photo booth and instant printing services",
      "Premium album design and production",
    ],
    pricing: "Starting from ₹1,25,000",
    icon: "📸",
    color: "from-blue-500 to-indigo-500",
    animationType: "camera-flash"
  },
  {
    id: "invitation",
    title: "Invitation & Return Gifts",
    description: "Custom invitations and memorable return gifts that reflect your personality and event theme.",
    image:
      "/placeholder.svg?height=600&width=800&query=elegant indian wedding invitation cards with traditional design",
    features: [
      "Custom invitation card design and printing",
      "Digital invitation and RSVP management",
      "Unique packaging and delivery options",
      "Personalized return gift curation",
      "Themed gift packaging and presentation",
      "Corporate branding for business events",
      "Budget-friendly options for all scales",
    ],
    pricing: "Starting from ₹25,000",
    icon: "🎁",
    color: "from-green-500 to-emerald-500",
    animationType: "gift-bounce"
  },
  {
    id: "corporate",
    title: "Corporate & Birthday Events",
    description: "Professional management of corporate gatherings, birthdays, and milestone celebrations.",
    image: "/placeholder.svg?height=600&width=800&query=corporate event setup with elegant banquet hall arrangement",
    features: [
      "Corporate event strategy and planning",
      "Themed birthday party planning and execution",
      "Team building activities and experiences",
      "Entertainment programming and management",
      "Technical production and AV support",
      "Brand activation and experiential marketing",
      "VIP management and protocol services",
    ],
    pricing: "Starting from ₹75,000",
    icon: "🏢",
    color: "from-gray-500 to-slate-500",
    animationType: "building-rise"
  },
  {
    id: "destination",
    title: "Destination Weddings",
    description: "Planning and execution of spectacular destination weddings at exotic locations across South India.",
    image: "/placeholder.svg?height=600&width=800&query=beach wedding setup in kerala with traditional elements",
    features: [
      "Destination scouting and selection",
      "Travel and accommodation arrangements",
      "Local vendor sourcing and management",
      "Guest experience planning and activities",
      "Legal and documentation assistance",
      "Cultural integration and experiences",
      "Multi-day event planning and coordination",
    ],
    pricing: "Starting from ₹7,50,000",
    icon: "🏖️",
    color: "from-cyan-500 to-blue-500",
    animationType: "wave-motion"
  },
]

// Service-specific animation components
const FloatingHearts = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  if (dimensions.width === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400 text-2xl"
          initial={{ 
            x: Math.random() * dimensions.width, 
            y: dimensions.height + 100,
            opacity: 0 
          }}
          animate={{ 
            y: -100,
            opacity: [0, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

const SteamRising = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-8 bg-orange-300/30 rounded-full"
        initial={{ 
          x: 20 + i * 15, 
          y: 300,
          opacity: 0,
          scale: 0.5
        }}
        animate={{ 
          y: -50,
          opacity: [0, 0.8, 0],
          scale: [0.5, 1.2, 0.8]
        }}
        transition={{
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "easeOut"
        }}
      />
    ))}
  </div>
)

const FallingPetals = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  if (dimensions.width === 0) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-xl"
          initial={{ 
            x: Math.random() * dimensions.width, 
            y: -50,
            opacity: 0,
            rotate: 0
          }}
          animate={{ 
            y: dimensions.height + 50,
            opacity: [0, 1, 0],
            rotate: 360,
            x: Math.random() * dimensions.width
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut"
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
};

const CameraFlash = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(4)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-20 h-20 bg-blue-400/20 rounded-full"
        initial={{ 
          x: 100 + i * 50, 
          y: 150,
          opacity: 0,
          scale: 0
        }}
        animate={{ 
          opacity: [0, 0.6, 0],
          scale: [0, 2, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 1.5,
          ease: "easeOut"
        }}
      />
    ))}
  </div>
)

const GiftBounce = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-green-400 text-2xl"
        initial={{ 
          x: 50 + i * 30, 
          y: 200,
          opacity: 0
        }}
        animate={{ 
          y: [200, 100, 200],
          opacity: [0, 1, 0],
          rotate: [0, 15, -15, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.6,
          ease: "easeInOut"
        }}
      >
        🎁
      </motion.div>
    ))}
  </div>
)

const BuildingRise = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-4 h-16 bg-gray-400/40"
        style={{ left: 50 + i * 20, bottom: 0 }}
        initial={{ 
          height: 0,
          opacity: 0
        }}
        animate={{ 
          height: [0, 64],
          opacity: [0, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: i * 0.5,
          ease: "easeOut"
        }}
      />
    ))}
  </div>
)

const WaveMotion = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-full h-8 bg-cyan-400/20"
        style={{ bottom: 20 + i * 15 }}
        initial={{ 
          x: "-100%",
          opacity: 0
        }}
        animate={{ 
          x: "100%",
          opacity: [0, 0.6, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: i * 1,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
)

const getServiceAnimation = (animationType: string) => {
  switch (animationType) {
    case "floating-hearts":
      return <FloatingHearts />
    case "steam-rising":
      return <SteamRising />
    case "falling-petals":
      return <FallingPetals />
    case "camera-flash":
      return <CameraFlash />
    case "gift-bounce":
      return <GiftBounce />
    case "building-rise":
      return <BuildingRise />
    case "wave-motion":
      return <WaveMotion />
    default:
      return null
  }
}

export default function ServicesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700">
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive event management solutions for every celebration. From intimate gatherings to grand celebrations, 
              our team brings expertise, creativity, and flawless execution to every event.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Service-specific animations */}
                {getServiceAnimation(service.animationType)}
                
                <Card3D className="bg-gradient-to-br from-maroon-900/80 via-maroon-800/80 to-maroon-700/80 border border-white/20 h-full" intensity={15}>
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Service Icon and Title */}
                    <motion.div 
                      className="flex items-center mb-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-xl mr-3`}
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {service.icon}
                      </motion.div>
                      <h3 className="text-xl font-serif font-bold text-white">{service.title}</h3>
                    </motion.div>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 flex-grow">{service.description}</p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start text-xs text-gray-300"
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                          >
                            <motion.div
                              whileHover={{ 
                                scale: 1.2,
                                rotate: 360,
                                transition: { duration: 0.3 }
                              }}
                            >
                              <Check className="mr-2 h-3 w-3 text-gold-500 flex-shrink-0 mt-0.5" />
                            </motion.div>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className="mb-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/30 rounded-md p-3">
                          <span className="text-gold-400 font-semibold text-sm">{service.pricing}</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-auto"
                    >
                      <Button asChild className="w-full bg-gold-500 hover:bg-gold-600 text-white">
                        <Link href="/contact" className="flex items-center justify-center">
                          Get Quote
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </motion.div>
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center"
          >
            <Card3D className="bg-gradient-to-br from-maroon-900/80 via-maroon-800/80 to-maroon-700/80 border border-white/20" intensity={15}>
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">Looking for Bundled Services?</h2>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Explore our exclusive event packages designed to provide comprehensive solutions at competitive prices.
                </p>
                <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
                  <Link href="/packages" className="flex items-center">
                    View Packages
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card3D>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center"
          >
            <Card3D className="bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/30" intensity={15}>
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">Ready to Create Memories?</h2>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                  Contact us today to discuss how we can bring your vision to life.
                </p>
                <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
                  <Link href="/contact" className="flex items-center">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card3D>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
