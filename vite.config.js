import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          const verification = env.VITE_GOOGLE_SITE_VERIFICATION || ''
          const gaId = env.VITE_GA_MEASUREMENT_ID || ''
          let result = html
            .replace(/%VITE_GOOGLE_SITE_VERIFICATION%/g, verification)
            .replace(/%VITE_GA_MEASUREMENT_ID%/g, gaId)
          // If verification is empty, clean up the tag so empty meta tags don't appear in source
          if (!verification) {
            result = result.replace(/<meta name="google-site-verification" content="" \/>\s*/g, '')
          }
          return result
        }
      }
    ],
  }
})

