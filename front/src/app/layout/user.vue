<template lang="pug">
v-app
  //- Barra superior elegante con borde sutil
  v-app-bar(flat, border, color="surface")
    v-container.d-flex.align-center.py-0
      v-toolbar-title.font-weight-black.text-primary USUARIO
      
      v-spacer
      
      //- Enlaces de navegación
      .d-flex.ga-3
        v-btn(variant="text", to="/catalogo", slim) Catálogo
        v-btn(variant="text", to="/pedidos", slim) Pedidos
        v-btn(variant="text", to="/perfil", slim) Perfil

      //- Menú del Carrito (Mini-Cart)
      v-menu(open-on-hover, location="bottom end", :close-on-content-click="false")
        template(#activator="{ props }")
          v-btn.ml-2(variant="text", v-bind="props", icon)
            v-badge(
              color="error", 
              :content="store.totalCantidad", 
              :model-value="store.totalCantidad > 0",
              dot-style="transform: scale(0.8)"
            )
              v-icon mdi-cart-outline
        
        //- Contenido del desplegable
        v-card(min-width="320" border)
          v-list(lines="two" v-if="!store.isEmpty")
            v-list-item(
              v-for="item in store.items" 
              :key="item.idProducto"
              :title="item.nombre"
              :subtitle="`${item.cantidad} x ${item.precio}€`"
            )
              template(#prepend)
                v-avatar(rounded="sm" size="40")
                  v-img(:src="item.imagen")
              template(#append)
                span.text-body-2.font-weight-bold {{ item.subtotal }}€
            
            v-divider
            
            v-card-text.d-flex.justify-space-between.py-3
              span Total acumulado:
              span.text-h6.text-primary.font-weight-black {{ store.totalPrecio }}€
            
            v-card-actions.pa-4.pt-0
              v-btn(color="primary", variant="flat", block, to="/carro") 
                | Ir al Carrito completo
          
          //- Vista si está vacío
          v-card-text.text-center.pa-6(v-else)
            v-icon.mb-2(color="grey-lighten-1" size="40") mdi-cart-off
            .text-caption Tu carrito está vacío

  //- Contenedor principal con transición suave
  v-main.bg-grey-lighten-5
    v-container
      v-fade-transition(hide-on-leave)
        router-view
</template>

<script setup lang="ts">
import { useCarritoStore } from '@modulos/carrito/store'

const store = useCarritoStore()

console.log('UserLayout cargado: Carrito vinculado al Store global')
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