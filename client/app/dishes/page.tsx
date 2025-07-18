"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Flame, ChefHat, Search, Filter } from "lucide-react"
import Card3D from "@/components/ui/3d-card"

const allDishes = [
  // Main Dishes
  {
    category: "Main Dishes",
    items: [
      {
        name: "Parippu Curry",
        description: "Traditional yellow dal with coconut and spices",
        detailedDescription: "A creamy yellow dal curry made with toor dal, coconut, and aromatic spices. This comforting dish is a staple in Kerala sadhya, known for its rich texture and mild, nutty flavor.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop&crop=center",
        ingredients: ["Toor Dal", "Coconut", "Turmeric", "Cumin", "Mustard Seeds", "Curry Leaves"],
        cookingTime: "30 mins",
        spiceLevel: "Mild",
        price: "₹150"
      },
      {
        name: "Sambar",
        description: "Tangy lentil stew with vegetables and tamarind",
        detailedDescription: "A tangy and spicy lentil stew made with toor dal, tamarind, and mixed vegetables. This iconic dish is flavored with sambar powder and tempered with mustard seeds and curry leaves.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=400&fit=crop&crop=center",
        ingredients: ["Toor Dal", "Tamarind", "Mixed Vegetables", "Sambar Powder", "Mustard Seeds", "Curry Leaves"],
        cookingTime: "45 mins",
        spiceLevel: "Medium",
        price: "₹180"
      },
      {
        name: "Rasam",
        description: "Spicy and tangy soup with black pepper and tamarind",
        detailedDescription: "A spicy and tangy soup made with tamarind, black pepper, and tomatoes. This warming dish is perfect for digestion and is served as a soup course in traditional sadhya.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop&crop=center",
        ingredients: ["Tamarind", "Black Pepper", "Tomatoes", "Garlic", "Cumin", "Coriander"],
        cookingTime: "25 mins",
        spiceLevel: "Hot",
        price: "₹120"
      }
    ]
  },
  // Vegetable Dishes
  {
    category: "Vegetable Dishes",
    items: [
      {
        name: "Aviyal",
        description: "Mixed vegetables in coconut and yogurt gravy",
        detailedDescription: "A creamy vegetable curry made with mixed vegetables, coconut, and yogurt. This dish showcases the perfect balance of flavors and is a highlight of Kerala sadhya.",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=400&fit=crop&crop=center",
        ingredients: ["Mixed Vegetables", "Coconut", "Yogurt", "Curry Leaves", "Coconut Oil", "Green Chilies"],
        cookingTime: "40 mins",
        spiceLevel: "Mild",
        price: "₹200"
      },
      {
        name: "Thoran",
        description: "Stir-fried vegetables with grated coconut",
        detailedDescription: "A dry vegetable dish made by stir-frying vegetables with grated coconut and spices. Each thoran has its own unique flavor profile and is a perfect accompaniment to rice.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop&crop=center",
        ingredients: ["Vegetables", "Grated Coconut", "Mustard Seeds", "Curry Leaves", "Turmeric", "Green Chilies"],
        cookingTime: "20 mins",
        spiceLevel: "Medium",
        price: "₹160"
      },
      {
        name: "Kootu Curry",
        description: "Mixed vegetables in coconut gravy",
        detailedDescription: "A traditional vegetable curry made with mixed vegetables and coconut gravy. This dish is known for its rich texture and authentic Kerala flavors.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop&crop=center",
        ingredients: ["Mixed Vegetables", "Coconut", "Cumin", "Black Pepper", "Curry Leaves", "Coconut Oil"],
        cookingTime: "35 mins",
        spiceLevel: "Mild",
        price: "₹170"
      }
    ]
  },
  // Side Dishes
  {
    category: "Side Dishes",
    items: [
      {
        name: "Pachadi",
        description: "Sweet and sour yogurt-based side dish",
        detailedDescription: "A sweet and sour yogurt-based side dish made with vegetables or fruits. This refreshing dish balances the spiciness of other items and is essential in traditional sadhya.",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=400&fit=crop&crop=center",
        ingredients: ["Yogurt", "Vegetables/Fruits", "Mustard Seeds", "Curry Leaves", "Sugar", "Salt"],
        cookingTime: "15 mins",
        spiceLevel: "Mild",
        price: "₹100"
      },
      {
        name: "Pickle",
        description: "Traditional Kerala pickles",
        detailedDescription: "Traditional Kerala pickles made with mango, lime, or other fruits. These tangy and spicy pickles add the perfect punch to any meal.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop&crop=center",
        ingredients: ["Mango/Lime", "Red Chilies", "Mustard Seeds", "Fenugreek", "Asafoetida", "Oil"],
        cookingTime: "10 mins",
        spiceLevel: "Hot",
        price: "₹80"
      },
      {
        name: "Papadam",
        description: "Crispy lentil wafers",
        detailedDescription: "Crispy lentil wafers that are deep-fried and served as an accompaniment. These add crunch and texture to the sadhya experience.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop&crop=center",
        ingredients: ["Lentil Flour", "Salt", "Black Pepper", "Cumin", "Oil"],
        cookingTime: "5 mins",
        spiceLevel: "Mild",
        price: "₹50"
      }
    ]
  },
  // Desserts
  {
    category: "Desserts",
    items: [
      {
        name: "Payasam",
        description: "Traditional Kerala dessert",
        detailedDescription: "A traditional Kerala dessert made with rice, milk, and jaggery. This sweet dish is flavored with cardamom and garnished with nuts.",
        image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=400&h=400&fit=crop&crop=center",
        ingredients: ["Rice", "Milk", "Jaggery", "Cardamom", "Nuts", "Ghee"],
        cookingTime: "60 mins",
        spiceLevel: "Sweet",
        price: "₹120"
      },
      {
        name: "Banana Chips",
        description: "Crispy banana chips",
        detailedDescription: "Crispy banana chips made from raw bananas. These are a popular snack and accompaniment in Kerala cuisine.",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop&crop=center",
        ingredients: ["Raw Bananas", "Salt", "Turmeric", "Oil"],
        cookingTime: "15 mins",
        spiceLevel: "Mild",
        price: "₹80"
      }
    ]
  }
]

