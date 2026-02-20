<template lang="pug">
//- Menu Lateral Mobile
v-navigation-drawer(v-model="drawer" temporary)
  v-list(nav)
    v-list-item(prepend-icon="mdi-home" title="Inicio" value="home")
    v-list-item(prepend-icon="mdi-food" title="Nuestro Menú" value="menu")
    v-list-item(prepend-icon="mdi-map-marker" title="Sucursales" value="locations")
    v-list-item(prepend-icon="mdi-information" title="Nosotros" value="about")

//- Barra de Navegación
v-app-bar(flat border="b" color="white" absolute)
  v-app-bar-nav-icon.d-md-none(@click="drawer = !drawer")
  
  v-toolbar-title.font-weight-black.text-h5
    span.text-primary WEB
    span Burguer

  v-spacer

  div.d-none.d-md-flex.align-center.ga-4
    v-btn(variant="text" class="text-none font-weight-medium") Inicio
    v-btn(variant="text" class="text-none font-weight-medium") Productos
    v-btn(variant="text" class="text-none font-weight-medium") Promociones
    v-btn(variant="text" class="text-none font-weight-medium") Contacto

  v-spacer

  //- Ubicación
  v-btn.d-none.d-sm-flex(variant="tonal" rounded="lg" color="secondary" size="small")
    v-icon(start) mdi-map-marker-radius
    div.text-left
      div.text-caption(style="line-height: 1") Entregar en:
      div.font-weight-bold Av. Central 452

  //- Carrito
  v-btn(icon class="ml-4")
    v-badge(color="primary" content="3" offset-x="3" offset-y="3")
      v-icon(size="28") mdi-shopping-outline
</template>

<script setup lang="ts">
import { ref } from 'vue'
const drawer = ref(false)
</script>