<template lang="pug">
v-card
  v-card-title
    p Mini Carro ({{ totalItems }} items, {{ totalPrecio | currency }})

  v-card-text
    item-view(
      v-for="item in items"
      :key="item.idProducto"
      :item="item"
      @update-cantidad="updateCantidad"
      @remove="removeItem"
    )
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCarroStore } from './store'
import ItemView from './items/default.vue'

const store = useCarroStore()

const items = computed(() => store.items)
const totalItems = computed(() => store.totalItems)
const totalPrecio = computed(() => store.totalPrecio)

const updateCantidad = (id: number, cantidad: number) => {
  store.actualizarCantidad(id, cantidad)
}

const removeItem = (id: number) => {
  store.quitarProducto(id)
}
</script>
