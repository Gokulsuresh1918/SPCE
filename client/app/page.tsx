"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/home/hero-section"
import { ArrowRight, Check, Heart, Calendar, Users, Sparkles } from "lucide-react"
import AnimatedBackground from "@/components/ui/animated-background"
import Card3D from "@/components/ui/3d-card"
import ParallaxSection from "@/components/ui/parallax-section"
import AnimatedStats from "@/components/home/animated-stats"
import TestimonialCard3D from "@/components/ui/testimonial-card-3d"
import AnimatedCTA from "@/components/home/animated-cta"
import LoadingScreen3D from "@/components/ui/loading-screen-3d"
import KeralaSadhyaSection from "@/components/home/kerala-sadhya-section"
import TraditionalKeralaSection from "@/components/home/traditional-kerala-section"
import { useState } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <LoadingScreen3D onComplete={handleLoadingComplete} />}
      <div className="overflow-hidden bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 min-h-screen">
        {/* Animated Background */}
        <AnimatedBackground />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Our Approach Section */}
      <ParallaxSection speed={0.3}>
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">
                  We Handle Everything <br />
                  So You Don't Have To
                </h2>
                <p className="text-gray-200 mb-8 text-lg leading-relaxed">
                  At Sree Padmanabha, we believe your wedding day should be stress-free and magical. Our full-service
                  approach means we take care of every detail from venue selection to the final farewell, allowing you to
                  be fully present for every moment.
                </p>

                <div className="space-y-4">
                  {[
                    "Personalized planning from start to finish",
                    "Curated vendor selection and management",
                    "Custom décor and theme development",
                    "Exquisite catering with regional specialties",
                    "Day-of coordination and timeline management",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-gold-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-200">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <Button asChild className="group">
                    <Link href="/about" className="flex items-center">
                      Learn about our Services
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <Card3D className="relative">
                <div className="aspect-[4/5] relative rounded-lg overflow-hidden shadow-xl">
                  <Image 
                    src="/placeholder.svg?height=800&width=600&query=professional%20event%20management%20kerala%20sadhya%20setup" 
                    alt="Professional Event Management & Kerala Sadhya Services" 
                    fill 
                    className="object-cover object-center" 
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 p-4 rounded-lg shadow-lg max-w-xs border border-white/20">
                  <div className="flex items-center mb-2">
                    <Heart className="h-5 w-5 text-gold-400 mr-2" />
                    <p className="font-medium text-white">30 Years of Excellence</p>
                  </div>
                  <p className="text-sm text-gray-200">Creating memorable celebrations across South India since 1993</p>
                </div>
              </Card3D>
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Kerala Sadhya Section */}
      <KeralaSadhyaSection />

      {/* Traditional Kerala Section */}
      <TraditionalKeralaSection />

      {/* Animated Stats Section */}
      <AnimatedStats />

     
      {/* Featured Work */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">Featured Celebrations</h2>
              <p className="text-gray-200 text-lg">
                A glimpse into the magical moments we've helped create for our clients.
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image:
                  "/placeholder.svg?height=600&width=800&query=luxury indian wedding mandap with floral decorations",
                title: "Anjali & Karthik",
                subtitle: "Traditional Wedding in Kochi",
              },
              {
                image:
                  "/placeholder.svg?height=600&width=800&query=elegant corporate event setup with banquet arrangement",
                title: "Infosys Annual Gala",
                subtitle: "Corporate Event in Bangalore",
              },
              {
                image:
                  "/placeholder.svg?height=600&width=800&query=beach wedding setup in kerala with traditional elements",
                title: "Meera & Vikram",
                subtitle: "Destination Wedding in Kovalam",
              },
            ].map((work, index) => (
              <Card3D key={index} className="group relative overflow-hidden rounded-lg" intensity={20}>
                <div className="aspect-[4/3] relative">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-xl font-serif font-bold text-white mb-1">{work.title}</h3>
                  <p className="text-white/80">{work.subtitle}</p>
                </div>
              </Card3D>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-gold-500 hover:bg-gold-600 text-white">
              <Link href="/gallery">View Our Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-white">What Our Clients Say</h2>
            </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialCard3D
              quote="Sree Padmanabha transformed our dream wedding into reality. Their attention to detail, from the flower arrangements to the menu, was impeccable. They handled everything so we could focus on enjoying our special day. Our guests are still talking about how perfect everything was!"
              author="Anjali & Karthik"
              role="Wedding in Kochi, December 2022"
              image="/placeholder.svg?height=400&width=400&query=happy indian wedding couple portrait"
              rating={5}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/testimonials">Read More Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Animated CTA */}
      <AnimatedCTA />
    </div>
    </>
  )
}
