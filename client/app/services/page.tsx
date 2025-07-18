import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

const services = [
  {
    id: "wedding",
    title: "Wedding Planning",
    description:
      "Comprehensive wedding planning services from conception to execution, ensuring every detail is perfect.",
    image: "/placeholder.svg?height=600&width=800&query=luxury indian wedding mandap with floral decorations",
    features: [
      "Personalized wedding concept development",
      "Venue selection and management",
      "Vendor coordination and management",
      "Custom décor design and execution",
      "Guest management and RSVP tracking",
      "Day-of coordination and timeline planning",
      "Budget management and tracking",
    ],
    pricing: "Starting from ₹3,50,000",
  },
  {
    id: "catering",
    title: "Catering Services",
    description:
      "Exquisite multi-cuisine catering with a focus on traditional South Indian and international delicacies.",
    image: "/placeholder.svg?height=600&width=800&query=elegant indian food catering display with traditional dishes",
    features: [
      "Customized menu planning and tasting sessions",
      "Specialized chefs for regional cuisines",
      "Vegetarian, non-vegetarian, and Jain options",
      "Live cooking stations and food displays",
      "Premium tableware and service equipment",
      "Professional service staff and floor management",
      "Special dietary accommodations",
    ],
    pricing: "Starting from ₹1,200 per plate",
  },
  {
    id: "decoration",
    title: "Stage & Venue Decoration",
    description: "Stunning décor solutions that transform ordinary spaces into extraordinary celebratory venues.",
    image:
      "/placeholder.svg?height=600&width=800&query=luxury indian wedding stage decoration with flowers and lighting",
    features: [
      "Themed concept development and visualization",
      "Custom floral arrangements and installations",
      "Lighting design and execution",
      "Entrance and pathway décor",
      "Table styling and centerpieces",
      "Backdrop and stage design",
      "Prop sourcing and custom fabrication",
    ],
    pricing: "Starting from ₹1,50,000",
  },
  {
    id: "photography",
    title: "Photography & Videography",
    description: "Capturing precious moments with our team of professional photographers and cinematographers.",
    image: "/placeholder.svg?height=600&width=800&query=wedding photographer capturing indian bride and groom portrait",
    features: [
      "Pre-event photoshoots and concept videos",
      "Candid and traditional photography coverage",
      "Cinematic film production",
      "Drone aerial photography and videography",
      "Same-day edit highlights video",
      "Photo booth and instant printing services",
      "Premium album design and production",
    ],
    pricing: "Starting from ₹1,25,000",
  },
  {
    id: "invitation",
    title: "Invitation & Return Gifts",
    description: "Custom invitations and memorable return gifts that reflect your personality and event theme.",
    image:
      "/placeholder.svg?height=600&width=800&query=elegant indian wedding invitation cards with traditional design",
    features: [
      "Custom invitation card design and printing",
      "Digital invitation and RSVP management",
      "Unique packaging and delivery options",
      "Personalized return gift curation",
      "Themed gift packaging and presentation",
      "Corporate branding for business events",
      "Budget-friendly options for all scales",
    ],
    pricing: "Starting from ₹25,000",
  },
  {
    id: "corporate",
    title: "Corporate & Birthday Events",
    description: "Professional management of corporate gatherings, birthdays, and milestone celebrations.",
    image: "/placeholder.svg?height=600&width=800&query=corporate event setup with elegant banquet hall arrangement",
    features: [
      "Corporate event strategy and planning",
      "Themed birthday party planning and execution",
      "Team building activities and experiences",
      "Entertainment programming and management",
      "Technical production and AV support",
      "Brand activation and experiential marketing",
      "VIP management and protocol services",
    ],
    pricing: "Starting from ₹75,000",
  },
  {
    id: "destination",
    title: "Destination Weddings",
    description: "Planning and execution of spectacular destination weddings at exotic locations across South India.",
    image: "/placeholder.svg?height=600&width=800&query=beach wedding setup in kerala with traditional elements",
    features: [
      "Destination scouting and selection",
      "Travel and accommodation arrangements",
      "Local vendor sourcing and management",
      "Guest experience planning and activities",
      "Legal and documentation assistance",
      "Cultural integration and experiences",
      "Multi-day event planning and coordination",
    ],
    pricing: "Starting from ₹7,50,000",
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-96 relative">
          <Image
            src="/placeholder.svg?height=800&width=1920&query=luxury event service collage with wedding, catering, and decoration"
            alt="Our Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Our Services</h1>
              <p className="text-xl text-gray-100">Comprehensive event management solutions for every celebration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Comprehensive Event Solutions</h2>
            <p className="text-gray-600">
              With three decades of experience, we offer end-to-end event management services tailored to your unique
              needs. From intimate gatherings to grand celebrations, our team brings expertise, creativity, and flawless
              execution to every event.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <h2 className="text-3xl font-serif font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="mr-2 h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="bg-gold-50 px-4 py-3 rounded-md inline-flex items-center">
                      <span className="text-gray-900 font-semibold">{service.pricing}</span>
                    </div>
                    <Button asChild>
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </div>
                </div>

                <div
                  className={`relative h-80 rounded-lg overflow-hidden shadow-xl ${
                    index % 2 === 1 ? "md:col-start-1" : ""
                  }`}
                >
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages CTA */}
      <section className="bg-gold-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Looking for Bundled Services?</h2>
          <p className="text-xl text-gray-700 mb-10">
            Explore our exclusive event packages designed to provide comprehensive solutions at competitive prices.
          </p>
          <Button asChild size="lg">
            <Link href="/packages">View Packages</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading">Client Testimonials</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "The catering service was exceptional. Our guests couldn't stop talking about the food quality and presentation.",
                author: "Rajesh & Priya",
                event: "Wedding in Kochi",
              },
              {
                quote:
                  "From concept to execution, the team's attention to detail in the décor and overall event management was outstanding.",
                author: "Infosys Ltd.",
                event: "Annual Corporate Gala",
              },
              {
                quote:
                  "The destination wedding of our dreams! Every detail was handled perfectly, allowing us to simply enjoy our special day.",
                author: "Vikram & Meera",
                event: "Beach Wedding in Goa",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="mb-4 text-gold-300">
                    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-maroon-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">Ready to Create Memories?</h2>
          <p className="text-xl text-gray-100 mb-10">
            Contact us today to discuss how we can bring your vision to life.
          </p>
          <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
