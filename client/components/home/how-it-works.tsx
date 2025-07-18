"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CalendarClock, ClipboardCheck, Sparkles, HeartHandshake } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Initial Consultation",
    description: "Schedule a free consultation to discuss your vision, preferences, and requirements.",
    icon: CalendarClock,
  },
  {
    id: 2,
    title: "Tailored Proposal",
    description: "Receive a detailed proposal with customized options and transparent pricing.",
    icon: ClipboardCheck,
  },
  {
    id: 3,
    title: "Planning & Preparation",
    description: "Our expert team coordinates all aspects of your event with regular updates.",
    icon: Sparkles,
  },
  {
    id: 4,
    title: "Flawless Execution",
    description: "Relax and enjoy while we bring your vision to life with meticulous attention to detail.",
    icon: HeartHandshake,
  },
]

const HowItWorks = () => {
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
    <div ref={ref} className="relative">
      {/* Connector Line */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-[calc(100%-6rem)] bg-gold-300 hidden md:block"></div>

      <div className="grid gap-8 md:gap-0 md:grid-cols-2">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0
          const isLast = index === steps.length - 1

          return (
            <motion.div
              key={step.id}
              className={`relative ${isEven ? "md:pr-16 md:text-right" : "md:pl-16"} ${
                isEven && index === 0 ? "md:row-start-1" : ""
              } ${!isEven && index === 1 ? "md:row-start-1 md:col-start-1" : ""}`}
              variants={{
                hidden: { opacity: 0, x: isEven ? 50 : -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.2,
                  },
                },
              }}
              initial="hidden"
              animate={controls}
            >
              {/* Desktop Circle */}
              <div
                className={`absolute hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-gold-500 z-10 top-4 ${
                  isEven ? "right-[-21px]" : "left-[-21px]"
                }`}
              >
                <span className="text-white font-bold">{step.id}</span>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mb-10 md:mb-24">
                {/* Mobile header with icon and step number */}
                <div className="flex items-center mb-4 md:hidden">
                  <div className="bg-gold-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    {step.id}
                  </div>
                  <h3 className="text-xl font-serif font-semibold">{step.title}</h3>
                </div>

                {/* Desktop header */}
                <h3 className="text-xl font-serif font-semibold mb-4 hidden md:block">{step.title}</h3>

                {/* Icon container */}
                <div className={`flex ${isEven ? "md:justify-end" : "md:justify-start"} mb-4`}>
                  <div className="p-3 bg-gold-50 rounded-full inline-flex hidden md:flex">
                    <step.icon className="h-8 w-8 text-gold-500" />
                  </div>
                </div>

                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default HowItWorks
