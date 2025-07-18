"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ShieldCheck, Clock, Users, HeartHandshake, ChefHat, Brush, LayoutDashboard, PhoneCall } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Full-Event Ownership",
    description: "Complete end-to-end event management from invitations to execution, with a single point of contact.",
  },
  {
    icon: HeartHandshake,
    title: "Vendor Partnerships",
    description: "Established partnerships with the best vendors across South India for seamless coordination.",
  },
  {
    icon: ChefHat,
    title: "In-house Expertise",
    description: "Our team of professional chefs, designers, and event coordinators ensuring quality control.",
  },
  {
    icon: LayoutDashboard,
    title: "Real-time Dashboard",
    description: "Access to a client portal for real-time updates on planning, budgeting, and execution progress.",
  },
  {
    icon: Clock,
    title: "30 Years Experience",
    description: "Three decades of experience in creating memorable celebrations across South India.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Customized solutions that reflect your personality, preferences, and cultural traditions.",
  },
  {
    icon: Brush,
    title: "Artistic Excellence",
    description:
      "Creative designs and thematic executions that transform ordinary events into extraordinary experiences.",
  },
  {
    icon: PhoneCall,
    title: "24/7 Support",
    description: "Round-the-clock customer support for queries, changes, and emergency assistance.",
  },
]

const WhyChooseUs = () => {
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
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.1,
              },
            },
          }}
          initial="hidden"
          animate={controls}
          className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="bg-gold-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <feature.icon className="h-8 w-8 text-gold-500" />
          </div>
          <h3 className="text-xl font-serif font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default WhyChooseUs
