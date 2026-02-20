<template lang="pug">
v-sheet(color="transparent" class="mx-auto mb-0")
  v-slide-group(show-arrows class="pa-2")
    v-slide-group-item(
      v-for="cat in categories" 
      :key="cat.id"
    )
      v-card(
        @click="$emit('select', cat)"
        :class="['ma-2 category-mini-card', { 'active-card': activeId === cat.id }]"
        width="140"
        height="80"
        class="rounded-lg overflow-hidden elevation-3"
      )
        v-img(:src="cat.imagenUrl" cover height="100%")
          //- Overlay para el título
          div.fill-height.d-flex.align-end
            div.title-overlay.pa-2.w-100
              span.text-caption.font-weight-bold.text-white.line-clamp-1 {{ cat.nombre }}
</template>

<script setup lang="ts">
import type { ItemBrowserType } from '../zod'

defineProps<{
  categories: ItemBrowserType[],
  activeId?: string | null
}>()

defineEmits(['select'])
</script>

<style scoped lang="scss">
.category-mini-card {
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent !important;
  
  &:hover {
    transform: scale(1.05);
  }
}

.active-card {
  border-color: rgb(var(--v-theme-primary)) !important;
  box-shadow: 0 0 15px rgba(var(--v-theme-primary), 0.4) !important;
}

.title-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%);
  
  span {
    display: block;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
    font-size: 0.75rem !important;
    line-height: 1;
  }
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>