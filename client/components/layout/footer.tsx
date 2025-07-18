import Link from "next/link"
import { PhoneCall, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-serif font-bold text-gold-500 mb-6">Sree Padmanabha</h3>
            <p className="mb-6 text-gray-300">
              30 years of creating memorable celebrations across South India. We pride ourselves in providing the
              highest quality catering and event management services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-500 transition">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-500 transition">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-gold-300 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-gold-300 transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-gold-300 transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-gold-300 transition">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/vendors" className="text-gray-300 hover:text-gold-300 transition">
                  Vendors
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-gold-300 transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-gold-300 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services#wedding" className="text-gray-300 hover:text-gold-300 transition">
                  Wedding Planning
                </Link>
              </li>
              <li>
                <Link href="/services#catering" className="text-gray-300 hover:text-gold-300 transition">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link href="/services#decoration" className="text-gray-300 hover:text-gold-300 transition">
                  Stage & Venue Decoration
                </Link>
              </li>
              <li>
                <Link href="/services#photography" className="text-gray-300 hover:text-gold-300 transition">
                  Photography & Videography
                </Link>
              </li>
              <li>
                <Link href="/services#invitation" className="text-gray-300 hover:text-gold-300 transition">
                  Invitation & Return Gifts
                </Link>
              </li>
              <li>
                <Link href="/services#corporate" className="text-gray-300 hover:text-gold-300 transition">
                  Corporate & Birthday Events
                </Link>
              </li>
              <li>
                <Link href="/services#destination" className="text-gray-300 hover:text-gold-300 transition">
                  Destination Weddings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneCall className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">7902371571</p>
                  <p className="text-gray-300">9746235003</p>
                  <p className="text-gray-300">9567431555</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">info@sreepadmanabha.com</p>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300">Shantharaghavam punayalkonam perumkadavilla p o thiruvananthapuram kerala 695124</p>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Sree Padmanabha. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-gold-300 text-sm transition">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-gold-300 text-sm transition">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-gold-300 text-sm transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