export default function DishesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", ...allDishes.map(dish => dish.category)]
  
  const filteredDishes = allDishes.flatMap(category => 
    category.items.filter(dish => 
      (selectedCategory === "All" || category.category === selectedCategory) &&
      dish.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  )

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
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredDishes.map((dish, index) => (
              <motion.div
                key={index}
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
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {dish.price}
                    </div>
                    
                    {/* Hover Overlay with Details */}
                    <div className="absolute inset-0 bg-gradient-to-br from-maroon-900/95 via-maroon-800/95 to-maroon-700/95 opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-center">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-white mb-2">{dish.name}</h3>
                        <p className="text-gray-200 text-sm mb-4">{dish.detailedDescription}</p>
                        
                        {/* Cooking Details */}
                        <div className="flex justify-center gap-4 mb-4">
                          <div className="text-center">
                            <Clock className="h-4 w-4 text-gold-400 mx-auto mb-1" />
                            <div className="text-white text-xs">{dish.cookingTime}</div>
                          </div>
                          <div className="text-center">
                            <Flame className="h-4 w-4 text-gold-400 mx-auto mb-1" />
                            <div className="text-white text-xs">{dish.spiceLevel}</div>
                          </div>
                        </div>
                        
                        {/* Ingredients */}
                        <div className="mb-4">
                          <div className="text-gold-400 text-xs font-medium mb-2">KEY INGREDIENTS</div>
                          <div className="flex flex-wrap justify-center gap-1">
                            {dish.ingredients.slice(0, 4).map((ingredient, idx) => (
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
                      </div>
                    </div>
                  </div>
                  
                  {/* Default Card Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-white">{dish.name}</h3>
                      <span className="text-gold-400 font-bold">{dish.price}</span>
                    </div>
                    <p className="text-gray-200 text-sm mb-4">{dish.description}</p>
                    
                    {/* Quick Info */}
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {dish.cookingTime}
                      </div>
                      <div className="flex items-center">
                        <Flame className="h-3 w-3 mr-1" />
                        {dish.spiceLevel}
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </motion.div>

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