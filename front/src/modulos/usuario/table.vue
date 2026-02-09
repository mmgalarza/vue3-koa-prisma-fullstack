<template lang="pug">
  v-container(fluid).fill-height.align-start
    //- Centramos el contenido y limitamos el ancho máximo para que no "vuele" en monitores ultrawide
    v-sheet.mx-auto(max-width="1400" width="100%" color="transparent")
      
      //- Cabecera y Filtros
      v-row.mb-6.align-center
        v-col(cols="12" lg="4")
          h1.text-h4.font-weight-bold Gestión de Usuarios
          p.text-subtitle-2.text-grey Administra las cuentas y perfiles de clientes
        
        v-spacer.hidden-md-and-down

        v-col(cols="12" sm="7" lg="4")
          v-text-field(
            v-model="filters.search"
            label="Buscar usuario..."
            prepend-inner-icon="mdi-magnify"
            variant="solo"
            flat
            bg-color="grey-lighten-4"
            density="comfortable"
            hide-details
            clearable
            @update:model-value="onFilterChange"
          )
        
        v-col(cols="12" sm="5" lg="2")
          v-select(
            v-model="filters.activo"
            label="Estado"
            :items="statusOptions"
            variant="solo"
            flat
            bg-color="grey-lighten-4"
            density="comfortable"
            hide-details
            @update:model-value="onFilterChange"
          )

      //- Tabla de Datos con elevación sutil y bordes redondeados
      v-card.rounded-lg(elevation="1" border)
        v-data-table(
          :headers="headers"
          :items="store.list"
          :loading="store.loading"
          hover
          density="comfortable"
        )
          //- Slot: Rol
          template(v-slot:item.rol="{ item }")
            v-chip(
              :color="item.rol === 'ADMIN' ? 'purple-darken-1' : 'blue-darken-1'"
              size="x-small"
              variant="flat"
              label
              class="text-uppercase font-weight-bold"
            ) {{ item.rol }}

          //- Slot: Estado (Icono con texto para mejor legibilidad)
          template(v-slot:item.activo="{ item }")
            div.d-flex.align-center
              v-icon(
                :color="item.activo ? 'success' : 'error'"
                size="18"
                class="me-2"
              ) {{ item.activo ? 'mdi-check-circle' : 'mdi-minus-circle' }}
              span.text-caption {{ item.activo ? 'Activo' : 'Inactivo' }}

          //- Slot: Cliente (Subtipo)
          template(v-slot:item.cliente="{ item }")
            v-tooltip(v-if="item.cliente" location="top")
              template(v-slot:activator="{ props }")
                v-chip(v-bind="props" color="teal-lighten-5" text-color="teal-darken-3" size="x-small" variant="flat") 
                  v-icon(start size="12") mdi-account-tie
                  | CLIENTE
              span {{ item.cliente.ciudad }}, {{ item.cliente.pais }}
            span(v-else).text-caption.text-disabled -

          //- Slot: Acciones (Botones con tooltip para que no se vea vacío)
          template(v-slot:item.actions="{ item }")
            div.d-flex.justify-end.ga-2
              v-btn(
                icon="mdi-pencil-outline"
                variant="tonal"
                color="primary"
                size="x-small"
                @click="editUser(item)"
              )
              v-btn(
                icon="mdi-delete-outline"
                variant="tonal"
                color="error"
                size="x-small"
                @click="confirmDelete(item)"
              )

    //- Dialogo de Confirmación de Borrado
    v-dialog(v-model="dialogDelete" max-width="400" persistent)
      v-card.rounded-xl.pa-4
        v-card-title.text-h5.d-flex.align-center
          v-icon(color="error" class="me-3") mdi-alert-octagon
          | ¿Confirmar eliminación?
        v-card-text.text-body-1
          | Estás a punto de borrar al usuario 
          strong.text-primary {{ selectedUser?.username }}
          | . Todos sus datos asociados se perderán.
        v-card-actions
          v-spacer
          v-btn(variant="text" rounded="lg" @click="dialogDelete = false") Cancelar
          v-btn(color="error" variant="flat" rounded="lg" @click="doDelete" :loading="store.loading") Sí, eliminar
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import { useUsuarioStore } from './store'
import type { Usuario, UsuarioFilters } from './contract'
import { useRouter } from 'vue-router'

const store = useUsuarioStore()
const router = useRouter()

// --- Estado local ---
const dialogDelete = ref(false)
const selectedUser = ref<Usuario | null>(null)

const filters = reactive<UsuarioFilters>({
  search: '',
  activo: undefined
})

const statusOptions = [
  { title: 'Todos', value: undefined },
  { title: 'Activos', value: true },
  { title: 'Inactivos', value: false }
]

const headers = [
  { title: 'ID', key: 'idUsuario', align: 'start' },
  { title: 'Email', key: 'email' },
  { title: 'Rol', key: 'rol' },
  { title: 'Tipo', key: 'cliente', sortable: false },
  { title: 'Estado', key: 'activo' },
  { title: 'Acciones', key: 'actions', sortable: false, align: 'end' }
] as const

// --- Lógica ---
const onFilterChange = () => {
  store.getAll(filters)
}

const editUser = (user: Usuario) => {
  router.push(`/usuarios/${user.idUsuario}/edit`)
}

const confirmDelete = (user: Usuario) => {
  selectedUser.value = user
  dialogDelete.value = true
}

const doDelete = async () => {
  if (selectedUser.value) {
    await store.remove(selectedUser.value.idUsuario)
    dialogDelete.value = false
  }
}

onMounted(() => {
  store.getUsers()
})
</script>