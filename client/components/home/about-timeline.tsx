"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Award, Users, Utensils, MapPin } from "lucide-react"

const milestones = [
  {
    year: "1993",
    title: "Humble Beginnings",
    description:
      "Founded as a small family catering service in Trivandrum, Kerala with a focus on traditional Kerala cuisine for small gatherings.",
    icon: Calendar,
  },
  {
    year: "2000",
    title: "Expansion & Growth",
    description:
      "Expanded services to include event management and decoration, becoming a one-stop solution for celebrations across Kerala.",
    icon: Users,
  },
  {
    year: "2008",
    title: "Award Recognition",
    description:
      'Recognized as the "Best Wedding Caterer in South India" by Hospitality Excellence Awards, marking our commitment to quality.',
    icon: Award,
  },
  {
    year: "2015",
    title: "Culinary Excellence",
    description:
      "Established our central kitchen facility with state-of-the-art equipment and a team of 50+ specialized chefs from across India.",
    icon: Utensils,
  },
  {
    year: "2023",
    title: "Pan-South India Presence",
    description:
      "Celebrating 30 years with operations in Kerala, Tamil Nadu, Karnataka, Andhra Pradesh, and Telangana, serving over 1000 events annually.",
    icon: MapPin,
  },
]

const AboutTimeline = () => {
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
      {/* Timeline connector */}
      <div className="timeline-connector md:left-1/2 hidden md:block" />

      {/* Timeline items */}
      <div className="space-y-12 md:space-y-0">
        {milestones.map((milestone, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={milestone.year}
              className="flex flex-col md:flex-row items-center"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: index * 0.2,
                  },
                },
              }}
              initial="hidden"
              animate={controls}
            >
              {/* Desktop layout */}
              <div className="hidden md:block md:w-1/2 md:pr-12 md:text-right">
                {isEven ? (
                  <>
                    <h3 className="text-xl font-bold text-gold-500">{milestone.year}</h3>
                    <h4 className="text-2xl font-serif font-semibold mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </>
                ) : (
                  <div className="flex justify-end">
                    <div className="bg-white p-4 rounded-full shadow-lg">
                      <milestone.icon className="h-10 w-10 text-maroon-500" />
                    </div>
                  </div>
                )}
              </div>

              {/* Timeline connector dot */}
              <div className="hidden md:flex items-center justify-center z-10">
                <div className="w-10 h-10 rounded-full bg-gold-500 border-4 border-white shadow-lg" />
              </div>

              <div className="hidden md:block md:w-1/2 md:pl-12">
                {!isEven ? (
                  <>
                    <h3 className="text-xl font-bold text-gold-500">{milestone.year}</h3>
                    <h4 className="text-2xl font-serif font-semibold mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </>
                ) : (
                  <div className="flex">
                    <div className="bg-white p-4 rounded-full shadow-lg">
                      <milestone.icon className="h-10 w-10 text-maroon-500" />
                    </div>
                  </div>
                )}
              </div>

              {/* Mobile layout */}
              <div className="flex md:hidden items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className="bg-white p-3 rounded-full shadow-lg mb-2">
                    <milestone.icon className="h-6 w-6 text-maroon-500" />
                  </div>
                  <div className="w-0.5 flex-1 bg-gold-300" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gold-500">{milestone.year}</h3>
                  <h4 className="text-xl font-serif font-semibold mb-2">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default AboutTimeline
