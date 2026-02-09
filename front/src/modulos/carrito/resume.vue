<script setup lang="ts">
import { useCarritoStore } from './store'

const store = useCarritoStore()
</script>

<template lang="pug">
v-menu(location="bottom end" :close-on-content-click="false")
  template(#activator="{ props }")
    v-btn(icon v-bind="props")
      v-badge(color="error" :content="store.totalCantidad" :model-value="store.totalCantidad > 0")
        v-icon mdi-cart-outline

  v-card(min-width="300" max-width="400" elevation="10")
    v-list(lines="two" v-if="!store.isEmpty")
      v-list-item(
        v-for="item in store.items" 
        :key="item.idProducto"
        :title="item.nombre"
        :subtitle="`${item.cantidad} x ${item.precio}€`"
      )
        template(#prepend)
          v-avatar(rounded size="40")
            v-img(:src="item.imagen")
        
        template(#append)
          span.font-weight-bold {{ item.subtotal }}€

      v-divider

      v-card-text.d-flex.justify-space-between.align-center
        span.text-subtitle-1 Total:
        span.text-h6.text-primary.font-weight-black {{ store.totalPrecio }}€

      v-card-actions.pa-4
        v-btn(variant="text" block to="/carrito" color="primary") Ver carrito completo
        v-btn(variant="flat" block color="success" @click="/* lógica rápida de checkout */") Finalizar compra
    
    //- Estado vacío
    v-card-text.text-center.pa-8(v-else)
      v-icon(size="64" color="grey-lighten-1") mdi-cart-off
      .text-h6.mt-2 Tu carrito está vacío
      v-btn.mt-4(variant="text" color="primary" to="/productos") Ir a la tienda
</template>