"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X, Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Enquiry from:", name, "Phone:", phoneNumber)
    setPhoneNumber("")
    setName("")
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
    const phoneNumbers = [
      '+91 7902371571',
      '+91 9746235003', 
      '+91 9567431555'
    ]
    const phoneList = phoneNumbers.join('\n')
    alert(`Please call any of our numbers:\n\n${phoneList}`)
  }

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300 bg-transparent",
        isScrolled && "bg-gradient-to-br from-maroon-900/95 via-maroon-800/95 to-maroon-700/95 backdrop-blur-sm shadow-sm",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Sree Padmanabha</span>
            <div className="flex items-center">
              <div className="w-auto h-8 text-2xl md:text-3xl font-serif font-bold text-gold-500">Sree Padmanabha</div>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold-500",
                isScrolled ? "text-white" : "text-white",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gold-500 hover:bg-gold-600 text-white">
                Book an Event
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg bg-white border shadow-2xl">
              <DialogHeader className="text-center">
                <DialogTitle className="text-2xl font-serif">
                  Book Your Event
                </DialogTitle>
                <DialogDescription className="text-gray-600 mt-2">
                  Let's make your special day unforgettable!
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleEnquirySubmit} className="space-y-4 mt-6">
                <div className="gr oid grid-cols-1 md:grid-cols-2 gap-4">
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
                
                {/* Contact Information */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-gold-500 mr-2" />
                      <span className="text-gray-700">+91 7902371571, +91 9746235003, +91 9567431555</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-gold-500 mr-2" />
                      <span className="text-gray-700">info@sreepadmanabha.com</span>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-gold-500 mr-2 mt-0.5" />
                      <span className="text-gray-700">Shantharaghavam punayalkonam perumkadavilla p o thiruvananthapuram kerala 695124</span>
                    </div>
                  </div>
                </div>

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
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/20">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Sree Padmanabha</span>
                <div className="flex items-center">
                  <div className="w-auto h-8 text-2xl font-serif font-bold text-gold-500">Sree Padmanabha</div>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/20">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white" onClick={() => setMobileMenuOpen(false)}>
                        Book an Event
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-lg bg-white border shadow-2xl">
                      <DialogHeader className="text-center">
                        <DialogTitle className="text-2xl font-serif">
                          Book Your Event
                        </DialogTitle>
                        <DialogDescription className="text-gray-600 mt-2">
                          Let's make your special day unforgettable!
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
                        
                        {/* Contact Information */}
                        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                          <div className="space-y-3 text-sm">
                            <div className="flex items-center">
                              <Phone className="h-4 w-4 text-gold-500 mr-2" />
                              <span className="text-gray-700">+91 7902371571, +91 9746235003, +91 9567431555</span>
                            </div>
                            <div className="flex items-center">
                              <Mail className="h-4 w-4 text-gold-500 mr-2" />
                              <span className="text-gray-700">info@sreepadmanabha.com</span>
                            </div>
                            <div className="flex items-start">
                              <MapPin className="h-4 w-4 text-gold-500 mr-2 mt-0.5" />
                              <span className="text-gray-700">Shantharaghavam punayalkonam perumkadavilla p o thiruvananthapuram kerala 695124</span>
                            </div>
                          </div>
                        </div>

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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
