import 'vuetify/styles'
import './styles/settings.scss'
import { createApp } from 'vue'
import App from './App.vue'

// 1. Importar Pinia (El cerebro de tus datos)
import { createPinia } from 'pinia'

// 2. Importar Vuetify (La armadura visual)

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Iconos

import './styles/settings.scss'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

// 3. Enganchar todo al motor de Vue
app.use(createPinia())
app.use(vuetify)

app.mount('#app')