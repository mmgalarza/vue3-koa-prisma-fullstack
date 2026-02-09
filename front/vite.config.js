import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [vue(), vuetify({ autoImport: true }), svgLoader(),
    ViteFonts({
          fontsource: {
            families: [
              {
                name: 'Roboto',
                weights: [100, 300, 400, 500, 700, 900],
                styles: ['normal', 'italic'],
              },
            ],
          },
        }),
  ],
  define: {
    __API_URL__: JSON.stringify('http://localhost:3000'),
  },  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@auth': fileURLToPath(new URL('./src/app/auth', import.meta.url)),
      '@modulos': fileURLToPath(new URL('./src/modulos', import.meta.url)),
      '@home': fileURLToPath(new URL('./src/modulos/home', import.meta.url)),
      '@dashboard': fileURLToPath(new URL('./src/modulos/dashboard', import.meta.url)),
      '@componentes': fileURLToPath(new URL('./src/app/components', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
    },
  },
})