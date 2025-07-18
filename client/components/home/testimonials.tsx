"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Anjali & Karthik",
    role: "Wedding in Kochi",
    content:
      "Sree Padmanabha transformed our dream wedding into reality. Their attention to detail, from the flower arrangements to the menu, was impeccable. Our guests are still talking about the food!",
    image: "/placeholder.svg?height=400&width=400&query=indian bride and groom portrait",
    rating: 5,
  },
  {
    id: 2,
    name: "Infosys Technologies",
    role: "Annual Corporate Event",
    content:
      "We've been working with Sree Padmanabha for our annual corporate events for the past 5 years. Their professionalism, creativity, and ability to handle large-scale events make them our preferred partner.",
    image: "/placeholder.svg?height=400&width=400&query=corporate team at event",
    rating: 5,
  },
  {
    id: 3,
    name: "Divya Menon",
    role: "50th Birthday Celebration",
    content:
      "The surprise 50th birthday celebration for my husband was executed flawlessly. The themed decor, entertainment, and specially crafted menu made it an unforgettable evening for all of us.",
    image: "/placeholder.svg?height=400&width=400&query=indian family celebrating birthday",
    rating: 5,
  },
  {
    id: 4,
    name: "Rajesh & Meera",
    role: "Destination Wedding in Munnar",
    content:
      "Planning a destination wedding in Munnar was challenging, but Sree Padmanabha made it seamless. Their local connections, attention to detail, and exceptional management skills ensured our wedding was perfect.",
    image: "/placeholder.svg?height=400&width=400&query=wedding couple in hill station",
    rating: 5,
  },
  {
    id: 5,
    name: "Kerala Tourism Board",
    role: "Cultural Festival",
    content:
      "For our annual cultural festival, Sree Padmanabha delivered an authentic Kerala experience that exceeded all expectations. The traditional sadhya setup and cultural performances were outstanding.",
    image: "/placeholder.svg?height=400&width=400&query=cultural festival celebration",
    rating: 5,
  },
  {
    id: 6,
    name: "Priya & Arun",
    role: "Traditional Onam Sadhya",
    content:
      "Our Onam celebration was made special by Sree Padmanabha's traditional sadhya. The authentic taste, beautiful presentation, and warm service made it a memorable family gathering.",
    image: "/placeholder.svg?height=400&width=400&query=onam sadhya celebration",
    rating: 5,
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(testimonials.length / 3) - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Math.ceil(testimonials.length / 3) - 1 ? 0 : prevIndex + 1))
  }

  const getVisibleTestimonials = () => {
    const startIndex = currentIndex * 3
    return testimonials.slice(startIndex, startIndex + 3)
  }

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">What Our Clients Say</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say about their experience with Sree Padmanabha.
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <Button
              onClick={handlePrev}
              size="icon"
              variant="outline"
              className="rounded-full border-gold-400 text-gold-400 hover:bg-gold-400/20 bg-transparent"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-gold-500 w-8" : "bg-gold-400/50"
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={handleNext}
              size="icon"
              variant="outline"
              className="rounded-full border-gold-400 text-gold-400 hover:bg-gold-400/20 bg-transparent"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Testimonials Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-maroon-900/80 via-maroon-800/80 to-maroon-700/80 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                    <CardContent className="p-6">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="h-8 w-8 text-gold-400 rotate-180" />
                      </div>

                      {/* Content */}
                      <blockquote className="mb-6 text-gray-200 text-sm leading-relaxed italic">
                        "{testimonial.content}"
                      </blockquote>

                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-4">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center space-x-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{testimonial.name}</h4>
                          <p className="text-gray-300 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-200 mb-6">
            Ready to create your own memorable experience?
          </p>
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
