// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ 
      autoImport: true,
      // styles: {  configFile: 'src/styles/settings.scss'  } 
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },  
  server: {
    port: 5176,
    strictPort: true,
  },
  // Añadimos esta sección para corregir el error de stegaClean
  optimizeDeps: {
    exclude: ['@sanity/client/stega'] // O el nombre del paquete que cause el conflicto
  }
})