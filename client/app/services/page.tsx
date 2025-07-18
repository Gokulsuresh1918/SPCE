"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
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
    color: "from-pink-500 to-rose-500"
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
    color: "from-orange-500 to-red-500"
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
    color: "from-purple-500 to-pink-500"
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
    color: "from-blue-500 to-indigo-500"
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
    color: "from-green-500 to-emerald-500"
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
    color: "from-gray-500 to-slate-500"
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
    color: "from-cyan-500 to-blue-500"
  },
]

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Calendar, value: "1000+", label: "Events Managed" },
  { icon: Award, value: "30+", label: "Years Experience" },
  { icon: Star, value: "5.0", label: "Average Rating" }
]

export default function ServicesPage() {
  const [activeService, setActiveService] = useState("wedding")
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

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <Card3D className="bg-gradient-to-br from-maroon-900/80 via-maroon-800/80 to-maroon-700/80 border border-white/20" intensity={15}>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </CardContent>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeService === service.id
                    ? "bg-gold-500 text-white shadow-lg scale-105"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                <span className="mr-2">{service.icon}</span>
                {service.title}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              className={`mb-24 last:mb-0 ${
                activeService === service.id ? "block" : "hidden"
              }`}
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-2xl mr-4`}>
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">{service.title}</h2>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">{service.description}</p>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-6">What's Included:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1 + i * 0.05 }}
                          className="flex items-start"
                        >
                          <Check className="mr-3 h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Card3D className="bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/30" intensity={10}>
                      <CardContent className="p-4">
                        <span className="text-gold-400 font-semibold text-lg">{service.pricing}</span>
                      </CardContent>
                    </Card3D>
                    <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
                      <Link href="/contact" className="flex items-center">
                        Get a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>

                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="relative"
                >
                  <Card3D className="overflow-hidden border border-white/20" intensity={20}>
                    <div className="aspect-[4/3] relative">
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  </Card3D>
                </motion.div>
              </div>
            </motion.div>
          ))}
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

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">Client Testimonials</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our valued clients have to say about their experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The catering service was exceptional. Our guests couldn't stop talking about the food quality and presentation.",
                author: "Rajesh & Priya",
                event: "Wedding in Kochi",
                rating: 5
              },
              {
                quote:
                  "From concept to execution, the team's attention to detail in the décor and overall event management was outstanding.",
                author: "Infosys Ltd.",
                event: "Annual Corporate Gala",
                rating: 5
              },
              {
                quote:
                  "The destination wedding of our dreams! Every detail was handled perfectly, allowing us to simply enjoy our special day.",
                author: "Vikram & Meera",
                event: "Beach Wedding in Goa",
                rating: 5
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
              >
                <Card3D className="bg-gradient-to-br from-maroon-900/80 via-maroon-800/80 to-maroon-700/80 border border-white/20" intensity={10}>
                  <CardContent className="p-8">
                    <div className="mb-4 text-gold-400">
                      <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-gray-300 italic mb-6 leading-relaxed">{testimonial.quote}</p>
                    <div className="flex items-center space-x-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                      ))}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-gray-400 text-sm">{testimonial.event}</p>
                    </div>
                  </CardContent>
                </Card3D>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-12"
          >
            <Button asChild variant="outline" className="border-gold-400 text-gold-400 hover:bg-gold-400/20">
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.5 }}
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
