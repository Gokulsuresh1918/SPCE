"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    fetchTestimonials()
  }, [])

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/testimonials?isFeatured=true&limit=12`)
      const data = await response.json()
      if (data.success) {
        // Get featured first, then other approved testimonials
        const featured = data.data.filter((t: any) => t.isFeatured)
        const others = data.data.filter((t: any) => !t.isFeatured)
        setTestimonials([...featured, ...others])
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error)
    } finally {
      setLoading(false)
    }
  }

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

  const getEventTypeLabel = (eventType: string) => {
    const labels: { [key: string]: string } = {
      wedding: "Wedding",
      corporate: "Corporate Event",
      festival: "Festival",
      birthday: "Birthday",
      sadhya: "Sadhya",
      other: "Event"
    }
    return labels[eventType] || "Event"
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
          {testimonials.length > 3 && (
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
          )}

          {/* Testimonials Grid */}
          {loading ? (
            <div className="text-center text-white py-12">
              <p>Loading testimonials...</p>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center text-gray-400 py-12">
              <p>No testimonials available yet.</p>
            </div>
          ) : (
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
                    key={testimonial._id || testimonial.id}
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
                          "{testimonial.testimonial}"
                        </blockquote>

                        {/* Rating */}
                        <div className="flex items-center space-x-1 mb-4">
                          {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                          ))}
                        </div>

                        {/* Author Info */}
                        <div className="flex items-center space-x-3">
                          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gold-500/20 flex items-center justify-center">
                            {testimonial.photos && testimonial.photos.length > 0 ? (
                              <Image
                                src={testimonial.photos[0]}
                                alt={testimonial.clientName}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  e.currentTarget.style.display = 'none'
                                }}
                              />
                            ) : (
                              <div className="text-gold-400 font-bold text-lg">
                                {testimonial.clientName.charAt(0).toUpperCase()}
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{testimonial.clientName}</h4>
                            <p className="text-gray-300 text-sm">
                              {testimonial.eventType ? getEventTypeLabel(testimonial.eventType) : "Client"}
                              {testimonial.eventDate && ` • ${new Date(testimonial.eventDate).getFullYear()}`}
                            </p>
                          </div>
                        </div>

                        {/* Photos Preview */}
                        {testimonial.photos && testimonial.photos.length > 1 && (
                          <div className="mt-4 pt-4 border-t border-white/10">
                            <div className="flex gap-2">
                              {testimonial.photos.slice(0, 3).map((photo: string, idx: number) => (
                                <div key={idx} className="relative w-16 h-16 rounded overflow-hidden">
                                  <Image
                                    src={photo}
                                    alt={`Photo ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    onError={(e) => {
                                      e.currentTarget.src = "/branded-placeholder.svg"
                                    }}
                                  />
                                </div>
                              ))}
                              {testimonial.photos.length > 3 && (
                                <div className="w-16 h-16 rounded bg-gold-500/20 flex items-center justify-center text-gold-400 text-xs">
                                  +{testimonial.photos.length - 3}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
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
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Link href="/share-testimonial">Share Your Experience</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
