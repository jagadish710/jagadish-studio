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
        // Grand Line & Ocean Theme Palette
        ocean: {
          950: '#040812',
          900: '#060B16',
          800: '#0E172A',
          700: '#1E293B',
        },
        treasure: {
          300: '#FDE047',
          400: '#FACC15',
          500: '#F59E0B',
          600: '#D97706',
        },
        crimson: {
          400: '#FB7185',
          500: '#F43F5E',
          600: '#E11D48',
          700: '#BE123C',
        },
        cyanline: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
        },
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
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Fredoka"', '"Space Grotesk"', 'cursive', 'sans-serif'],
        fredoka: ['"Fredoka"', 'cursive', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
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
