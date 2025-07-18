"use client"

import { useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const partners = [
  {
    id: 1,
    name: "Taj Hotels",
    category: "Venues",
    logo: "/placeholder.svg?height=200&width=200&query=luxury hotel logo gold and white",
  },
  {
    id: 2,
    name: "Malabar Gold",
    category: "Jewellers",
    logo: "/placeholder.svg?height=200&width=200&query=luxury jewelry brand logo gold",
  },
  {
    id: 3,
    name: "WeddingWire",
    category: "Planning",
    logo: "/placeholder.svg?height=200&width=200&query=wedding planner logo minimalist",
  },
  {
    id: 4,
    name: "Royal Orchid",
    category: "Florists",
    logo: "/placeholder.svg?height=200&width=200&query=elegant floral shop logo",
  },
  {
    id: 5,
    name: "Divine Moments",
    category: "Photography",
    logo: "/placeholder.svg?height=200&width=200&query=photography studio logo camera",
  },
  {
    id: 6,
    name: "Spice Route",
    category: "Catering",
    logo: "/placeholder.svg?height=200&width=200&query=spice catering logo",
  },
  {
    id: 7,
    name: "Seasons Sound",
    category: "Entertainment",
    logo: "/placeholder.svg?height=200&width=200&query=music and entertainment logo with notes",
  },
  {
    id: 8,
    name: "Royal Rides",
    category: "Transportation",
    logo: "/placeholder.svg?height=200&width=200&query=luxury car service logo minimal",
  },
]

const PartnerNetwork = () => {
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
    <div ref={ref}>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        We collaborate with the finest vendors and venues across South India to ensure unparalleled quality and service
        for your special events.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  delay: index * 0.1,
                },
              },
            }}
            initial="hidden"
            animate={controls}
            className="flex flex-col items-center"
          >
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full flex flex-col items-center justify-center aspect-square">
              <div className="relative w-20 h-20">
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
              </div>
              <h3 className="mt-4 font-serif font-semibold text-center">{partner.name}</h3>
              <p className="text-sm text-gray-500 text-center">{partner.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default PartnerNetwork
