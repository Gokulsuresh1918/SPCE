"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

const categories = [
  { id: "all", label: "All" },
  { id: "wedding", label: "Weddings" },
  { id: "corporate", label: "Corporate" },
  { id: "festival", label: "Festivals" },
  { id: "birthday", label: "Birthdays" },
  { id: "sadhya", label: "Sadhya" },
  { id: "decoration", label: "Decorations" },
  { id: "venue", label: "Venue" },
]

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [galleryImages, setGalleryImages] = useState([])
  const [loading, setLoading] = useState(true)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    fetchGalleryImages()
  }, [])

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const fetchGalleryImages = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/gallery`)
      const data = await response.json()
      if (data.success) {
        setGalleryImages(data.data || [])
      }
    } catch (error) {
      console.error("Error fetching gallery:", error)
    } finally {
      setLoading(false)
    }
  }

  const filteredImages =
    activeTab === "all" 
      ? galleryImages 
      : galleryImages.filter((img) => img.category === activeTab)

  return (
    <div ref={ref}>
      <Tabs defaultValue="all" onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="bg-ivory-100">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-gold-500 data-[state=active]:text-white"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {loading ? (
                <div className="col-span-full text-center text-white py-8">Loading gallery...</div>
              ) : filteredImages.length === 0 ? (
                <div className="col-span-full text-center text-gray-400 py-8">No images found in this category</div>
              ) : (
                filteredImages.map((image, index) => (
                  <motion.div
                    key={image._id || image.id}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.4,
                          delay: index * 0.1,
                        },
                      },
                    }}
                    initial="hidden"
                    animate={controls}
                    className="group relative overflow-hidden rounded-lg"
                  >
                    <div className="aspect-[4/3] w-full relative">
                      <Image
                        src={image.imageUrl || "/placeholder.svg"}
                        alt={image.title || "Gallery Image"}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="font-medium">{image.title}</p>
                          {image.description && (
                            <p className="text-sm text-gray-200 mt-1">{image.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default GallerySection
