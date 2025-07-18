"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"

const CallToAction = () => {
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
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920&query=luxury venue decoration with flowers and lights in gold theme"
          alt="Luxury Venue Setting"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
              },
            },
          }}
          initial="hidden"
          animate={controls}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
            Let's Create Your Perfect Celebration
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto">
            From weddings to corporate events, we bring your vision to life with 30 years of expertise and passion for
            perfection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white min-w-[200px]">
              <Link href="/book-event">Book an Event</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 min-w-[200px]"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
