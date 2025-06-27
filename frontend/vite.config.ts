import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Local dev server fallback (for `vite dev`)
  },
  build: {
    // If you're building for Render or Netlify etc.
    outDir: 'dist'
  }
})
