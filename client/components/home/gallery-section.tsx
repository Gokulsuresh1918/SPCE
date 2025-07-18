"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "corporate", label: "Corporate" },
  { id: "birthdays", label: "Birthdays" },
  { id: "decorations", label: "Decorations" },
  { id: "food", label: "Food" },
]

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800&query=luxury indian wedding ceremony with mandap",
    alt: "Wedding Ceremony",
    categories: ["weddings"],
  },
  {
    id: 2,
    src: "/placeholder.svg?height=800&width=600&query=elegant indian wedding couple portrait",
    alt: "Wedding Couple",
    categories: ["weddings"],
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800&query=corporate event setup with elegant banquet arrangement",
    alt: "Corporate Event",
    categories: ["corporate"],
  },
  {
    id: 4,
    src: "/placeholder.svg?height=800&width=600&query=elegant birthday celebration with cake and decorations",
    alt: "Birthday Celebration",
    categories: ["birthdays"],
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800&query=luxury floral decorations for indian wedding",
    alt: "Wedding Decorations",
    categories: ["weddings", "decorations"],
  },
  {
    id: 6,
    src: "/placeholder.svg?height=800&width=600&query=traditional south indian food thali served in banana leaf",
    alt: "Traditional Food",
    categories: ["food"],
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800&query=corporate meeting hall setup with stage",
    alt: "Corporate Meeting",
    categories: ["corporate"],
  },
  {
    id: 8,
    src: "/placeholder.svg?height=800&width=600&query=elegant kids birthday party decoration with balloons",
    alt: "Kids Birthday",
    categories: ["birthdays", "decorations"],
  },
]

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("all")
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

  const filteredImages =
    activeTab === "all" ? galleryImages : galleryImages.filter((img) => img.categories.includes(activeTab))

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
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
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
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default GallerySection
