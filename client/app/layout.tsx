import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppButton from "@/components/ui/whatsapp-button"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/ui/scroll-to-top"
import { PageTransitionOverlay } from "@/components/layout/page-transition"
import { LenisSetup } from "@/components/layout/lenis-setup"
import { fraunces, generalSans, manjari } from "./fonts"

export const metadata: Metadata = {
  title: "Sree Padmanabha - Premium Event Management & Catering Services",
  description:
    "30 Years of Crafting Memories Through Celebrations. Premium catering and event management services for weddings, corporate events, birthdays, and all celebrations across South India.",
  icons: {
    icon: [{ url: "/brand/icon.png", type: "image/png" }],
    apple: [{ url: "/brand/icon.png", type: "image/png" }],
    shortcut: "/brand/icon.png",
  },
  openGraph: {
    title: "Sree Padmanabha - Premium Event Management & Catering Services",
    description:
      "30 Years of Crafting Memories Through Celebrations. Premium catering and event management services for weddings, corporate events, birthdays, and all celebrations across South India.",
    images: [{ url: "/brand/logo.png", alt: "Sree Padmanabha" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${generalSans.variable} ${manjari.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <LenisSetup />
          <PageTransitionOverlay />
          <Header />
          <main className="min-h-screen">{children}</main>
          <WhatsAppButton />
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
