import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-96 relative">
          <Image
            src="/placeholder.svg?height=800&width=1920&query=team of event management professionals working on decoration"
            alt="About Sree Padmanabha"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">About Us</h1>
              <p className="text-xl text-gray-100">30 Years of Crafting Memories Through Celebrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Established in 1993, Sree Padmanabha began as a small family-owned catering service in Trivandrum,
                Kerala, with a vision to preserve and present traditional Kerala cuisine with utmost authenticity and
                elegance.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a humble venture with a team of five, including our founder Shri Padmanabhan Nair, has
                now evolved into South India's premier event management and catering company with a team of over 200
                dedicated professionals.
              </p>
              <p className="text-gray-600 mb-4">
                Over the past three decades, we have had the privilege of being part of more than 10,000 celebrations,
                from intimate family gatherings to grand weddings and corporate galas with thousands of attendees.
              </p>
              <p className="text-gray-600">
                Today, Sree Padmanabha stands as a symbol of excellence in the event management industry, known for our
                unwavering commitment to quality, attention to detail, and ability to seamlessly blend traditional
                values with modern innovations.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600&query=founder of traditional indian catering company in formal attire"
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-ivory-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gold-50">
                <CardTitle className="font-serif text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600">
                  To create extraordinary celebrations by combining culinary excellence, impeccable service, and
                  creative design, while honoring cultural traditions and exceeding client expectations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader className="bg-gold-50">
                <CardTitle className="font-serif text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-600">
                  To be recognized as the premier event management company in India, setting industry standards for
                  innovation, quality, and customer satisfaction while preserving cultural heritage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading mb-16">Our Leadership</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Anand Padmanabhan",
                role: "CEO & Creative Director",
                image:
                  "/placeholder.svg?height=600&width=600&query=professional indian male executive in formal attire",
                bio: "Second-generation leader who has expanded the company across South India with innovative event concepts and strategic partnerships.",
              },
              {
                name: "Chef Lakshmi Nair",
                role: "Head of Culinary",
                image: "/placeholder.svg?height=600&width=600&query=professional indian female chef in white uniform",
                bio: "Award-winning chef with 25 years of experience in traditional and fusion cuisines, leading a team of 50 specialized chefs.",
              },
              {
                name: "Ravi Menon",
                role: "Operations Director",
                image: "/placeholder.svg?height=600&width=600&query=professional indian male in business formal attire",
                bio: "Logistics expert who ensures flawless execution of events across multiple locations simultaneously.",
              },
              {
                name: "Meera Krishnan",
                role: "Design & Decor Head",
                image:
                  "/placeholder.svg?height=600&width=600&query=professional indian female designer in creative attire",
                bio: "Creative visionary with background in fine arts, known for unique thematic designs that blend tradition with contemporary aesthetics.",
              },
              {
                name: "Suresh Kumar",
                role: "Client Relations Manager",
                image: "/placeholder.svg?height=600&width=600&query=professional indian male in business casual",
                bio: "Dedicated to providing personalized service, ensuring every client's vision is understood and brought to life.",
              },
              {
                name: "Priya Varma",
                role: "Digital Experience Director",
                image: "/placeholder.svg?height=600&width=600&query=professional indian female tech executive",
                bio: "Tech innovator integrating digital solutions into event management, enhancing client experience through cutting-edge technologies.",
              },
            ].map((member, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden group">
                <div className="relative h-72">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="relative bg-white p-6">
                  <h3 className="text-xl font-serif font-semibold mb-1">{member.name}</h3>
                  <p className="text-gold-500 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-maroon-500 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">
            Ready to Start Planning Your Event?
          </h2>
          <p className="text-xl text-gray-100 mb-10">
            Our team is ready to bring your vision to life with our expertise and passion for perfection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white min-w-[200px]">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 min-w-[200px]"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
