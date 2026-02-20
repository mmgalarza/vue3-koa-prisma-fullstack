<template lang="pug">
v-app(style="background-color: #f5f5f5") 
  v-container.pa-0.bg-white.elevation-4.main-box-layout
    
    Navbar
    
    v-main
      div(class="bg-brown-darken-4 py-2 text-center")
        h2(class="text-h5 font-weight-bold text-white") NUESTRA CARTA

      NavegadorVista

    Footer
</template>

<script setup lang="ts">
import Navbar from './componentes/Navbar.vue'
import Footer from './componentes/Footer.vue'
import NavegadorVista from './modulos/navegador/Browser.vue'
</script>

<style scoped lang="scss">
.main-box-layout {
  max-width: 1200px !important;
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
}
</style>