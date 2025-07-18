"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin, MessageCircle, ExternalLink } from "lucide-react"
import FloatingElements from "@/components/ui/floating-elements"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [imageError, setImageError] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [name, setName] = useState("")
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleImageError = () => {
    setImageError(true)
  }

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you can add logic to handle the enquiry
    console.log("Enquiry from:", name, "Phone:", phoneNumber)
    setPhoneNumber("")
    setName("")
    // You can add a toast notification here
  }

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in your event management services. Name: ${name || 'Not provided'}, Phone: ${phoneNumber || 'Not provided'}`
    const whatsappUrl = `https://wa.me/917902371571?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailClick = () => {
    const subject = "Event Management Enquiry"
    const body = `Hi,\n\nI'm interested in your event management services.\n\nName: ${name || 'Not provided'}\nPhone: ${phoneNumber || 'Not provided'}\n\nPlease contact me back.\n\nBest regards`
    const mailtoUrl = `mailto:info@sreepadmanabha.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl, '_blank')
  }

  const handleLocationClick = () => {
    const locationUrl = "https://maps.app.goo.gl/hQELBm2iaaYCmUGBA"
    window.open(locationUrl, '_blank')
  }

  const handlePhoneClick = () => {
    window.open('tel:+917902371571', '_blank')
  }

  return (
    <section className="hero-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700">
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Background Image with 3D Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          x: useTransform(useSpring(mousePosition.x), [0, 1], [-20, 20]),
          y: useTransform(useSpring(mousePosition.y), [0, 1], [-20, 20]),
        }}
      >
        {!imageError ? (
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/luxury-indian-wedding.png" 
              alt="Luxury Wedding Setting" 
              fill 
              priority 
              className="hero-image w-full h-full object-cover object-center"
              sizes="100vw"
              quality={95}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXXGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              onError={handleImageError}
              onLoad={() => setIsLoaded(true)}
            />
          </div>
        ) : (
          <div className="hero-fallback w-full h-full flex items-center justify-center">
            <div className="text-center text-white/80">
              <div className="text-6xl mb-4">💒</div>
              <h2 className="text-2xl font-serif mb-2">Luxury Wedding Events</h2>
              <p className="text-lg">Creating magical moments since 1993</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
          style={{
            x: useTransform(useSpring(mousePosition.x), [0, 1], [-10, 10]),
            y: useTransform(useSpring(mousePosition.y), [0, 1], [-10, 10]),
          }}
        >
          <motion.h2 
            className="text-gold-300 font-serif text-xl md:text-2xl mb-3"
            animate={{
              textShadow: [
                "0 0 20px rgba(212, 175, 55, 0.3)",
                "0 0 40px rgba(212, 175, 55, 0.6)",
                "0 0 20px rgba(212, 175, 55, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Complete Event Management & Kerala Sadhya Experts Since 1993
          </motion.h2>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-serif mb-6 leading-tight"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            We Handle <motion.span 
              className="text-gold-400"
              animate={{
                scale: [1, 1.05, 1],
                textShadow: [
                  "0 0 20px rgba(212, 175, 55, 0.5)",
                  "0 0 40px rgba(212, 175, 55, 0.8)",
                  "0 0 20px rgba(212, 175, 55, 0.5)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >Everything</motion.span> For You
          </motion.h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            From traditional Kerala Sadhya to complete event management - weddings, festivals, corporate events, and celebrations. 
             Let us make your special moments unforgettable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white min-w-[200px] h-14 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => console.log("Button clicked!")}
              >
                Enquiry Request
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg bg-white border shadow-2xl">

              <DialogHeader className="text-center">
                <DialogTitle className="text-2xl font-serif">
                  Get In Touch
                </DialogTitle>
                <DialogDescription className="text-gray-600 mt-2">
                  We'd love to hear from you!
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleEnquirySubmit} className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white"
                >
                  Request Callback
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-serif text-center mb-4 text-gray-800">
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button
                    onClick={handleWhatsAppClick}
                    className="flex flex-col items-center p-4 bg-green-50 hover:bg-green-100 rounded-xl border border-green-200"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-green-700">WhatsApp</span>
                  </button>

                  <button
                    onClick={handlePhoneClick}
                    className="flex flex-col items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-xl border border-blue-200"
                  >
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-blue-700">Call</span>
                  </button>

                  <button
                    onClick={handleEmailClick}
                    className="flex flex-col items-center p-4 bg-red-50 hover:bg-red-100 rounded-xl border border-red-200"
                  >
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-2">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-red-700">Email</span>
                  </button>

                  <button
                    onClick={handleLocationClick}
                    className="flex flex-col items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-xl border border-purple-200"
                  >
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-2">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-sm font-medium text-purple-700">Location</span>
                  </button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10 min-w-[200px] h-14 text-lg group"
          >
            <Link href="/services" className="flex items-center text-black">
              View Our Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 0.8 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
