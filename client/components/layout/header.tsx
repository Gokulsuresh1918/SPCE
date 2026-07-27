"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, PhoneCall, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { ElaButton } from "@/components/ela/button"
import { BrandLogo } from "@/components/brand/logo"
import { fadeUp, staggerContainer, useReducedMotion } from "@/lib/motion"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Sadhya Menu", href: "/dishes" },
  { name: "Gallery", href: "/gallery" },
  { name: "Packages", href: "/packages" },
  { name: "Contact", href: "/contact" },
]

const PHONE_NUMBERS = [
  { number: "7902371571", label: "Bookings" },
  { number: "9746235003", label: "Sadhya Enquiry" },
  { number: "9567431555", label: "Office" },
]

const linkUnderline =
  "relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-turmeric after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric focus-visible:ring-offset-2 focus-visible:ring-offset-ela-deep rounded-sm"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const reduced = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > window.innerHeight * 0.9)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 border-b transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isScrolled ? "bg-ela-deep/90 backdrop-blur-md border-rice/10" : "bg-transparent border-transparent",
        )}
      >
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <BrandLogo variant="responsive" priority className="rounded-sm" />

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-rice/90 transition-colors hover:text-rice",
                  linkUnderline,
                  pathname === item.href && "text-rice after:scale-x-100",
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ElaButton asChild variant="primary" size="sm">
              <Link href="/book-sadhya">
                <span className="hidden sm:inline">Book Sadhya</span>
                <span className="sm:hidden">Book</span>
              </Link>
            </ElaButton>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-rice focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} pathname={pathname} reduced={reduced} />
    </>
  )
}

function MobileMenu({
  open,
  onOpenChange,
  pathname,
  reduced,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  pathname: string
  reduced: boolean
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[60] bg-charcoal/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduced ? 0 : 0.3 }}
              />
            </Dialog.Overlay>
            <Dialog.Content
              asChild
              forceMount
              aria-describedby={undefined}
              className="fixed inset-0 z-[70]"
            >
              <motion.div
                className="flex h-full flex-col overflow-y-auto bg-ela-deep text-rice"
                initial={{ clipPath: "inset(0 0 100% 0)" }}
                animate={{ clipPath: "inset(0 0 0% 0)" }}
                exit={{ clipPath: "inset(0 0 100% 0)" }}
                transition={{ duration: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex h-20 shrink-0 items-center justify-between px-4 sm:px-6">
                  <Dialog.Title className="sr-only">Sree Padmanabha</Dialog.Title>
                  <BrandLogo variant="responsive" href={null} className="rounded-sm" />
                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </Dialog.Close>
                </div>

                <motion.nav
                  variants={staggerContainer(reduced, 0.06, 0.1)}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-1 flex-col justify-center gap-1 px-6"
                  aria-label="Mobile"
                >
                  {navigation.map((item) => (
                    <motion.div key={item.name} variants={fadeUp(reduced, 16)}>
                      <Dialog.Close asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "block py-3 font-serif text-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric rounded-sm",
                            pathname === item.href ? "text-turmeric" : "text-rice",
                          )}
                        >
                          {item.name}
                        </Link>
                      </Dialog.Close>
                    </motion.div>
                  ))}
                </motion.nav>

                <div className="shrink-0 space-y-3 border-t border-rice/10 px-6 py-6">
                  {PHONE_NUMBERS.map((p) => (
                    <a
                      key={p.number}
                      href={`tel:+91${p.number}`}
                      className="flex items-center gap-3 text-rice/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric rounded-sm"
                    >
                      <PhoneCall className="h-4 w-4 text-turmeric" aria-hidden="true" />
                      <span>
                        {p.number} <span className="text-rice/50">({p.label})</span>
                      </span>
                    </a>
                  ))}
                  <a
                    href="https://wa.me/917902371571"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-rice/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric rounded-sm"
                  >
                    <MessageCircle className="h-4 w-4 text-ela-fresh" aria-hidden="true" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
