<template lang="pug">
v-container
  v-card.mb-4
    v-card-title Carro Completo
    v-card-subtitle Total: {{ totalPrecio | currency }} - {{ totalItems }} items

  v-card-text
    item-view(
      v-for="item in items"
      :key="item.idProducto"
      :item="item"
      @update-cantidad="updateCantidad"
      @remove="removeItem"
    )

  v-card-actions
    v-btn(color="primary" @click="confirmarCarro") Confirmar Operación
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

const confirmarCarro = async () => {
  // Ejemplo de cliente dummy
  const cliente = { nombre: 'Juan Pérez', email: 'juan@mail.com' }
  if (!store.items.length) return
  try {
    await store.crearOperacion(1) // usuarioId = 1 como ejemplo
    await store.confirmarOperacion(1, cliente)
    alert('Operación confirmada!')
  } catch (e) {
    console.error(e)
  }
}
</script>
