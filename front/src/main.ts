import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from '@app/view2.vue'
import './assets/css/styles.css'

// Router
import { setupRouter } from '@app/router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import type { ThemeDefinition } from 'vuetify'

// Stores
import { useAppStore } from '@app/store'
import { useAuthStore } from '@auth/store'


/* ============================================================
 * 🎨 Vuetify themes
 * ============================================================ */
const lightTheme: ThemeDefinition = {
  dark: false,
  colors: { primary: '#1976D2', surface: '#FFFFFF' },
  variables: { 'font-family': 'Roboto, sans-serif' },
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: { primary: '#1E1E1E', surface: '#121212' },
  variables: { 'font-family': 'Roboto, sans-serif' },
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: { light: lightTheme, dark: darkTheme },
  },
})

/* ============================================================
 * 🚀 Bootstrap SPA
 * ============================================================ */
async function bootstrap() {
  const app = createApp(App)

  // 1️⃣ Pinia - Crear e instalar inmediatamente
  const pinia = createPinia()
  app.use(pinia)

  // 2️⃣ Router - Crear la instancia
  // (Ya no necesita appStore como argumento según lo hablado)
  const router = setupRouter() 

  // 3️⃣ Plugin de Pinia - ¡IMPORTANTE! 
  // Debe ir ANTES de usar cualquier store para que 'this.router' esté disponible desde el segundo 1.
  pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

  // 4️⃣ Registrar Router en la App de Vue
  app.use(router)

  // 5️⃣ Stores - Ahora sí, las invocamos. 
  // Al ejecutarse ahora, ya tienen el plugin del router inyectado.
  const appStore = useAppStore()
  
  // Inicialización global (Auth -> Roles -> UI Config)
  appStore.init()

  // 7️⃣ Finalizar preparación
  await router.isReady()
  app.use(vuetify)
  
  // 🚀 ¡Despegue!
  app.mount('#app')
}

bootstrap()
