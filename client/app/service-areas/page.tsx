import type { Metadata } from "next"
import ComingSoonPage from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "Service Areas | Sree Padmanabha",
  description: "Where Sree Padmanabha caters Kerala sadhya and events across Kerala.",
}

export default function ServiceAreasPage() {
  return (
    <ComingSoonPage
      title="Service Areas"
      description="We cater weddings, temple festivals, and corporate events across Thiruvananthapuram and the rest of Kerala. A full list of service areas is coming soon — get in touch to check availability for your location."
      ctaHref="/contact"
      ctaLabel="Check Availability"
    />
  )
}
