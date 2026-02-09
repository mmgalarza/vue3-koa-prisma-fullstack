<template lang="pug">
v-col(cols="12" md="4")
  v-card
    v-img(:src="imagen" height="200")

    v-card-title {{ producto.nombre }}

    v-card-text
      template(v-if="mostrarPrecio")
        strong {{ producto.precios }} €
      template(v-else)
        em Precio solo para usuarios registrados

    v-card-actions
      // Siempre mostrar Ver detalle
      v-btn(
        color="primary"
        @click="verDetalle"
      ) Ver detalle

      // Solo usuarios: añadir al carrito
      v-btn(
        v-if="permitirCompra"
        color="success"
        @click="agregarAlCarrito"
      ) Añadir

      // Solo guest: CTA registrarse
      v-btn(
        v-else-if="!permitirCompra"
        color="secondary"
        to="/login"
      ) Identifícate

</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { Producto } from './contract'
import { useCarritoStore } from '@modulos/carrito/store'

const carritoStore = useCarritoStore()

const props = defineProps<{
  producto: Producto
  mostrarPrecio: boolean
  permitirCompra: boolean
}>()

const router = useRouter()

const imagen = computed(() =>
  props.producto.imagenes?.find(i => i.principal)?.url ?? ''
)

function verDetalle() {
  router.push(`/productos/${props.producto.idProducto}`)
}

// Solo se ejecuta si permitirCompra === true
function agregarAlCarrito() {
  const { producto } = props
  carritoStore.agregarProducto(producto)
}
</script>
