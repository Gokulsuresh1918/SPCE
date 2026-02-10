"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Card3D from "@/components/ui/3d-card"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

const FeaturedCelebrations = () => {
  const [celebrations, setCelebrations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCelebrations()
  }, [])

  const fetchCelebrations = async () => {
    try {
      // Fetch from gallery API - get items from different categories
      const response = await fetch(`${API_BASE_URL}/gallery?limit=6`)
      const data = await response.json()
      if (data.success && data.data) {
        setCelebrations(data.data)
      }
    } catch (error) {
      console.error("Error fetching celebrations:", error)
    } finally {
      setLoading(false)
    }
  }

  const getCategoryLabel = (category: string) => {
    const labels: { [key: string]: string } = {
      wedding: "Wedding",
      corporate: "Corporate Event",
      festival: "Festival",
      birthday: "Birthday Celebration",
      sadhya: "Sadhya",
      decoration: "Decoration",
      venue: "Venue",
      other: "Event"
    }
    return labels[category] || "Event"
  }

  if (loading) {
    return (
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">Loading celebrations...</p>
          </div>
        </div>
      </section>
    )
  }

  if (celebrations.length === 0) {
    return null
  }

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">Featured Celebrations</h2>
          <p className="text-gray-200 text-lg">
            A glimpse into the magical moments we've helped create for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {celebrations.map((item, index) => (
            <Card3D key={item._id || index} className="group relative overflow-hidden rounded-lg" intensity={20}>
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.title || "Celebration"}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-xl font-serif font-bold text-white mb-1">{item.title || "Celebration"}</h3>
                <p className="text-white/80">{getCategoryLabel(item.category || "other")}</p>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCelebrations
