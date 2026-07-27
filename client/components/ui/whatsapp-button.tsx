"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [pulse, setPulse] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  useEffect(() => {
    const start = setTimeout(() => setPulse(true), 8000)
    const stop = setTimeout(() => setPulse(false), 10000)
    return () => {
      clearTimeout(start)
      clearTimeout(stop)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed z-50 bottom-6 right-6 transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      {pulse && <span className="absolute inset-0 rounded-full bg-ela-fresh animate-ping" aria-hidden="true" />}
      <Button asChild size="icon" className="relative rounded-full h-14 w-14 bg-ela-fresh hover:bg-ela-fresh/90 shadow-lg">
        <Link
          href="https://wa.me/917902371571?text=I'm%20interested%20in%20your%20Kerala%20sadhya%20catering%20services"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="sr-only">Chat on WhatsApp</span>
        </Link>
      </Button>
    </div>
  )
}

export default WhatsAppButton
