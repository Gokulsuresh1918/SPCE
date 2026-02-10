"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Flame, ChefHat, Search, Filter } from "lucide-react"
import Card3D from "@/components/ui/3d-card"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

const categoryMap: { [key: string]: string } = {
  "main-dish": "Main Dishes",
  "vegetable-dish": "Vegetable Dishes",
  "pickle": "Pickles",
  "dessert": "Desserts",
  "snack": "Snacks",
  "drink": "Drinks",
  "other": "Other"
}

export default function DishesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [dishes, setDishes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDishes()
  }, [])

  const fetchDishes = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/dishes`)
      const data = await response.json()
      if (data.success && data.data) {
        setDishes(data.data)
      }
    } catch (error) {
      console.error("Error fetching dishes:", error)
    } finally {
      setLoading(false)
    }
  }

  // Get unique categories from dishes
  const categories = ["All", ...Array.from(new Set(dishes.map(dish => categoryMap[dish.category] || "Other")))]
  
  const filteredDishes = dishes.filter(dish => {
    const dishCategory = categoryMap[dish.category] || "Other"
    return (
      (selectedCategory === "All" || dishCategory === selectedCategory) &&
      dish.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Link href="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">
              Our Complete Menu
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Explore our authentic Kerala sadhya with 25+ traditional dishes, each prepared with 
              age-old recipes and the finest ingredients.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                      selectedCategory === category
                        ? "bg-gold-500 text-white"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Dishes Grid */}
          {loading ? (
            <div className="text-center text-gray-400 py-12">
              <p>Loading dishes...</p>
            </div>
          ) : filteredDishes.length === 0 ? (
            <div className="text-center text-gray-400 py-12">
              <p>No dishes found. {dishes.length === 0 && "Add dishes from the management dashboard."}</p>
            </div>
          ) : (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredDishes.map((dish, index) => (
              <motion.div
                key={dish._id || index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card3D className="bg-gradient-to-br from-maroon-900/80 via-maroon-800/80 to-maroon-700/80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 group h-full" intensity={20}>
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Price Badge */}
                    {dish.price && (
                      <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {typeof dish.price === 'number' ? `₹${dish.price}` : dish.price}
                      </div>
                    )}
                    
                    {/* Hover Overlay with Details */}
                    <div className="absolute inset-0 bg-gradient-to-br from-maroon-900/95 via-maroon-800/95 to-maroon-700/95 opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-center">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">{dish.name}</h3>
                        <p className="text-gray-200 text-sm mb-4">{dish.detailedDescription || dish.description}</p>
                        
                        {/* Cooking Details */}
                        {(dish.cookingTime || dish.spiceLevel) && (
                          <div className="flex justify-center gap-4 mb-4">
                            {dish.cookingTime && (
                              <div className="text-center">
                                <Clock className="h-4 w-4 text-gold-400 mx-auto mb-1" />
                                <div className="text-white text-xs">{dish.cookingTime}</div>
                              </div>
                            )}
                            {dish.spiceLevel && (
                              <div className="text-center">
                                <Flame className="h-4 w-4 text-gold-400 mx-auto mb-1" />
                                <div className="text-white text-xs">{dish.spiceLevel}</div>
                              </div>
                            )}
                          </div>
                        )}
                        
                        {/* Ingredients */}
                        {dish.ingredients && dish.ingredients.length > 0 && (
                          <div className="mb-4">
                            <div className="text-gold-400 text-xs font-medium mb-2">KEY INGREDIENTS</div>
                            <div className="flex flex-wrap justify-center gap-1">
                              {dish.ingredients.slice(0, 4).map((ingredient: string, idx: number) => (
                                <span key={idx} className="bg-white/10 text-white text-xs px-2 py-1 rounded-full">
                                  {ingredient}
                                </span>
                              ))}
                              {dish.ingredients.length > 4 && (
                                <span className="bg-gold-500/20 text-gold-400 text-xs px-2 py-1 rounded-full">
                                  +{dish.ingredients.length - 4} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Default Card Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-white">{dish.name}</h3>
                      {dish.price && (
                        <span className="text-gold-400 font-bold">
                          {typeof dish.price === 'number' ? `₹${dish.price}` : dish.price}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-200 text-sm mb-4">{dish.description}</p>
                    
                    {/* Quick Info */}
                    {(dish.cookingTime || dish.spiceLevel) && (
                      <div className="flex items-center justify-between text-xs text-gray-300">
                        {dish.cookingTime && (
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {dish.cookingTime}
                          </div>
                        )}
                        {dish.spiceLevel && (
                          <div className="flex items-center">
                            <Flame className="h-3 w-3 mr-1" />
                            {dish.spiceLevel}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-6 text-white">
              Ready to Experience Our Complete Sadhya?
            </h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Book your traditional Kerala sadhya for weddings, festivals, or special occasions. 
              We serve across Kerala with authentic taste and traditional presentation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
                <Link href="/contact">Book Your Sadhya</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 