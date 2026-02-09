<script setup lang="ts">
import { computed } from 'vue'
import { useCarritoStore } from './store'

const props = defineProps<{
  producto: {
    id: number
    nombre: string
    precio: number
    imagen?: string
  }
}>()

const store = useCarritoStore()

// Buscamos si el producto ya está en el store para mostrar su cantidad
const itemEnCarrito = computed(() => 
  store.items.find(i => i.idProducto === props.producto.id)
)
</script>

<template lang="pug">
v-card.mx-auto(max-width="344" hover variant="flat" border)
  v-img(:src="props.producto.imagen" height="200px" cover)
    template(#placeholder)
      v-row.fill-height.ma-0(align="center" justify="center")
        v-progress-circular(indeterminate color="primary")

  v-card-item
    v-card-title.text-h6 {{ props.producto.nombre }}
    v-card-subtitle.text-primary.font-weight-bold {{ props.producto.precio }}€

  v-card-actions.pa-4
    //- Si NO está en el carrito, mostramos el botón de agregar
    v-btn(
      v-if="!itemEnCarrito"
      color="primary"
      variant="tonal"
      prepend-icon="mdi-cart-plus"
      block
      @click="store.agregarProducto(props.producto)"
    ) Agregar

    //- Si YA está en el carrito, mostramos selector de cantidad
    v-row(v-else no-gutters align="center" justify="space-between")
      v-btn(
        icon="mdi-minus"
        variant="outlined"
        size="small"
        color="primary"
        @click="store.decrementarCantidad(props.producto.id)"
      )
      
      span.text-h6.font-weight-bold {{ itemEnCarrito.cantidad }}
      
      v-btn(
        icon="mdi-plus"
        variant="flat"
        size="small"
        color="primary"
        @click="store.agregarProducto(props.producto)"
      )
</template>