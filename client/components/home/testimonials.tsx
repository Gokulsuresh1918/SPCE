"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
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
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div ref={ref} className="relative">
      <div className="flex justify-center mb-8 space-x-4">
        <Button
          onClick={handlePrev}
          size="icon"
          variant="outline"
          className="rounded-full border-gold-300 hover:bg-gold-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          onClick={handleNext}
          size="icon"
          variant="outline"
          className="rounded-full border-gold-300 hover:bg-gold-50"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
        }}
        initial="hidden"
        animate={controls}
      >
        <Card className="border-none shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-t" />
                <div className="absolute bottom-4 left-4 md:hidden">
                  <h3 className="text-xl font-serif font-bold text-white">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-200">{testimonials[currentIndex].role}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-gold-300 rotate-180" />
                </div>
                <blockquote className="mb-6 text-lg italic text-gray-700">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                <div className="flex items-center space-x-1 mb-6">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold">{testimonials[currentIndex].name}</h3>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-2.5 rounded-full ${index === currentIndex ? "bg-gold-500" : "bg-gold-200"}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Testimonials
