"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import GlassCard from "@/components/ui/glass-card"
import { NeonButton } from "@/components/ui/neon-button"
import { Input } from "@/components/ui/input"
import { Search, Leaf, Drumstick, Utensils } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const menuItems = [
    {
        id: 1,
        name: "Traditional Sadhya",
        description: "24-course feast served on banana leaf with rice, sambar, avial, and payasam.",
        category: "Main Course",
        type: "Veg",
        price: 350,
        image: "/placeholder.svg?height=400&width=600&query=kerala sadhya feast",
    },
    {
        id: 2,
        name: "Malabar Chicken Biryani",
        description: "Aromatic kaima rice cooked with tender chicken and authentic Malabar spices.",
        category: "Main Course",
        type: "Non-Veg",
        price: 280,
        image: "/placeholder.svg?height=400&width=600&query=chicken biryani malabar style",
    },
    {
        id: 3,
        name: "Paneer Butter Masala",
        description: "Cottage cheese cubes simmered in a rich, creamy tomato gravy.",
        category: "Curry",
        type: "Veg",
        price: 220,
        image: "/placeholder.svg?height=400&width=600&query=paneer butter masala",
    },
    {
        id: 4,
        name: "Fish Molee",
        description: "Seer fish cooked in a mild coconut milk gravy with curry leaves.",
        category: "Curry",
        type: "Non-Veg",
        price: 320,
        image: "/placeholder.svg?height=400&width=600&query=kerala fish molee",
    },
    {
        id: 5,
        name: "Palada Payasam",
        description: "Classic pink dessert made with rice ada, milk, and sugar.",
        category: "Dessert",
        type: "Veg",
        price: 120,
        image: "/placeholder.svg?height=400&width=600&query=palada payasam",
    },
    {
        id: 6,
        name: "Beef Fry",
        description: "Spicy dry fried beef with coconut slices and curry leaves.",
        category: "Starter",
        type: "Non-Veg",
        price: 250,
        image: "/placeholder.svg?height=400&width=600&query=kerala beef fry",
    },
]

const categories = ["All", "Starter", "Main Course", "Curry", "Dessert"]

export default function MenuPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeCategory, setActiveCategory] = useState("All")
    const [filterType, setFilterType] = useState<"All" | "Veg" | "Non-Veg">("All")

    const filteredItems = menuItems.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = activeCategory === "All" || item.category === activeCategory
        const matchesType = filterType === "All" || item.type === filterType
        return matchesSearch && matchesCategory && matchesType
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 neon-text-gold">
                        Our Menu
                    </h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                        A culinary journey through the authentic flavors of Kerala and beyond.
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-sm">
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                            placeholder="Search dishes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 bg-white/10 border-white/20 text-white focus:border-gold-500"
                        />
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                        <NeonButton
                            variant={filterType === "All" ? "default" : "outline"}
                            onClick={() => setFilterType("All")}
                            size="sm"
                        >
                            <Utensils className="mr-2 h-4 w-4" /> All
                        </NeonButton>
                        <NeonButton
                            variant={filterType === "Veg" ? "default" : "outline"}
                            onClick={() => setFilterType("Veg")}
                            size="sm"
                            className={filterType === "Veg" ? "bg-green-600 hover:bg-green-700 border-green-600" : "text-green-500 border-green-500 hover:bg-green-500/10"}
                        >
                            <Leaf className="mr-2 h-4 w-4" /> Veg
                        </NeonButton>
                        <NeonButton
                            variant={filterType === "Non-Veg" ? "default" : "outline"}
                            onClick={() => setFilterType("Non-Veg")}
                            size="sm"
                            className={filterType === "Non-Veg" ? "bg-red-600 hover:bg-red-700 border-red-600" : "text-red-500 border-red-500 hover:bg-red-500/10"}
                        >
                            <Drumstick className="mr-2 h-4 w-4" /> Non-Veg
                        </NeonButton>
                    </div>
                </div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                activeCategory === category
                                    ? "bg-gold-500 text-white shadow-[0_0_15px_rgba(218,165,32,0.4)]"
                                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <GlassCard className="h-full flex flex-col p-0 overflow-hidden group border-white/10">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-3 right-3">
                                            <Badge className={item.type === "Veg" ? "bg-green-500" : "bg-red-500"}>
                                                {item.type}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-white font-serif">{item.name}</h3>
                                            <span className="text-gold-400 font-bold">₹{item.price}</span>
                                        </div>
                                        <p className="text-gray-300 text-sm mb-4 flex-1">{item.description}</p>
                                        <NeonButton variant="outline" size="sm" className="w-full mt-auto">
                                            Add to Booking
                                        </NeonButton>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-lg">No items found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
