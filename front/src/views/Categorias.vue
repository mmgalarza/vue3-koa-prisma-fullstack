<template lang="pug">
v-container
  //- Header
  v-row
    v-col(cols="12" class="d-flex align-center justify-space-between")
      h3 Categorías
      v-btn(color="primary" variant="tonal" @click="openCreateRecord")
        v-icon(left) mdi-plus
        | Nueva Categoría

  //- Tabla
  v-row
    v-col(cols="12")
      v-data-table(
        :headers="headers"
        :items="categorias"
        item-value="idCategoria"
      )
        template(v-slot:item.activo="{ item }")
          v-chip(
            :color="item.activo ? 'green' : 'red'"
            size="small"
            variant="tonal"
          )
            | {{ item.activo ? 'Activo' : 'Inactivo' }}

        template(v-slot:item.actions="{ item }")
          v-btn(
            icon
            size="small"
            color="primary"
            variant="tonal"
            @click="openEditRecord(item)"
          )
            v-icon mdi-pencil
          v-btn(
            icon
            size="small"
            color="error"
            variant="tonal"
            @click="dlgConfirmDelete = true; selectedItem = item"
          )
            v-icon mdi-delete

  //- Dialog confirmar eliminación
  v-dialog(v-model="dlgConfirmDelete" max-width="420" persistent)
    v-card
      v-card-title Confirmar eliminación
      v-card-text
        | ¿Seguro que deseas eliminar la categoría 
        strong {{ selectedItem?.nombre }}?
      v-card-actions
        v-spacer
        v-btn(variant="text" @click="dlgConfirmDelete = false") Cancelar
        v-btn(
          color="error"
          variant="tonal"
          @click="deleteCategoria(selectedItem?.idCategoria ?? 0)"
        ) Confirmar

  //- Dialog crear / editar
  v-dialog(v-model="dlgCRUD" max-width="500" persistent)
    v-card
      v-card-title {{ isEditing ? 'Editar Categoría' : 'Crear Categoría' }}
      v-card-text

        v-text-field(
          label="Nombre"
          v-model="record.nombre"
          :rules="checking('nombre')"
          required
        )

        v-textarea(
          label="Descripción"
          v-model="record.descripcion"
          :rules="checking('descripcion')"
          counter="150"
          rows="2"
        )

        v-switch(
          v-if="isEditing"
          v-model="record.activo"
          label="Activo"
        )

      v-card-actions
        v-spacer
        v-btn(variant="text" @click="dlgCRUD = false") Cancelar
        v-btn(color="primary" @click="saveRecord") Guardar

  //- Snackbar
  v-snackbar(v-model="snackbar")
    | {{ snackbarMessage }}
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { categoriasService } from '@/services/categorias.service'
import type {
  CategoriaListDto,
  CreateCategoriaDto,
  UpdateCategoriaDto
} from '@/contracts/dtos'

// ==============================
// Contexto Empresa Activa (temporal)
// ==============================
const empresaActivaId = ref<number>(1)

// ==============================
// State
// ==============================
const categorias = ref<CategoriaListDto[]>([])
const record = ref<Partial<CreateCategoriaDto & { idCategoria?: number }>>({})
const selectedItem = ref<CategoriaListDto | null>(null)

const dlgCRUD = ref(false)
const dlgConfirmDelete = ref(false)
const isEditing = ref(false)

// ==============================
// Feedback
// ==============================
const snackbar = ref(false)
const snackbarMessage = ref('')

// ==============================
// Headers tabla
// ==============================
const headers = [
  { title: 'ID', key: 'idCategoria' },
  { title: 'Nombre', key: 'nombre' },
  { title: 'Descripción', key: 'descripcion' },
  { title: 'Activo', key: 'activo' },
  { title: 'Acciones', key: 'actions' }
]

// ==============================
// Validaciones
// ==============================
const checking = (field: string) => {
  const rules: Record<string, Array<(v: any) => boolean | string>> = {
    nombre: [
      (v: string) => !!v || 'El nombre es obligatorio',
      (v: string) => v.length <= 80 || 'Máximo 80 caracteres'
    ],
    descripcion: [
      (v: string) => !v || v.length <= 150 || 'Máximo 150 caracteres'
    ]
  }
  return rules[field] || []
}

// ==============================
// Loaders
// ==============================
const loadCategorias = async (filters?: { activo?: boolean }) => {
  try {
    const params = { ...filters, idEmpresa: empresaActivaId.value }
    categorias.value = await categoriasService.getAll(params)
  } catch (e) {
    snackbarMessage.value = 'Error cargando categorías'
    snackbar.value = true
    console.error(e)
  }
}

// ==============================
// CRUD Actions
// ==============================
const openCreateRecord = () => {
  record.value = {
    nombre: '',
    descripcion: '',
    activo: true,
    idEmpresa: empresaActivaId.value
  }
  isEditing.value = false
  dlgCRUD.value = true
}

const openEditRecord = (item: CategoriaListDto) => {
  record.value = {
    idCategoria: item.idCategoria,
    nombre: item.nombre,
    descripcion: item.descripcion,
    activo: item.activo,
    idEmpresa: item.idEmpresa
  }
  isEditing.value = true
  dlgCRUD.value = true
}

const saveRecord = async () => {
  try {
    // Blindaje empresa
    record.value.idEmpresa = empresaActivaId.value

    if (isEditing.value && record.value.idCategoria) {
      await categoriasService.update(
        record.value.idCategoria,
        record.value as UpdateCategoriaDto
      )
      snackbarMessage.value = 'Categoría actualizada'
    } else {
      await categoriasService.create(
        record.value as CreateCategoriaDto
      )
      snackbarMessage.value = 'Categoría creada'
    }

    dlgCRUD.value = false
    await loadCategorias()
    snackbar.value = true
  } catch (e) {
    snackbarMessage.value = 'Error guardando categoría'
    snackbar.value = true
    console.error(e)
  }
}

const deleteCategoria = async (id: number) => {
  try {
    await categoriasService.remove(id)
    dlgConfirmDelete.value = false
    snackbarMessage.value = 'Categoría eliminada'
    await loadCategorias()
    snackbar.value = true
  } catch (e) {
    snackbarMessage.value = 'Error eliminando categoría'
    snackbar.value = true
    console.error(e)
  }
}

// ==============================
// Lifecycle
// ==============================
onMounted(() => {
  loadCategorias()
})
</script>
