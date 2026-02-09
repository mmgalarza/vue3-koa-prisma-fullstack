<template lang="pug">
  v-container(v-if="show" class="fixed-bottom pa-4" fluid)
    v-card(class="d-flex flex-column flex-sm-row align-center justify-space-between pa-4"
          color="blue-lighten-5")
      div.text-body-2.mb-2.mb-sm-0
        | Usamos cookies para mejorar tu experiencia.
        a(href="/politica-cookies" class="text-decoration-underline ml-1") Más información
      .d-flex.gap-2
        v-btn(color="grey darken-1" text @click="reject") Rechazar
        v-btn(color="blue darken-1" dark @click="accept") Aceptar
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const show = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    show.value = true
  }
})

const accept = () => {
  localStorage.setItem('cookie-consent', 'accepted')
  show.value = false
}

const reject = () => {
  localStorage.setItem('cookie-consent', 'rejected')
  show.value = false
}
</script>

<style scoped>
.fixed-bottom {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 50;
}
</style>
