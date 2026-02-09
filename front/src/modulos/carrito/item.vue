<script setup lang="ts">
import { useCarritoStore } from './store'
import type { CarroItem } from './contract'

const props = defineProps<{
  item: CarroItem
}>()

const store = useCarritoStore()
</script>

<template lang="pug">
tr
  td 
    .d-flex.align-center
      v-avatar.mr-3(rounded size="40" v-if="item.imagen")
        v-img(:src="item.imagen")
      span {{ item.nombre }}
  
  td
    .d-flex.align-center.justify-center
      v-btn(
        icon="mdi-minus"
        variant="text"
        size="x-small"
        color="primary"
        @click="store.decrementarCantidad(item.idProducto)"
      )
      span.mx-3.font-weight-bold.cantidad-label {{ item.cantidad }}
      v-btn(
        icon="mdi-plus"
        variant="text"
        size="x-small"
        color="primary"
        @click="store.agregarProducto(item)"
      )
  
  td.text-right.font-weight-medium {{ item.subtotal }}€
  
  td.text-right
    v-btn(
      icon="mdi-trash-can-outline"
      variant="text"
      color="error"
      size="small"
      @click="store.eliminarProducto(item.idProducto)"
    )
</template>

<style scoped>
.cantidad-label {
  min-width: 24px;
  text-align: center;
}
</style>