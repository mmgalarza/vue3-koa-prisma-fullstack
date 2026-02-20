<template lang="pug">
v-toolbar(flat color="transparent")
  //- Botón volver con indicación de nivel
  v-btn(
    icon
    v-if="!store.isAtRoot" 
    @click="store.goBack"
    class="mr-2"
  )
    v-icon mdi-chevron-left

  //- Avatar del item actual (Solo si no es la raíz)
  v-avatar(
    v-if="store.selectedItem && !store.searchQuery" 
    size="40" 
    class="mr-3 border"
  )
    v-img(:src="store.selectedItem.imagenUrl")

  //- Título y contador dinámico
  div.d-flex.flex-column
    span.text-h6.line-height-1 {{ title }}
    span.text-caption.text-grey(v-if="!store.searchQuery")
      | {{ itemCountText }}

  v-spacer

  //- Buscador con comportamiento refinado
  SearchToggle
   
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useBrowserStore } from '../store'
import SearchToggle from './Search.vue'

const props = defineProps<{ title: string }>()
const store = useBrowserStore()

// Texto dinámico para el contador de sub-elementos
const itemCountText = computed(() => {
  const count = store.getCurrentElements.length
  if (store.isAtRoot) return `${count} Familias disponibles`
  return `${count} items dentro de esta selección`
})

// Label de búsqueda contextual
const searchLabel = computed(() => {
  return store.isAtRoot ? "Buscar en todo el catálogo..." : `Buscar en ${props.title}...`
})
</script>

<style scoped>
.line-height-1 {
  line-height: 1.2;
}
</style>