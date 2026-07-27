import Link from "next/link"
import { Button } from "@/components/ui/button"

interface ComingSoonPageProps {
  title: string
  description: string
  ctaHref?: string
  ctaLabel?: string
}

export default function ComingSoonPage({
  title,
  description,
  ctaHref = "/contact",
  ctaLabel = "Contact Us",
}: ComingSoonPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-maroon-700 pt-20">
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6">{title}</h1>
          <p className="text-xl text-gray-200 leading-relaxed mb-10">{description}</p>
          <Button asChild size="lg" className="bg-gold-500 hover:bg-gold-600 text-white">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
