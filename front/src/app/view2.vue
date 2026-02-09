<template lang="pug">
v-app
  //- Elementos globales (Notificaciones, etc.)
  v-sonner(position="top-right") 

  //- Renderizamos la ruta, que cargará el GuestLayout, AdminLayout, etc.
  v-main
    router-view
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