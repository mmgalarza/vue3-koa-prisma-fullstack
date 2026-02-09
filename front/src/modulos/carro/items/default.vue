<template lang="pug">
v-row.align-center.justify-space-between.mb-2
  v-col(cols="2")
    v-img(:src="item.imagen" height="50")

  v-col(cols="4")
    p {{ item.nombre }}

  v-col(cols="2")
    v-text-field(
      v-model.number="item.cantidad"
      type="number"
      min="1"
      dense
      outlined
      @change="actualizarCantidad"
    )

  v-col(cols="2")
    p {{ item.subtotal | currency }}

  v-col(cols="2")
    v-btn(icon @click="eliminar")
      v-icon mdi-delete
</template>

<script setup lang="ts">
import type { CarroItem } from '../contract'

const props = defineProps<{ item: CarroItem }>()
const emit = defineEmits<{
  (e: 'update-cantidad', id: number, cantidad: number): void
  (e: 'remove', id: number): void
}>()

const actualizarCantidad = () => {
  emit('update-cantidad', props.item.idProducto, props.item.cantidad)
}

const eliminar = () => {
  emit('remove', props.item.idProducto)
}
</script>
