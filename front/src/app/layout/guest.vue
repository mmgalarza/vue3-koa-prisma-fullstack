<template lang="pug">
//- No usamos v-app aquí porque ya está en el Layout Maestro
div
  //- Sticky Navbar que se eleva al hacer scroll
  v-app-bar(
    flat 
    border 
    color="white" 
    scroll-behavior="elevate"
    density="comfortable"
  )
    v-container.d-flex.align-center.py-0
      v-toolbar-title.font-weight-black.text-primary
        v-icon(start color="primary") mdi-hexagon-outline
        | MI APP 2026
      
      v-spacer
      
      //- Navegación Guest
      .d-flex.ga-3
        v-btn.text-none(variant="text" to="/") Inicio
        v-btn.text-none(variant="text" to="/catalogo") Catálogo
      v-btn.text-none.ml-4(
        color="primary" 
        variant="flat" 
        to="/login"
        elevation="0"
      ) Iniciar Sesión

  //- Main sin contenedor fijo: Libertad total para la vista
  v-main.bg-white
    v-fade-transition(hide-on-leave)
      router-view
</template>