import { Fraunces, Manjari } from "next/font/google"
import localFont from "next/font/local"

// Display typeface. Variable font — opsz and SOFT axes are exercised via the
// `.font-display` utility in globals.css (font-variation-settings), since
// Tailwind's font-family token alone only carries the family + wght axis.
export const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
})

// Body typeface. Not on Google Fonts — self-hosted from Fontshare so it's
// served from our own domain rather than an external CDN (matters on 4G).
export const generalSans = localFont({
  src: [
    { path: "./fonts/general-sans/400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/general-sans/500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/general-sans/600.woff2", weight: "600", style: "normal" },
    { path: "./fonts/general-sans/700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-general-sans",
})

// Malayalam typeface, applied selectively via the `font-malayalam` utility.
export const manjari = Manjari({
  subsets: ["malayalam"],
  weight: ["100", "400", "700"],
  display: "swap",
  variable: "--font-manjari",
})
