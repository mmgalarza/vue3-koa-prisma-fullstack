<template lang="pug">
v-container(v-if="producto")
  v-row
    v-col(cols="12" md="6")
      v-img(:src="imagenPrincipal" height="400")

    v-col(cols="12" md="6")
      h1 {{ producto.nombre }}
      p {{ producto.descripcion }}

      template(v-if="!isGuest")
        h2 {{ producto.precios }} €
      template(v-else)
        v-alert(type="info")
          | Regístrate para ver precios y comprar
</template>

<script setup lang="ts">
import { computed, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductosStore } from './store'
import { useAppStore } from '@app/store'

const route = useRoute()
const productosStore = useProductosStore()
const appStore = useAppStore()

const isGuest = computed(() => appStore.role === 'GUEST')

const id = Number(route.params.id)
productosStore.cargarProducto(id)

const producto = computed(() => productosStore.productoActual)

const imagenPrincipal = computed(() =>
  producto.value?.imagenes?.find(i => i.principal)?.url ?? ''
)

onUnmounted(() => productosStore.clearProductoActual())
</script>
