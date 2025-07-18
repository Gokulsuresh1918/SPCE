"use client"

import { useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Card3D from "@/components/ui/3d-card"
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Clock, 
  Send, 
  ExternalLink
} from "lucide-react"
import FloatingElements from "@/components/ui/floating-elements"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: ""
    })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }

  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in your event management services. Name: ${formData.name || 'Not provided'}, Phone: ${formData.phone || 'Not provided'}`
    const whatsappUrl = `https://wa.me/917902371571?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmailClick = () => {
    const subject = "Event Management Enquiry"
    const body = `Hi,\n\nI'm interested in your event management services.\n\nName: ${formData.name || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nEvent Type: ${formData.eventType || 'Not specified'}\nMessage: ${formData.message || 'No message'}\n\nPlease contact me back.\n\nBest regards`
    const mailtoUrl = `mailto:info@sreepadmanabha.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl, '_blank')
  }

  const handleLocationClick = () => {
    const locationUrl = "https://maps.app.goo.gl/hQELBm2iaaYCmUGBA"
    window.open(locationUrl, '_blank')
  }

  const handlePhoneClick = () => {
    const phoneNumbers = [
      '+91 7902371571',
      '+91 9746235003', 
      '+91 9567431555'
    ]
    const phoneList = phoneNumbers.join('\n')
    alert(`Please call any of our numbers:\n\n${phoneList}`)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 7902371571", "+91 9746235003", "+91 9567431555"],
      color: "bg-blue-500",
      action: handlePhoneClick
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@sreepadmanabha.com"],
      color: "bg-red-500",
      action: handleEmailClick
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Shantharaghavam punayalkonam", "perumkadavilla p o", "thiruvananthapuram kerala 695124"],
      color: "bg-purple-500",
      action: handleLocationClick
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["24/7 Available", "Emergency Support"],
      color: "bg-green-500",
      action: null
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700">
      {/* Floating Elements */}
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-white">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Ready to create your perfect event? We're here to help you bring your vision to life. 
              Contact us today and let's start planning something extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-8 text-white">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  >
                    <Card3D className="bg-gradient-to-br from-maroon-900/80 via-maroon-800/80 to-maroon-700/80 border border-white/20 hover:shadow-xl transition-all duration-500" intensity={10}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <info.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                              ))}
                            </div>
                            {info.action && (
                              <button
                                onClick={info.action}
                                className="mt-3 text-gold-400 hover:text-gold-300 text-sm font-medium flex items-center"
                              >
                                Click to {info.title.toLowerCase()}
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card3D>
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-8"
              >
                <h3 className="text-xl font-semibold text-white mb-4">Quick Contact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    onClick={handleWhatsAppClick}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={handlePhoneClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form - No animations */}
            <div>
              <Card3D className="bg-gradient-to-br from-maroon-900/80 via-maroon-800/80 to-maroon-700/80 border border-white/20" intensity={15}>
                <CardContent className="p-8">
                  <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">
                    Send Us a Message
                  </h2>
                  
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                      <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon!</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-white text-sm font-medium">
                            Your Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold-500"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-white text-sm font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold-500"
                            placeholder="Enter your email"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="text-white text-sm font-medium">
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold-500"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div>
                          <Label htmlFor="eventType" className="text-white text-sm font-medium">
                            Event Type
                          </Label>
                          <select
                            id="eventType"
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleInputChange}
                            className="mt-1 w-full px-3 py-2 bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-gold-500 rounded-md"
                          >
                            <option value="">Select event type</option>
                            <option value="wedding">Wedding</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="festival">Festival</option>
                            <option value="birthday">Birthday</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-white text-sm font-medium">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-1 bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-gold-500"
                          placeholder="Tell us about your event requirements..."
                        />
                      </div>
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gold-500 hover:bg-gold-600 text-white h-12 text-lg"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">
              Find Us
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Visit our location in Thiruvananthapuram, Kerala. We're here to serve you with the best event management services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <Card3D className="overflow-hidden border border-white/20" intensity={20}>
              <div className="aspect-[16/9] relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.3785925905477!2d77.1126632!3d8.4504823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b3631605627f%3A0xf61342a2d0c1fce0!2sSree%20padmanabha%20caters%20and%20event%20management!5e1!3m2!1sen!2sin!4v1752846420669!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </Card3D>
            
            <div className="mt-6 text-center">
              <Button
                onClick={handleLocationClick}
                variant="outline"
                className="border-gold-400 text-gold-400 hover:bg-gold-400/20"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Open in Google Maps
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage 