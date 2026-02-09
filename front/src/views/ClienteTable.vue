<template lang="pug">
MyEntityTable(
  :headers="headers"
  :items="clientes"
  @add="onAdd"
  @edit="onEdit"
  @delete="onDelete"
)
  template(#avatar="{ item }")
    v-avatar(size="40")
      v-img(:src="item.avatar")

  template(#nombre="{ item }")
    span {{ item.nombre }}

  template(#email="{ item }")
    span {{ item.email }}
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MyEntityTable from '@/components/MyEntityTable.vue'
import type { Tuple } from '@/contracts/entityTable'

export default defineComponent({
  name: 'ClientesTable',
  components: { MyEntityTable },
  setup() {
    const headers = [
      { key: 'avatar', title: 'Cliente' },
      { key: 'nombre', title: 'Nombre' },
      { key: 'email', title: 'Email' },
      { key: 'actions', title: 'Acciones' },
    ]

    const clientes = ref<Tuple[]>([
      {
        key: 1,
        nombre: 'Juan Pérez',
        email: 'juan.perez@email.com',
        avatar: 'https://i.pravatar.cc/100?img=1',
      },
      {
        key: 2,
        nombre: 'María Gómez',
        email: 'maria.gomez@email.com',
        avatar: 'https://i.pravatar.cc/100?img=2',
      },
      {
        key: 3,
        nombre: 'Carlos Ruiz',
        email: 'carlos.ruiz@email.com',
        avatar: 'https://i.pravatar.cc/100?img=3',
      },
    ])

    const onAdd = () => {
      console.log('Añadir nuevo cliente')
    }

    const onEdit = (cliente: Tuple) => {
      console.log('Editar cliente', cliente)
    }

    const onDelete = (cliente: Tuple) => {
      console.log('Eliminar cliente', cliente)
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
