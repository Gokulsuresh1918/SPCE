"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

const services = [
  {
    id: "wedding",
    title: "Wedding Planning",
    description:
      "Comprehensive wedding planning services from conception to execution, ensuring every detail is perfect.",
    imageUrl: "/placeholder.svg?height=600&width=800&query=luxury indian wedding mandap with floral decorations",
  },
  {
    id: "catering",
    title: "Catering Services",
    description:
      "Exquisite multi-cuisine catering with a focus on traditional South Indian and international delicacies.",
    imageUrl:
      "/placeholder.svg?height=600&width=800&query=elegant indian food catering display with traditional dishes",
  },
  {
    id: "decoration",
    title: "Stage & Venue Decoration",
    description: "Stunning décor solutions that transform ordinary spaces into extraordinary celebratory venues.",
    imageUrl:
      "/placeholder.svg?height=600&width=800&query=luxury indian wedding stage decoration with flowers and lighting",
  },
  {
    id: "photography",
    title: "Photography & Videography",
    description: "Capturing precious moments with our team of professional photographers and cinematographers.",
    imageUrl:
      "/placeholder.svg?height=600&width=800&query=wedding photographer capturing indian bride and groom portrait",
  },
  {
    id: "invitation",
    title: "Invitation & Return Gifts",
    description: "Custom invitations and memorable return gifts that reflect your personality and event theme.",
    imageUrl:
      "/placeholder.svg?height=600&width=800&query=elegant indian wedding invitation cards with traditional design",
  },
  {
    id: "corporate",
    title: "Corporate & Birthday Events",
    description: "Professional management of corporate gatherings, birthdays, and milestone celebrations.",
    imageUrl: "/placeholder.svg?height=600&width=800&query=corporate event setup with elegant banquet hall arrangement",
  },
  {
    id: "destination",
    title: "Destination Weddings",
    description: "Planning and execution of spectacular destination weddings at exotic locations across South India.",
    imageUrl: "/placeholder.svg?height=600&width=800&query=beach wedding setup in kerala with traditional elements",
  },
]

const ServicesGrid = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                delay: index * 0.1,
              },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          <Link href={`/services#${service.id}`}>
            <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.imageUrl || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity" />

                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center text-gold-300 font-medium group-hover:translate-x-2 transition-transform">
                    <span>Learn More</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

export default ServicesGrid
