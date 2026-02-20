<template lang="pug">
div.d-flex.align-center
  v-expand-x-transition
    v-text-field(
      v-if="isSearching"
      v-model="store.searchQuery"
      placeholder="¿Qué buscas?"
      variant="solo-filled"
      density="compact"
      hide-details
      clearable
      persistent-clear
      @click:clear="store.searchQuery = ''"
      class="search-input"
      auto-focus
    )
  
  v-btn(
    icon
    @click="toggleSearch"
    :color="isSearching ? 'primary' : ''"
    class="ml-2"
  )
    v-icon {{ isSearching ? 'mdi-close' : 'mdi-magnify' }}
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useBrowserStore } from '../store'

const store = useBrowserStore()
const isSearching = ref(false)

const toggleSearch = () => {
  isSearching.value = !isSearching.value
  if (!isSearching.value) {
    store.searchQuery = ''
  }
}

// Cerrar automáticamente si se selecciona una categoría desde otro lado
watch(() => store.selectedItem, () => {
  isSearching.value = false
})
</script>

<style scoped>
.search-input {
  width: 250px;
  transition: all 0.3s ease;
}
</style>