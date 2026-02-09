<template lang="pug">
v-card
  v-card-title.d-flex.justify-space-between.align-center
    slot(name="title")
    v-btn(
      color="primary"
      prepend-icon="mdi-plus"
      @click="$emit('add')"
    )
      | Nuevo

  v-divider

  v-data-table(
    :headers="headers"
    :items="items"
    item-key="key"
  )
    template(
      v-for="header in headers"
        #[`item.${header.key}`]="{ item }"
      )
      slot(
        :name="header.key"
        :item="item"
      )
    template(#item.actions="{ item }")
    v-btn(
        icon
        size="small"
        color="primary"
        @click="$emit('edit', item)"
    )
        v-icon mdi-pencil

    v-btn(
        icon
        size="small"
        color="error"
        @click="$emit('delete', item)"
    )
        v-icon mdi-delete
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { Tuple, TableHeader } from '@/contracts/entityTable'

export default defineComponent({
  name: 'MyEntityTable',
  props: {
    headers: {
      type: Array as PropType<TableHeader[]>,
      required: true,
    },
    items: {
      type: Array as PropType<Tuple[]>,
      required: true,
    },
  },
  emits: ['add', 'edit', 'delete']
})
</script>
