import type { Metadata } from "next"
import ComingSoonPage from "@/components/layout/coming-soon"

export const metadata: Metadata = {
  title: "Privacy Policy | Sree Padmanabha",
  description: "How Sree Padmanabha collects, uses, and protects your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <ComingSoonPage
      title="Privacy Policy"
      description="Our full privacy policy is being finalised. We only use the details you share with us — name, phone, email — to respond to your enquiry and plan your event. We don't sell or share your data. Questions? Get in touch."
      ctaHref="/contact"
      ctaLabel="Contact Us"
    />
  )
}
