import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const LOGO_SRC = "/brand/logo.png"
export const ICON_SRC = "/brand/icon.png"

type BrandLogoProps = {
  /** `full` = horizontal logo; `icon` = mark only; `responsive` = icon on xs, full from sm */
  variant?: "full" | "icon" | "responsive"
  href?: string | null
  className?: string
  priority?: boolean
}

/**
 * Site brand mark. Temporary assets in /public/brand — swap files when a refined logo is ready.
 */
export function BrandLogo({
  variant = "responsive",
  href = "/",
  className,
  priority = false,
}: BrandLogoProps) {
  const image =
    variant === "responsive" ? (
      <>
        <Image
          src={ICON_SRC}
          alt="Sree Padmanabha — Sadhya Catering & Event Management"
          width={160}
          height={120}
          priority={priority}
          className={cn("h-auto w-auto max-h-11 object-contain sm:hidden", className)}
        />
        <Image
          src={LOGO_SRC}
          alt="Sree Padmanabha — Sadhya Catering & Event Management"
          width={640}
          height={200}
          priority={priority}
          className={cn("hidden h-auto w-auto max-h-12 object-contain sm:block", className)}
        />
      </>
    ) : (
      <Image
        src={variant === "icon" ? ICON_SRC : LOGO_SRC}
        alt="Sree Padmanabha — Sadhya Catering & Event Management"
        width={variant === "icon" ? 160 : 640}
        height={variant === "icon" ? 120 : 200}
        priority={priority}
        className={cn(
          "h-auto w-auto object-contain",
          variant === "icon" ? "max-h-12" : "max-h-12 sm:max-h-14",
          className,
        )}
      />
    )

  if (href === null) {
    return <span className="inline-flex shrink-0 items-center">{image}</span>
  }

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turmeric focus-visible:ring-offset-2 focus-visible:ring-offset-ela-deep"
      aria-label="Sree Padmanabha home"
    >
      {image}
    </Link>
  )
}
