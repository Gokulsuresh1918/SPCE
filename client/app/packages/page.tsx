import type { Metadata } from "next"
import ComingSoonPage from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "Packages | Sree Padmanabha",
  description: "Bundled event and sadhya packages from Sree Padmanabha — details coming soon.",
}

export default function PackagesPage() {
  return (
    <ComingSoonPage
      title="Packages"
      description="Bundled event packages are being finalised. In the meantime, see our individual services and pricing, or get in touch for a custom quote."
      ctaHref="/services"
      ctaLabel="View Services"
    />
  )
}
