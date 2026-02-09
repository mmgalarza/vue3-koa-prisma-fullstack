<template lang="pug">
  v-container.fill-height.pa-0.bg-grey-lighten-5(fluid)
    v-row.fill-height(no-gutters)
      
      //- NAV LATERAL
      v-col.border-right.bg-white(cols="12" md="3")
        v-toolbar(color="primary" density="compact" dark)
          v-toolbar-title.text-subtitle-1 Estructura de Ventas
        
        v-list(density="compact" nav)
          v-list-item(
            prepend-icon="mdi-database-outline"
            title="Catálogo Raíz"
            :active="activeContext.id === 'root'"
            @click="setContext({ id: 'root', nombre: 'Catálogo Raíz', tipo: null })"
            color="primary"
            rounded="lg"
          )

          v-divider.my-2

          v-list-group(v-for="familia in store.familias" :key="familia.idCategoria")
            template(v-slot:activator="{ props }")
              v-list-item(
                v-bind="props"
                :prepend-icon="familia.icono || 'mdi-folder'"
                :title="familia.nombre"
                @click="setContext(familia)"
              )

            v-list-item(
              v-for="madre in familia.subcategorias"
              :key="madre.idCategoria"
              :title="madre.nombre"
              prepend-icon="mdi-subdirectory-arrow-right"
              @click="setContext(madre)"
              :active="activeContext.idCategoria === madre.idCategoria"
              color="secondary"
            )

      //- PANEL DE GESTIÓN
      v-col(cols="12" md="9")
        v-toolbar.border-bottom.bg-white(flat)
          v-btn(
            v-if="activeContext.id !== 'root'"
            icon="mdi-chevron-left"
            variant="text"
            @click="setContext({ id: 'root', nombre: 'Catálogo Raíz' })"
          )
          v-toolbar-title.font-weight-bold.text-body-1 {{ panelTitle }}
          v-spacer
          v-btn(
            v-if="activeContext.tipo !== 'HIJA'"
            color="primary"
            prepend-icon="mdi-plus"
            @click="prepararNuevo"
          ) Nuevo

        v-container(fluid)
          v-progress-linear(v-if="store.loading" indeterminate color="primary")

          v-row(v-if="childrenItems.length > 0")
            v-col(v-for="item in childrenItems" :key="item.idCategoria" cols="12" sm="6" lg="4")
              v-card(border flat rounded="lg")
                v-item-group
                  v-card-item
                    template(v-slot:prepend)
                      v-avatar(color="grey-lighten-4" size="40")
                        v-icon(:icon="item.icono || 'mdi-tag'" color="primary")
                    v-card-title.text-body-2.font-weight-bold {{ item.nombre }}
                    v-card-subtitle {{ item.tipo === 'HIJA' ? 'FINAL' : item.tipo }}

                v-card-text.text-caption.text-grey-darken-1(style="height: 50px;")
                  | {{ item.descripcion || 'Sin descripción adicional.' }}

                v-divider
                
                v-card-actions.bg-grey-lighten-5
                  v-btn(
                    v-if="item.tipo !== 'HIJA'"
                    size="small"
                    variant="tonal"
                    color="primary"
                    @click="setContext(item)"
                  ) Gestionar
                  v-spacer
                  v-btn(icon="mdi-pencil" size="x-small" variant="text" @click="prepararEdicion(item)")
                  v-btn(icon="mdi-delete" size="x-small" variant="text" color="error" @click="prepararEliminar(item)")

          v-empty-state(
            v-else-if="!store.loading"
            icon="mdi-text-box-search-outline"
            title="Nivel vacío"
            text="No hay elementos registrados en este nivel jerárquico."
          )
            template(v-slot:actions)
              v-btn(color="primary" variant="outlined" @click="prepararNuevo") Crear primer elemento

    //- DIALOGO CRUD
    v-dialog(v-model="dialog" max-width="500" persistent)
      v-card(rounded="xl")
        v-card-title.pa-6.font-weight-bold
          | {{ isEditing ? 'Editar' : 'Crear' }} {{ form.tipo }}
        v-card-text.px-6
          v-text-field.mb-2(
            v-model="form.nombre"
            label="Nombre de la categoría"
            variant="outlined"
            placeholder="Ej: Calzado Deportivo"
          )
          v-textarea(
            v-model="form.descripcion"
            label="Descripción"
            variant="outlined"
            rows="3"
            placeholder="Detalles sobre este grupo..."
          )
          v-alert.mt-2.text-caption(
            v-if="activeContext.id !== 'root'"
            density="compact"
            color="info"
            variant="tonal"
            icon="mdi-information"
          )
            | Se guardará dentro de: 
            strong {{ activeContext.nombre }}
        
        v-card-actions.pa-6
          v-spacer
          v-btn(variant="text" @click="dialog = false" :disabled="loadingAction") Cerrar
          v-btn(color="primary" variant="flat" :loading="loadingAction" @click="ejecutarGuardar")
            | {{ isEditing ? 'Actualizar' : 'Guardar' }}

    //- DIALOGO ELIMINAR
    v-dialog(v-model="deleteDialog" max-width="400")
      v-card.pa-2(rounded="xl")
        v-card-title.d-flex.align-center
          v-icon.mr-3(color="error") mdi-alert-circle-outline
          | Confirmar eliminación
        v-card-text(v-if="itemToDelete")
          | ¿Estás seguro de que deseas eliminar permanentemente 
          strong {{ itemToDelete.nombre }}
          | ?
          .mt-2.text-error.font-weight-bold(v-if="itemToDelete.subcategorias?.length")
            | Aviso: Se eliminarán también todas sus subcategorías.
        v-card-actions.pa-4
          v-spacer
          v-btn(variant="text" @click="deleteDialog = false" :disabled="loadingDelete") Cancelar
          v-btn(color="error" variant="flat" :loading="loadingDelete" @click="ejecutarEliminar") Eliminar
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useCategoriasStore } from './store'
import type { Categoria, CategoriaTipo } from './types'

