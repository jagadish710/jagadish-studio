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
        // Quicksilver / Liquid Metal Dark Luxury Palette
        void: "#07070A",
        surface: "#0E0F14",
        raised: "#161821",
        ice: "#8CB4FF",
        "ice-glow": "rgba(140, 180, 255, 0.18)",
        hairline: "rgba(255, 255, 255, 0.08)",
        // Existing legacy tokens preserved for backwards compatibility
        luxury: {
          dark: "#07070A",
          darker: "#050507",
          card: "#0E0F14",
          cardElevated: "#161821",
          platinum: "#F3F5F9",
          muted: "#A3ABBA",
          subtle: "#7A8396",
          silver: "#B9C1CE",
          gold: "#E6C687",
          goldHover: "#F0D49E",
          goldGlow: "rgba(230, 198, 135, 0.35)",
        },
        fresh: {
          bg: "#FFFFFF",
          card: "#FFFFFF",
          forest: "#0F172A",
          muted: "#475569",
          emerald: "#2563EB",
          green: "#059669",
          tint: "#F8FAFC",
          border: "#E2E8F0",
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
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
