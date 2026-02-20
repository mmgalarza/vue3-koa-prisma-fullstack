<template lang="pug">
v-breadcrumbs.pa-0(
  v-if="!store.isAtRoot && !store.searchQuery"
  class="breadcrumbs-custom"
)
  v-breadcrumbs-item(
    link
    @click="store.navigateToIndex(-1)"
    class="breadcrumb-home"
  ) 
  v-icon(size="20") mdi-home
  template(v-for="(crumb, index) in store.breadcrumbs" :key="crumb.id")
    v-breadcrumbs-divider /
    v-breadcrumbs-item(
      :disabled="index === store.breadcrumbs.length - 1"
      link
      @click="store.navigateToIndex(index)"
      :class="{ 'breadcrumb-current': index === store.breadcrumbs.length - 1 }"
    ) {{ crumb.nombre }}
</template>

<script setup lang="ts">
import { useBrowserStore } from '../store'

// Store tipado (asumiendo que el store ya está tipado)
const store = useBrowserStore()
</script>

<style scoped>
.breadcrumbs-custom {
  font-size: 0.95rem;
}

.breadcrumbs-custom :deep(.v-breadcrumbs-item) {
  color: #1976d2; /* primary color */
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.breadcrumbs-custom :deep(.v-breadcrumbs-item:hover) {
  text-decoration: underline;
  opacity: 0.9;
  cursor: pointer;
}

.breadcrumbs-custom :deep(.v-breadcrumbs-item--disabled) {
  color: rgba(0, 0, 0, 0.6);
  pointer-events: none;
  text-decoration: none;
  opacity: 1;
  font-weight: 500;
}

.breadcrumbs-custom :deep(.v-breadcrumbs-divider) {
  color: rgba(0, 0, 0, 0.4);
  padding: 0 4px;
}

/* Estilo específico para el home si quieres diferenciarlo */
.breadcrumb-home {
  font-weight: 500;
}
</style>