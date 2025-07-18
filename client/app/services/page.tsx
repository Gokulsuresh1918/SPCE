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
    animationType: "floating-hearts",
    detailedSteps: [
      {
        step: "1",
        title: "Initial Consultation & Vision Planning",
        description: "We begin with a comprehensive consultation to understand your vision, preferences, budget, and timeline. This includes discussing themes, color schemes, cultural elements, and special requirements."
      },
      {
        step: "2", 
        title: "Venue Selection & Booking",
        description: "Our team scouts and presents the best venue options within your budget and requirements. We handle all negotiations, contracts, and coordinate with venue management for seamless execution."
      },
      {
        step: "3",
        title: "Vendor Coordination & Management", 
        description: "We carefully select and coordinate with trusted vendors including photographers, caterers, decorators, musicians, and transportation services. All contracts and payments are managed through us."
      },
      {
        step: "4",
        title: "Design & Décor Planning",
        description: "Our design team creates custom décor concepts, floral arrangements, lighting designs, and stage setups that reflect your personality and cultural traditions."
      },
      {
        step: "5", 
        title: "Guest Management & RSVP Tracking",
        description: "We handle invitation design, printing, distribution, and maintain a comprehensive guest database with RSVP tracking and dietary preferences."
      },
      {
        step: "6",
        title: "Timeline Planning & Coordination",
        description: "Detailed day-of timeline creation, rehearsal coordination, and ensuring all events flow seamlessly from pre-wedding ceremonies to reception."
      }
    ]
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
    animationType: "steam-rising",
    detailedSteps: [
      {
        step: "1",
        title: "Menu Consultation & Customization",
        description: "Our expert chefs consult with you to understand preferences, dietary restrictions, and cultural requirements. We offer tasting sessions to finalize the perfect menu."
      },
      {
        step: "2",
        title: "Ingredient Sourcing & Quality Control",
        description: "We source the freshest ingredients from trusted suppliers, ensuring premium quality vegetables, spices, and proteins that meet our high standards."
      },
      {
        step: "3", 
        title: "Kitchen Setup & Equipment",
        description: "Professional kitchen setup with modern equipment, hygiene standards, and backup arrangements to ensure smooth food preparation and service."
      },
      {
        step: "4",
        title: "Service Staff Training & Coordination",
        description: "Well-trained service staff with experience in formal dining, buffet service, and live cooking stations. Professional attire and courteous service guaranteed."
      },
      {
        step: "5",
        title: "Presentation & Food Display",
        description: "Artistic food presentation with elegant tableware, decorative elements, and live cooking stations that create a memorable dining experience."
      },
      {
        step: "6",
        title: "Quality Assurance & Feedback",
        description: "Continuous quality monitoring during service, immediate feedback collection, and post-event follow-up to ensure complete satisfaction."
      }
    ]
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
    animationType: "falling-petals",
    detailedSteps: [
      {
        step: "1",
        title: "Theme Development & Visualization",
        description: "We work with you to develop a cohesive theme that reflects your personality and cultural elements. 3D visualizations help you see the final result before execution."
      },
      {
        step: "2",
        title: "Floral Design & Sourcing",
        description: "Expert florists create custom arrangements using seasonal flowers, imported blooms, and artificial elements. We source from the best flower markets and suppliers."
      },
      {
        step: "3",
        title: "Lighting Design & Installation",
        description: "Professional lighting design including ambient lighting, spotlights, colored lights, and special effects that create the perfect mood and atmosphere."
      },
      {
        step: "4",
        title: "Stage & Backdrop Design",
        description: "Custom stage designs with elegant backdrops, fabric draping, and decorative elements that serve as the perfect focal point for ceremonies and performances."
      },
      {
        step: "5",
        title: "Entrance & Pathway Décor",
        description: "Welcoming entrance designs, pathway decorations, and transitional spaces that create a magical journey for guests from arrival to the main venue."
      },
      {
        step: "6",
        title: "Table Styling & Centerpieces",
        description: "Elegant table arrangements with custom centerpieces, chair covers, table runners, and decorative elements that enhance the dining experience."
      }
    ]
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
    animationType: "camera-flash",
    detailedSteps: [
      {
        step: "1",
        title: "Pre-Event Planning & Consultation",
        description: "Detailed consultation to understand your photography preferences, important moments to capture, family groupings, and special requirements for the event."
      },
      {
        step: "2",
        title: "Pre-Wedding & Engagement Shoots",
        description: "Professional pre-wedding photography sessions at locations of your choice, including traditional and contemporary styles with professional makeup and styling."
      },
      {
        step: "3",
        title: "Event Day Coverage",
        description: "Comprehensive coverage from pre-ceremony preparations to the final farewell, including candid moments, traditional ceremonies, and all important events."
      },
      {
        step: "4",
        title: "Cinematic Video Production",
        description: "Professional video coverage with multiple cameras, drone shots, and cinematic editing to create a beautiful wedding film that tells your story."
      },
      {
        step: "5",
        title: "Same-Day Highlights & Social Media",
        description: "Quick editing and delivery of highlight videos for immediate sharing on social media, allowing guests to relive the special moments instantly."
      },
      {
        step: "6",
        title: "Album Design & Delivery",
        description: "Custom-designed premium albums with high-quality printing, personalized covers, and beautiful presentation boxes for lasting memories."
      }
    ]
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
    animationType: "gift-bounce",
    detailedSteps: [
      {
        step: "1",
        title: "Design Consultation & Concept Development",
        description: "Creative consultation to understand your style preferences, cultural elements, and theme. We create custom designs that reflect your personality and event theme."
      },
      {
        step: "2",
        title: "Material Selection & Printing",
        description: "Premium paper selection, printing techniques (offset, digital, letterpress), and finishing options including embossing, foil stamping, and special textures."
      },
      {
        step: "3",
        title: "Digital Invitation & RSVP Management",
        description: "Modern digital invitations with interactive elements, RSVP tracking, and guest management systems for efficient event planning and coordination."
      },
      {
        step: "4",
        title: "Return Gift Curation & Sourcing",
        description: "Thoughtful selection of return gifts that match your theme and budget, including personalized items, traditional gifts, and modern keepsakes."
      },
      {
        step: "5",
        title: "Packaging & Presentation Design",
        description: "Elegant packaging solutions with custom boxes, ribbons, tags, and presentation that enhance the gift-giving experience and create lasting impressions."
      },
      {
        step: "6",
        title: "Delivery & Distribution Management",
        description: "Organized delivery system for invitations and return gifts, including tracking, confirmation, and follow-up to ensure timely and proper distribution."
      }
    ]
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
    animationType: "building-rise",
    detailedSteps: [
      {
        step: "1",
        title: "Event Strategy & Objective Planning",
        description: "Understanding your business objectives, target audience, and desired outcomes to create events that align with your brand and achieve measurable results."
      },
      {
        step: "2",
        title: "Venue Selection & Technical Setup",
        description: "Professional venue selection with consideration for accessibility, technical requirements, branding opportunities, and capacity planning for optimal guest experience."
      },
      {
        step: "3",
        title: "Content & Entertainment Programming",
        description: "Curated entertainment, speakers, activities, and content that engage your audience and create memorable experiences while maintaining professional standards."
      },
      {
        step: "4",
        title: "Brand Integration & Marketing Support",
        description: "Seamless brand integration throughout the event, including signage, digital displays, branded materials, and social media coverage for maximum impact."
      },
      {
        step: "5",
        title: "Technical Production & AV Management",
        description: "Professional audio-visual setup, lighting, sound systems, and technical support to ensure smooth presentations, performances, and overall event flow."
      },
      {
        step: "6",
        title: "Post-Event Analysis & Reporting",
        description: "Comprehensive post-event reporting including attendance data, feedback analysis, ROI measurement, and recommendations for future events."
      }
    ]
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
    animationType: "wave-motion",
    detailedSteps: [
      {
        step: "1",
        title: "Destination Research & Selection",
        description: "Comprehensive research of potential destinations considering weather, accessibility, local attractions, and cultural significance to find the perfect location for your dream wedding."
      },
      {
        step: "2",
        title: "Travel & Accommodation Coordination",
        description: "End-to-end travel planning including flight bookings, hotel reservations, transportation arrangements, and special group rates for your wedding party and guests."
      },
      {
        step: "3",
        title: "Local Vendor Network & Management",
        description: "Extensive network of trusted local vendors including photographers, caterers, decorators, and transportation services, all vetted and coordinated for seamless execution."
      },
      {
        step: "4",
        title: "Guest Experience & Activities Planning",
        description: "Curated guest experiences including welcome parties, local tours, cultural activities, and leisure options to make the destination wedding memorable for everyone."
      },
      {
        step: "5",
        title: "Legal & Documentation Support",
        description: "Assistance with marriage licenses, permits, local regulations, and all necessary documentation to ensure your destination wedding is legally compliant and stress-free."
      },
      {
        step: "6",
        title: "Multi-Day Event Coordination",
        description: "Comprehensive planning and coordination of pre-wedding events, main ceremony, reception, and post-wedding activities across multiple days and venues."
      }
    ]
  },
]

