"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import GlassCard from "@/components/ui/glass-card"
import { NeonButton } from "@/components/ui/neon-button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

const categories = ["All", "Weddings", "Corporate", "Catering", "Decor"]

const galleryItems = [
    {
        id: 1,
        category: "Weddings",
        image: "/placeholder.svg?height=600&width=800&query=luxury indian wedding mandap",
        title: "Royal Mandap Setup",
    },
    {
        id: 2,
        category: "Catering",
        image: "/placeholder.svg?height=800&width=600&query=kerala sadhya feast leaf",
        title: "Traditional Sadhya",
    },
    {
        id: 3,
        category: "Decor",
        image: "/placeholder.svg?height=600&width=800&query=wedding floral decoration entrance",
        title: "Floral Entrance",
    },
    {
        id: 4,
        category: "Corporate",
        image: "/placeholder.svg?height=600&width=800&query=corporate event stage setup",
        title: "Tech Summit Gala",
    },
    {
        id: 5,
        category: "Weddings",
        image: "/placeholder.svg?height=800&width=600&query=indian bride groom garland exchange",
        title: "Garland Exchange",
    },
    {
        id: 6,
        category: "Catering",
        image: "/placeholder.svg?height=600&width=800&query=buffet setup indian food",
        title: "Premium Buffet",
    },
    {
        id: 7,
        category: "Decor",
        image: "/placeholder.svg?height=800&width=600&query=wedding reception stage lighting",
        title: "Reception Lighting",
    },
    {
        id: 8,
        category: "Corporate",
        image: "/placeholder.svg?height=600&width=800&query=conference hall setup",
        title: "Annual Conference",
    },
]

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const filteredItems =
        activeCategory === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeCategory)

    return (
        <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 neon-text-gold">
                        Our Gallery
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        Explore our portfolio of magical moments and exquisite setups.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <NeonButton
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            onClick={() => setActiveCategory(category)}
                            className="min-w-[100px]"
                        >
                            {category}
                        </NeonButton>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                            >
                                <GlassCard className="p-2 h-full cursor-pointer group" onClick={() => setSelectedImage(item.image)}>
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                                        <Image
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <p className="text-white font-serif text-xl font-bold">{item.title}</p>
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Lightbox */}
                <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                    <DialogContent className="max-w-5xl bg-transparent border-none p-0 shadow-none">
                        <div className="relative w-full h-[80vh]">
                            {selectedImage && (
                                <Image
                                    src={selectedImage}
                                    alt="Gallery Image"
                                    fill
                                    className="object-contain"
                                />
                            )}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
