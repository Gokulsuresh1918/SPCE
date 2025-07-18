"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Card3D from "@/components/ui/3d-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf, Utensils, Users, Clock } from "lucide-react"
import Link from "next/link"

const KeralaSadhyaSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const sadhyaItems = [

  
    {
      name: "Sambar",
      description: "Tangy lentil stew with vegetables and tamarind",
      detailedDescription: "A tangy and spicy lentil stew made with toor dal, tamarind, and mixed vegetables. This iconic dish is flavored with sambar powder and tempered with mustard seeds and curry leaves.",
      image: "/sambar.jpeg",
      ingredients: ["Toor Dal", "Tamarind", "Mixed Vegetables", "Sambar Powder", "Mustard Seeds", "Curry Leaves"],
      cookingTime: "45 mins",
      spiceLevel: "Medium"
    },
   
    {
      name: "Aviyal",
      description: "Mixed vegetables in coconut and yogurt gravy",
      detailedDescription: "A creamy vegetable curry made with mixed vegetables, coconut, and yogurt. This dish showcases the perfect balance of flavors and is a highlight of Kerala sadhya.",
      image: "/aviyal.jpeg",
      ingredients: ["Mixed Vegetables", "Coconut", "Yogurt", "Curry Leaves", "Coconut Oil", "Green Chilies"],
      cookingTime: "40 mins",
      spiceLevel: "Mild"
    },

    {
      name: "Ambalapuzha Payasam",
      description: "Traditional sweet dessert with jaggery and coconut",
      detailedDescription: "A traditional Kerala dessert made with rice, jaggery, and coconut milk. This sweet dish is served at the end of sadhya and is considered auspicious in Kerala culture.",
      image: "/amblaapuzhapayasam.jpeg",
      ingredients: ["Rice", "Jaggery", "Coconut Milk", "Cardamom", "Ghee", "Cashews"],
      cookingTime: "35 mins",
      spiceLevel: "Sweet"
    },
    {
      name: "Pineapple Payasam",
      description: "Traditional sweet dessert with jaggery and coconut",
      detailedDescription: "A traditional Kerala dessert made with rice, jaggery, and coconut milk. This sweet dish is served at the end of sadhya and is considered auspicious in Kerala culture.",
      image: "pineapple payasam.jpeg",
      ingredients: ["Rice", "Jaggery", "Coconut Milk", "Cardamom", "Ghee", "Cashews"],
      cookingTime: "35 mins",
      spiceLevel: "Sweet"
    },
 
  ]

  const features = [
    {
      icon: Leaf,
      title: "Fresh Vegetables",
      description: "Served traditionally on fresh vegetables for authentic experience"
    },
    {
      icon: Utensils,
      title: "150+ Traditional Dishes",
      description: "Complete sadhya with all traditional accompaniments"
    },
    {
      icon: Users,
      title: "Expert Chefs",
      description: "Experienced Kerala chefs with 30+ years of expertise"
    },
    {
      icon: Clock,
      title: "Fresh Preparation",
      description: "All dishes prepared fresh on the day of your event"
    }
  ]

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6 text-white">
            The Authentic Kerala Sadhya Experience
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Experience the traditional Kerala feast  with 150+ authentic dishes 
            prepared by our expert chefs using age-old recipes passed down through generations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className="bg-gradient-to-br from-maroon-900/80 via-maroon-800/80 to-maroon-700/80 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow border border-white/20"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <feature.icon className="h-8 w-8 text-gold-400" />
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-200 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Sadhya Items Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {sadhyaItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card3D className="bg-gradient-to-br from-maroon-900/80 via-maroon-800/80 to-maroon-700/80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-white/20 group" intensity={15}>
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Hover Overlay with Details */}
                  <div className="absolute inset-0 bg-gradient-to-br from-maroon-900/95 via-maroon-800/95 to-maroon-700/95 opacity-0 group-hover:opacity-100 transition-all duration-500 p-4 flex flex-col justify-center">
                    <div className="text-center mb-3">
                      <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-gray-200 text-xs mb-3">{item.detailedDescription}</p>
                      
                      {/* Cooking Details */}
                      <div className="flex justify-center gap-3 mb-3">
                        <div className="text-center">
                          <div className="text-gold-400 text-xs font-medium">TIME</div>
                          <div className="text-white text-xs">{item.cookingTime}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gold-400 text-xs font-medium">SPICE</div>
                          <div className="text-white text-xs">{item.spiceLevel}</div>
                        </div>
                      </div>
                      
                      {/* Ingredients */}
                      <div className="mb-3">
                        <div className="text-gold-400 text-xs font-medium mb-1">INGREDIENTS</div>
                        <div className="flex flex-wrap justify-center gap-1">
                          {item.ingredients.slice(0, 3).map((ingredient, idx) => (
                            <span key={idx} className="bg-white/10 text-white text-xs px-1.5 py-0.5 rounded-full">
                              {ingredient}
                            </span>
                          ))}
                          {item.ingredients.length > 3 && (
                            <span className="bg-gold-500/20 text-gold-400 text-xs px-1.5 py-0.5 rounded-full">
                              +{item.ingredients.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Default Card Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                  <p className="text-gray-200 text-xs">{item.description}</p>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>

        {/* View All Dishes Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-16"
        >
          <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 text-lg">
            <Link href="/dishes" className="flex items-center">
              View All Dishes
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>

   
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold font-serif mb-6 text-white">
            Ready to Experience Authentic Kerala Sadhya?
          </h3>
          <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your traditional Kerala sadhya for weddings, festivals, or special occasions. 
            We serve across Kerala with authentic taste and traditional presentation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
              <Link href="/book-sadhya" className="flex items-center">
                Book Your Sadhya
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gold-400 text-black hover:bg-gold-400/20">
              <Link href="/sadhya-menu">View Complete Menu</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default KeralaSadhyaSection 