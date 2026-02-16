import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __API_URL__: JSON.stringify('http://localhost:3000'), // Tu backend Koa
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@componentes': fileURLToPath(new URL('./src/app/components', import.meta.url)),
      '@servicios': fileURLToPath(new URL('./src/servicios', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@modulos': fileURLToPath(new URL('./src/modulos', import.meta.url)),
      '@context': fileURLToPath(new URL('./src/context', import.meta.url)),
    },
  },
})