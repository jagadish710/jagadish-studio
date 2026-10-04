/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark Theme Palette: Obsidian Black & Champagne (Modern Tech Luxury)
        luxury: {
          dark: "#121212",        // Dominant Soft Black
          darker: "#0A0A0A",
          card: "#181818",
          cardElevated: "#202020",
          platinum: "#EAEAEA",    // Secondary Platinum Gray
          muted: "#9E9E9E",
          gold: "#E6C687",        // Accent Metallic Champagne Gold
          goldHover: "#F0D49E",
          goldGlow: "rgba(230, 198, 135, 0.35)",
        },
        // Light Theme Palette: Crisp, Trustworthy Enterprise Standard (Stripe / Linear / Apple grade)
        fresh: {
          bg: "#FFFFFF",
          card: "#FFFFFF",
          forest: "#0F172A",      // Deep authoritative Slate-900
          muted: "#475569",       // Refined Slate-600
          emerald: "#2563EB",     // Trustworthy Royal Blue / Indigo
          green: "#059669",       // Refined Forest Emerald for verified badges
          tint: "#F8FAFC",        // Clean Slate-50 surface
          border: "#E2E8F0",      // Crisp hairline Slate-200 border
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(230, 198, 135, 0.35)',
        'emerald-glow': '0 4px 20px -2px rgba(37, 99, 235, 0.25)',
        'luxury-card': '0 16px 40px -10px rgba(0, 0, 0, 0.5)',
        'light-card': '0 4px 24px -4px rgba(15, 23, 42, 0.06)',
      }
    },
  },
  plugins: [],
}
