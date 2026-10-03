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
        // Light Theme Palette: Inspired by modern healthcare & tech advertising
        fresh: {
          bg: "#F7FAF8",
          card: "#FFFFFF",
          forest: "#0C1F16",
          muted: "#4A5D53",
          emerald: "#00C853",
          green: "#059669",
          tint: "#E6F7EF",
          border: "rgba(5, 150, 105, 0.15)",
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 35px -5px rgba(230, 198, 135, 0.35)',
        'emerald-glow': '0 0 35px -5px rgba(0, 200, 83, 0.35)',
        'luxury-card': '0 16px 40px -10px rgba(0, 0, 0, 0.5)',
        'light-card': '0 12px 36px -10px rgba(12, 31, 22, 0.08)',
      }
    },
  },
  plugins: [],
}
