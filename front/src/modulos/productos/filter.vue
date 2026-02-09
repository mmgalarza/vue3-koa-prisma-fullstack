<template lang="pug">
v-card.mb-4
  v-card-title Filtros
  v-card-text
    v-treeview(
      :items="categorias"
      activatable
      selectable
      open-all
      item-key="id"
      item-title="name"
      item-value="id"
      selection-type="leaf"
      v-model="selected"
    )
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type { TreeItem } from './contract'

const props = defineProps<{
  categorias: TreeItem[]
}>()

const emit = defineEmits<{
  (e: 'change', categoriaId: number | null): void
}>()

const selected = ref<number[]>([])

watch(selected, () => {
  emit('change', selected.value[0] ?? null)
})
</script>
