<template lang="pug">
v-app
  //- Barra superior elegante con borde sutil
  v-app-bar(flat, border, color="surface")
    v-container.d-flex.align-center.py-0
      v-toolbar-title.font-weight-black.text-primary ADMIN
      
      v-spacer
      
      //- Enlaces de navegación
      .d-flex.ga-3
        v-btn(variant="text", to="/perfil", slim) Perfil
        v-btn(variant="text", to="/usuarios", slim) Usuarios
        v-btn(variant="text", to="/categorias", slim) Categorías
        v-btn(variant="text", to="/adminProductos", slim) Productos

  //- Contenedor principal con transición suave
  v-main.bg-grey-lighten-5
    v-container(fluid)
      router-view(v-slot="{ Component }")
        v-fade-transition(hide-on-leave)
          component(:is="Component")        
</template>

<script setup lang="ts">

console.log('AdminLayout cargado')
</script>

<style scoped>
.v-btn--active {
  color: rgb(var(--v-theme-primary));
  font-weight: bold;
}


:deep(.v-badge__badge) {
  transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
</style>