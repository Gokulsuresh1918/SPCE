import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import WhatsAppButton from "@/components/ui/whatsapp-button"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToTop from "@/components/ui/scroll-to-top"
// Add the import for fonts
import { playfair, poppins } from "./fonts"

export const metadata: Metadata = {
  title: "Sree Padmanabha - Premium Event Management & Catering Services",
  description:
    "30 Years of Crafting Memories Through Celebrations. Premium catering and event management services for weddings, corporate events, birthdays, and all celebrations across South India.",
  keywords:
    "event management, catering services, wedding planning, corporate events, south indian catering, premium events, kerala catering",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Update the html tag to include the font variables
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${poppins.variable}`}>
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
