import type { Metadata } from "next"
import Testimonials from "@/components/home/testimonials"

export const metadata: Metadata = {
  title: "Testimonials | Sree Padmanabha",
  description:
    "What families and event organisers say about Sree Padmanabha's sadhya catering and event management.",
}

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <Testimonials />
    </div>
  )
}
