import Link from "next/link"
import { PhoneCall, Mail, MapPin, Clock, ExternalLink } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BrandLogo } from "@/components/brand/logo"

const PHONE_NUMBERS = [
  { number: "7902371571", label: "Bookings" },
  { number: "9746235003", label: "Sadhya Enquiry" },
  { number: "9567431555", label: "Office" },
]

const QUICK_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/dishes", label: "Sadhya Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/packages", label: "Packages" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact Us" },
]

const MAP_QUERY = "Shantharaghavam, Punayalkonam, Perumkadavila P.O., Thiruvananthapuram, Kerala 695124"
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`
const MAP_DIRECTIONS_URL = "https://maps.app.goo.gl/hQELBm2iaaYCmUGBA"

function BrandBlurb() {
  return (
    <div>
      <BrandLogo variant="full" href="/" className="mb-4 max-h-14 rounded-sm" />
      <p className="text-rice/70 text-sm leading-relaxed">
        30 years of authentic Kerala sadhya and event management in Thiruvananthapuram. Served
        fresh, on the leaf, the way it's meant to be.
      </p>
    </div>
  )
}

function QuickLinksList() {
  return (
    <ul className="space-y-3">
      {QUICK_LINKS.map((link) => (
        <li key={link.href}>
          <Link href={link.href} className="text-rice/70 hover:text-turmeric transition-colors text-sm">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function ServiceAreas() {
  return (
    <div className="text-sm text-rice/70 space-y-3">
      <p>
        Based in Thiruvananthapuram, catering weddings, temple festivals and corporate events
        across Kerala.
      </p>
      <p className="text-rice/50 text-xs">
        Full district-by-district coverage list coming soon — call to confirm availability for
        your location.
      </p>
    </div>
  )
}

function ContactDetails() {
  return (
    <ul className="space-y-4 text-sm">
      <li className="flex items-start gap-3">
        <PhoneCall className="h-4 w-4 text-turmeric mt-0.5 shrink-0" aria-hidden="true" />
        <div className="space-y-1">
          {PHONE_NUMBERS.map((p) => (
            <p key={p.number}>
              <a href={`tel:+91${p.number}`} className="text-rice/70 hover:text-turmeric transition-colors">
                {p.number}
              </a>{" "}
              <span className="text-rice/40">({p.label})</span>
            </p>
          ))}
        </div>
      </li>
      <li className="flex items-start gap-3">
        <Mail className="h-4 w-4 text-turmeric mt-0.5 shrink-0" aria-hidden="true" />
        <a href="mailto:info@sreepadmanabha.com" className="text-rice/70 hover:text-turmeric transition-colors">
          info@sreepadmanabha.com
        </a>
      </li>
      <li className="flex items-start gap-3">
        <MapPin className="h-4 w-4 text-turmeric mt-0.5 shrink-0" aria-hidden="true" />
        <address className="text-rice/70 not-italic">
          Shantharaghavam, Punayalkonam,
          <br />
          Perumkadavila P.O.,
          <br />
          Thiruvananthapuram, Kerala 695124
        </address>
      </li>
      <li className="flex items-start gap-3">
        <Clock className="h-4 w-4 text-turmeric mt-0.5 shrink-0" aria-hidden="true" />
        <span className="text-rice/70">Enquiries answered 24/7</span>
      </li>
    </ul>
  )
}

const Footer = () => {
  return (
    <footer className="bg-ela-deep text-rice">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Desktop: four static columns */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8">
          <BrandBlurb />
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <QuickLinksList />
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Service Areas</h4>
            <ServiceAreas />
          </div>
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ContactDetails />
          </div>
        </div>

        {/* Mobile: brand blurb + accordion */}
        <div className="lg:hidden space-y-6">
          <BrandBlurb />
          <Accordion type="single" collapsible className="border-rice/10">
            <AccordionItem value="links" className="border-rice/10">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Quick Links</AccordionTrigger>
              <AccordionContent>
                <QuickLinksList />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="areas" className="border-rice/10">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Service Areas</AccordionTrigger>
              <AccordionContent>
                <ServiceAreas />
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="contact" className="border-rice/10">
              <AccordionTrigger className="font-serif text-lg hover:no-underline">Contact Us</AccordionTrigger>
              <AccordionContent>
                <ContactDetails />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Map — full width, both breakpoints */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-serif text-lg font-semibold">Find Us</h4>
            <a
              href={MAP_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-turmeric hover:text-turmeric/80 transition-colors"
            >
              Get directions <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
          <div className="rounded-xl overflow-hidden border border-rice/10 h-64">
            <iframe
              title="Sree Padmanabha location"
              src={MAP_EMBED_SRC}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="border-t border-rice/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-rice/50 text-sm">
              &copy; {new Date().getFullYear()} Sree Padmanabha. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-rice/50 hover:text-turmeric text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-rice/50 hover:text-turmeric text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-rice/50 hover:text-turmeric text-sm transition-colors">
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
