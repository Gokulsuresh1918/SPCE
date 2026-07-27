import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Ela design system — see globals.css for the CSS custom properties.
        ela: {
          deep: "rgb(var(--ela-deep) / <alpha-value>)",
          mid: "rgb(var(--ela-mid) / <alpha-value>)",
          fresh: "rgb(var(--ela-fresh) / <alpha-value>)",
          50: "rgb(var(--ela-50) / <alpha-value>)",
          100: "rgb(var(--ela-100) / <alpha-value>)",
          200: "rgb(var(--ela-200) / <alpha-value>)",
          300: "rgb(var(--ela-300) / <alpha-value>)",
          400: "rgb(var(--ela-400) / <alpha-value>)",
          500: "rgb(var(--ela-500) / <alpha-value>)",
          600: "rgb(var(--ela-600) / <alpha-value>)",
          700: "rgb(var(--ela-700) / <alpha-value>)",
          800: "rgb(var(--ela-800) / <alpha-value>)",
          900: "rgb(var(--ela-900) / <alpha-value>)",
        },
        rice: {
          DEFAULT: "rgb(var(--rice) / <alpha-value>)",
          50: "rgb(var(--rice-50) / <alpha-value>)",
          100: "rgb(var(--rice-100) / <alpha-value>)",
          200: "rgb(var(--rice-200) / <alpha-value>)",
          300: "rgb(var(--rice-300) / <alpha-value>)",
          400: "rgb(var(--rice-400) / <alpha-value>)",
          500: "rgb(var(--rice-500) / <alpha-value>)",
          600: "rgb(var(--rice-600) / <alpha-value>)",
          700: "rgb(var(--rice-700) / <alpha-value>)",
          800: "rgb(var(--rice-800) / <alpha-value>)",
          900: "rgb(var(--rice-900) / <alpha-value>)",
        },
        turmeric: "rgb(var(--turmeric) / <alpha-value>)",
        kumkum: "rgb(var(--kumkum) / <alpha-value>)",
        charcoal: "rgb(var(--charcoal) / <alpha-value>)",
        // Legacy v0-template theme colors — still referenced by pages that
        // haven't been rebuilt onto the Ela system yet (Phases 02-06).
        gold: {
          50: "#FFFAEB",
          100: "#FFF6D6",
          200: "#FFE7AD",
          300: "#FFD875",
          400: "#FFCB4D",
          500: "#DAA520", // Classic gold
          600: "#BF8C16",
          700: "#9F730C",
          800: "#7F5A03",
          900: "#5F4200",
        },
        maroon: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#800020", // Classic maroon
          600: "#6B001B",
          700: "#570016",
          800: "#430011",
          900: "#2E000C",
        },
        ivory: {
          50: "#FFFFF0",
          100: "#FFFEE6",
          200: "#FFFDD1",
          300: "#FFFCBC",
          400: "#FFFBA8",
          500: "#FFFFF0", // Classic ivory
          600: "#D6D6C2",
          700: "#ADAD99",
          800: "#858570",
          900: "#5C5C46",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-general-sans)", "system-ui", "sans-serif"],
        malayalam: ["var(--font-manjari)", "sans-serif"],
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
        "6xl": "var(--text-6xl)",
        "7xl": "var(--text-7xl)",
        display: "var(--text-display)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "zoom-in": "zoomIn 0.6s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
