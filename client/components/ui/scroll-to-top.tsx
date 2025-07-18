"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <div
      className={`fixed z-40 bottom-6 left-6 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="rounded-full h-12 w-12 bg-gold-500 hover:bg-gold-600 shadow-lg"
      >
        <ChevronUp className="h-5 w-5" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </div>
  )
}
