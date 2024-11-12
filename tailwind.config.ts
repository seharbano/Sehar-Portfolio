import type { Config } from "tailwindcss"
const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
    // "url('../assets/pngs/deals-banner.jpg')",/bg-explosion.png
    extend: {
      backgroundImage: {
        explosion: "url('../assets/pngs/bg-explosion.png')",
        circles: 'url("../assets/pngs/bg-circles.png")',
        season: "url('../assets/pngs/season-img.webp')",
        ruffy: 'url("../assets/avif/ruffy.avif")',
        circleStar: 'url("../assets/svgs/circle-star.svg")',
        site: 'url("../assets/svgs/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config