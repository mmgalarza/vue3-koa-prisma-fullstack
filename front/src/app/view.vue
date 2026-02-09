<template lang="pug">
v-app(theme="light")
  // Solo renderizamos cuando la SPA está inicializada
  v-layout(v-if="app.initialized")
    my-navbar(
      :navigation="menu"
      title="Mi tienda"
      icon="/logo.svg"
    )

    v-main(style="overflow-y:auto; flex:1")
      v-container.fluid.fill-height
        simple-hero(
          v-if="$route.path === 'd/'"
          title="Bienvenido a Mi tienda"
          subtitle="La mejor tienda en línea para tus necesidades"
          cta="Explorar Productos"
        )
        // Monta la ruta activa
        router-view

    // Componente global siempre visible
    CookieConsent
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAppStore } from './store'
import MyNavbar from '@componentes/my-navbar/view.vue'
import CookieConsent from '@componentes/cookies-consent/view.vue'
import SimpleHero from '@componentes/hero/view.vue'
import { computed } from 'vue'
console.log('app cargado')
const app = useAppStore()
const { initialized, ui } = storeToRefs(app)
const menu = computed(() => ui.value.menu)   
</script>
