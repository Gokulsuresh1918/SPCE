import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Sitemap | Sree Padmanabha",
  description: "All pages on the Sree Padmanabha website.",
}

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/dishes", label: "Sadhya Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/booking", label: "Book an Event" },
  { href: "/contact", label: "Contact Us" },
  { href: "/share-testimonial", label: "Share Your Experience" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 pt-20">
      <section className="py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-10 text-center">Sitemap</h1>
          <ul className="space-y-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-xl text-gray-200 hover:text-gold-400 transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
