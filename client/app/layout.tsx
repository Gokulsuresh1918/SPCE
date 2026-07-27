import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppButton from "@/components/ui/whatsapp-button"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/ui/scroll-to-top"
import { fraunces, generalSans, manjari } from "./fonts"

export const metadata: Metadata = {
  title: "Sree Padmanabha - Premium Event Management & Catering Services",
  description:
    "30 Years of Crafting Memories Through Celebrations. Premium catering and event management services for weddings, corporate events, birthdays, and all celebrations across South India.",
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