// Service-specific animation components
const FloatingHearts = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-pink-400 text-2xl"
        initial={{ 
          x: Math.random() * window.innerWidth, 
          y: window.innerHeight + 100,
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
)

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

const FallingPetals = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(12)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-pink-300 text-xl"
        initial={{ 
          x: Math.random() * window.innerWidth, 
          y: -50,
          opacity: 0,
          rotate: 0
        }}
        animate={{ 
          y: window.innerHeight + 50,
          opacity: [0, 1, 0],
          rotate: 360,
          x: Math.random() * window.innerWidth
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
)

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
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                onClick={() => setActiveService(service.id)}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeService === service.id
                    ? "bg-gold-500 text-white shadow-lg scale-105"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                <motion.span 
                  className="mr-2"
                  animate={activeService === service.id ? { 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.span>
                {service.title}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView && activeService === service.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className={`mb-24 last:mb-0 relative ${
                  activeService === service.id ? "block" : "hidden"
                }`}
              >
                {/* Service-specific animations */}
                {getServiceAnimation(service.animationType)}
                
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView && activeService === service.id ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div 
                      className="flex items-center mb-6"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div 
                        className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center text-2xl mr-4`}
                        animate={activeService === service.id ? {
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {service.icon}
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">{service.title}</h2>
                    </motion.div>
                    
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">{service.description}</p>

                    {/* Detailed Steps */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-6">Our Process:</h3>
                      <div className="space-y-6">
                        {service.detailedSteps.map((step, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView && activeService === service.id ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 + i * 0.1 }}
                            className="flex items-start space-x-4"
                            whileHover={{ x: 10, transition: { duration: 0.2 } }}
                          >
                            <motion.div 
                              className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                              whileHover={{ 
                                scale: 1.2,
                                rotate: 360,
                                transition: { duration: 0.3 }
                              }}
                            >
                              {step.step}
                            </motion.div>
                            <div>
                              <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                              <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-white mb-6">What's Included:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.features.map((feature, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView && activeService === service.id ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 + i * 0.05 }}
                            className="flex items-start"
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                          >
                            <motion.div
                              whileHover={{ 
                                scale: 1.2,
                                rotate: 360,
                                transition: { duration: 0.3 }
                              }}
                            >
                              <Check className="mr-3 h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                            </motion.div>
                            <span className="text-gray-300">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Card3D className="bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/30" intensity={10}>
                          <CardContent className="p-4">
                            <span className="text-gold-400 font-semibold text-lg">{service.pricing}</span>
                          </CardContent>
                        </Card3D>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
                          <Link href="/contact" className="flex items-center">
                            Get a Quote
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.div>
                          </Link>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView && activeService === service.id ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        rotateY: [0, 5, -5, 0],
                        transition: { duration: 0.5 }
                      }}
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
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
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