const store = useCategoriasStore()

// --- ESTADO DE NAVEGACIÓN ---
const activeContext = ref<any>({ id: 'root', nombre: 'Catálogo Raíz', tipo: null })

// --- ESTADO FORMULARIO ---
const dialog = ref(false)
const isEditing = ref(false)
const selectedId = ref<number | null>(null)
const loadingAction = ref(false)

const form = ref({
  nombre: '',
  descripcion: '',
  icono: 'mdi-tag',
  tipo: 'FAMILIA' as CategoriaTipo,
  idCategoriaPadre: null as number | null
})

onMounted(() => store.fetchTree())

// --- LÓGICA DE CONTEXTO ---
const setContext = (node: any) => {
  activeContext.value = node
}

const childrenItems = computed(() => {
  if (activeContext.value.id === 'root') return store.familias
  const found = store.findInTree(activeContext.value.idCategoria)
  return found?.subcategorias || []
})

const panelTitle = computed(() => {
  if (activeContext.value.id === 'root') return 'Familias'
  if (activeContext.value.tipo === 'FAMILIA') return `${activeContext.value.nombre}`
  if (activeContext.value.tipo === 'MADRE') return `${activeContext.value.nombre}`
  return `Detalle de ${activeContext.value.nombre}`
})

// --- MANEJADORES DE EVENTOS ---

const prepararNuevo = () => {
  isEditing.value = false
  selectedId.value = null
  
  // Lógica de herencia de tipo
  let tipoSiguiente: CategoriaTipo = 'FAMILIA'
  if (activeContext.value.tipo === 'FAMILIA') tipoSiguiente = 'MADRE'
  if (activeContext.value.tipo === 'MADRE') tipoSiguiente = 'HIJA'

  form.value = {
    nombre: '',
    descripcion: '',
    icono: 'mdi-tag',
    tipo: tipoSiguiente,
    idCategoriaPadre: activeContext.value.id === 'root' ? null : activeContext.value.idCategoria
  }
  dialog.value = true
}

const prepararEdicion = (item: Categoria) => {
  isEditing.value = true
  selectedId.value = item.idCategoria
  form.value = {
    nombre: item.nombre,
    descripcion: item.descripcion || '',
    icono: item.icono || 'mdi-tag',
    tipo: item.tipo,
    idCategoriaPadre: item.idCategoriaPadre
  }
  dialog.value = true
}

const ejecutarGuardar = async () => {
  loadingAction.value = true
  try {
    if (isEditing.value && selectedId.value) {
      await store.updateCategoria(selectedId.value, form.value)
    } else {
      await store.createCategoria(form.value)
    }
    dialog.value = false
  } catch (e) {
    alert("Error al procesar la solicitud")
  } finally {
    loadingAction.value = false
  }
}

// --- ESTADO PARA ELIMINACIÓN ---
const deleteDialog = ref(false)
const itemToDelete = ref<Categoria | null>(null)
const loadingDelete = ref(false)

/**
 * Abre el diálogo y prepara el item
 */
const prepararEliminar = (item: Categoria) => {
  itemToDelete.value = item
  deleteDialog.value = true
}

/**
 * Ejecuta la llamada al store
 */
const ejecutarEliminar = async () => {
  if (!itemToDelete.value) return
  
  loadingDelete.value = true
  try {
    await store.removeCategoria(itemToDelete.value.idCategoria, true)
    deleteDialog.value = false
    itemToDelete.value = null
  } catch (e) {
    alert("Error: Compruebe si la categoría tiene productos asociados.")
  } finally {
    loadingDelete.value = false
  }
}

</script>


<style scoped>
.border-right {
  border-right: 1px solid rgba(0, 0, 0, 0.12) !important;
}
.border-bottom {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
}
</style>