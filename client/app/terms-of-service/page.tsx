import type { Metadata } from "next"
import ComingSoonPage from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "Terms of Service | Sree Padmanabha",
  description: "Terms governing the use of Sree Padmanabha's services and website.",
}

export default function TermsOfServicePage() {
  return (
    <ComingSoonPage
      title="Terms of Service"
      description="Our full terms of service are being finalised. For booking terms, cancellation policy, and payment terms for your event, please speak with our team directly."
      ctaHref="/contact"
      ctaLabel="Contact Us"
    />
  )
}
