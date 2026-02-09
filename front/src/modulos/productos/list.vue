<template lang="pug">
v-container
  Filter(
    :categorias="productosStore.categoriasTree"
    @change="onCategoriaChange"
  )

  v-row
    producto-item(
      v-for="p in productosStore.productos"
      :key="p.idProducto"
      :producto="p"
      :mostrar-precio="!isGuest"
      :permitir-compra="!isGuest"
    )

  v-pagination(
    v-if="productosStore.total > productosStore.limit"
    :length="Math.ceil(productosStore.total / productosStore.limit)"
    v-model="page"
  )

  v-alert(
    v-if="isGuest"
    type="info"
    class="mt-4"
  )
    | Para ver precios y comprar, debes registrarte.
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useProductosStore } from './store'
import { useAppStore } from '@app/store'
import Filter from './filter.vue'
import ProductoItem from './item.vue'

const productosStore = useProductosStore()
const appStore = useAppStore()

const isGuest = computed(() => appStore.role === 'GUEST')

const page = ref(1)

productosStore.cargarCategorias()
productosStore.cargarProductos()

watch(page, (p) => productosStore.setPage(p))

function onCategoriaChange(id: number | null) {
  console.log('Categoria seleccionada:', id)
  productosStore.setFiltros({ categoriaId: id })
}
</script>
