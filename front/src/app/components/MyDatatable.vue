<template lang="pug">
v-card
  v-card-title.d-flex.align-center.justify-space-between
    span.text-h6 Clientes
    v-btn(color="primary" prepend-icon="mdi-plus" @click="onAdd")
      | Nuevo cliente

  v-divider

  v-data-table(
    :headers="headers"
    :items="clientes"
    item-key="id"
    class="elevation-1"
  )
    template(#item.avatar="{ item }")
      v-avatar(size="40")
        v-img(:src="item.avatar")

    template(#item.actions="{ item }")
      v-btn(
        icon
        size="small"
        color="primary"
        @click="onEdit(item)"
      )
        v-icon mdi-pencil

      v-btn(
        icon
        size="small"
        color="error"
        @click="onDelete(item)"
      )
        v-icon mdi-delete
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { Cliente } from '@/contracts/cliente'

interface Headers {
  text: string
  value: string
  align?: string
  sortable?: boolean
  width?: string
}

export default defineComponent({
  name: 'ClientesTable',
  emits: ['add', 'edit', 'delete'],
  props: {
    headers: {
      type: Array as () => Array<Headers>,
      required: true,
    },
    clientes: {
        type: Array as () => Cliente[],
        required: true,
    },
  },
  setup(_, { emit }) {
 
    const onAdd = () => {
      emit('add')
    }

    const onEdit = (cliente: Cliente) => {
      emit('edit', cliente)
    }

    const onDelete = (cliente: Cliente) => {
        emit('delete', cliente)
    }

    return {
      headers,
      clientes,
      onAdd,
      onEdit,
      onDelete,
    }
  },
})
</script>
