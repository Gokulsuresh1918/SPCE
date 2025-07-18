"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <div
      className={`fixed z-50 bottom-6 right-6 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <Button asChild size="icon" className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg">
        <Link
          href="https://wa.me/919876543210?text=I'm%20interested%20in%20your%20event%20management%20services"
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
