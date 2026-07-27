import type { Metadata } from "next"
import ComingSoonPage from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "Vendor Network | Sree Padmanabha",
  description: "Sree Padmanabha's trusted network of venues, florists, and photographers.",
}

export default function VendorsPage() {
  return (
    <ComingSoonPage
      title="Our Vendor Network"
      description="We work with a trusted network of venues, florists, photographers, and entertainers across Kerala. A full directory is coming soon — contact us and we'll connect you directly."
      ctaHref="/contact"
      ctaLabel="Contact Us"
    />
  )
}
