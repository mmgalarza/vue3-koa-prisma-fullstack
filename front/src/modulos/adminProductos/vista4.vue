<template lang="pug">
v-container(fluid)
  v-row
    //--- Columna Izquierda: Árbol de Navegación ---
    v-col(cols="12" md="3")
      v-card(flat border height="85vh" class="d-flex flex-column")
        v-toolbar(density="compact" color="surface" border="bottom")
          v-toolbar-title.text-subtitle-2.font-weight-bold CATEGORÍAS
          v-spacer
          v-btn(icon="mdi-refresh" size="x-small" @click="cargarArbol" :loading="store.loading")

        v-card-text.pa-0.flex-grow-1.overflow-y-auto
          v-list(v-model:opened="opened" density="compact" nav)
            // Nivel 1: Familias
            v-list-group(v-for="familia in store.arbolCategorias" :key="familia.idCategoria" :value="familia.idCategoria")
              template(v-slot:activator="{ props }")
                v-list-item(v-bind="props" prepend-icon="mdi-folder-outline" :title="familia.nombre")

              // Nivel 2: Madres
              v-list-group(v-for="madre in familia.subcategorias" :key="madre.idCategoria" :value="madre.idCategoria")
                template(v-slot:activator="{ props }")
                  v-list-item(v-bind="props" prepend-icon="mdi-subdirectory-arrow-right" :title="madre.nombre")

                // Nivel 3: Hijas (Acción Final que dispara el filtro)
                v-list-item(
                  v-for="hija in madre.subcategorias"
                  :key="hija.idCategoria"
                  :value="hija.idCategoria"
                  :active="ui.hijaId === hija.idCategoria"
                  prepend-icon="mdi-tag-outline"
                  :title="hija.nombre"
                  @click="seleccionarHija(hija)"
                  color="primary"
                )

    //--- Columna Derecha: Tabla de Productos ---
    v-col(cols="12" md="9")
      v-card(flat border v-if="categoriaSeleccionada" height="85vh" class="d-flex flex-column")
        v-card-title.d-flex.align-center.py-3
          div
            .text-caption.text-uppercase.text-grey-darken-1.ls-tight {{ rutaBreadcrumb }}
            .text-h6.font-weight-bold {{ categoriaSeleccionada.nombre }}
          v-spacer
          v-btn(color="primary" prepend-icon="mdi-plus" @click="nuevoProducto" elevation="0") Nuevo Producto

        v-divider

        //- Contenedor de tabla con scroll independiente
        div.flex-grow-1.overflow-y-auto
          v-data-table-server(
            v-model:items-per-page="ui.limit"
            v-model:page="ui.page"
            :headers="headers"
            :items="store.productos"
            :items-length="store.totalProductos"
            :loading="store.loading"
            density="comfortable"
            hover
            @update:options="onTableUpdate"
          )
            // Slot Imagen
            template(v-slot:item.imagen="{ item }")
              v-avatar(size="48" border rounded="lg" class="my-1")
                v-img(:src="item.imagenes?.[0]?.url || ''" cover)
                  template(v-slot:placeholder)
                    v-row.fill-height.ma-0(align="center" justify="center")
                      v-icon(color="grey-lighten-2") mdi-image-off

            // Slot Precios
            template(v-slot:item.precios="{ item }")
              span.font-weight-bold.text-primary {{ formatCurrency(item.precios) }}

            // Slot Stock (con indicador de color)
            template(v-slot:item.stock="{ item }")
              v-chip(:color="item.stock > 0 ? 'success' : 'error'" size="x-small" label font-weight-bold)
                | {{ item.stock }} un.

            // Slot Acciones (CRUD)
            template(v-slot:item.actions="{ item }")
              .d-flex.ga-1.justify-end
                v-btn(icon="mdi-pencil-outline" size="x-small" variant="tonal" color="info" @click="editarProducto(item)")
                v-btn(icon="mdi-delete-outline" size="x-small" variant="tonal" color="error" @click="abrirConfirmacionEliminar(item)")

      //--- Estado Inicial (Sin selección) ---
      v-card(flat border v-else height="85vh").d-flex.flex-column.align-center.justify-center.bg-grey-lighten-4
        v-icon(size="100" color="grey-lighten-2") mdi-tray-full
        .text-h6.text-grey.mt-4 Seleccione una categoría final
        .text-body-2.text-grey-darken-1 Navegue por el árbol para gestionar los productos vinculados

  //--- Diálogo de Edición/Creación ---
  v-dialog(v-model="ui.dialogo" max-width="650px" persistent)
    v-card(rounded="xl")
      v-toolbar(:color="ui.editando ? 'info' : 'primary'" density="comfortable")
        v-toolbar-title.text-body-1.font-weight-bold 
          | {{ ui.editando ? 'Modificar Producto' : 'Registrar Nuevo Producto' }}
        v-spacer
        v-btn(icon="mdi-close" @click="ui.dialogo = false")

      v-card-text.pa-6
        v-form(ref="formRef")
          v-row(dense)
            v-col(cols="12")
              v-text-field(
                v-model="productoForm.nombre" 
                label="Nombre del Producto" 
                variant="outlined" 
                density="comfortable"
                required
              )
            v-col(cols="6")
              v-text-field(
                v-model.number="productoForm.precios" 
                label="Precio Venta" 
                prefix="$" 
                type="number" 
                variant="outlined" 
                density="comfortable"
              )
            v-col(cols="6")
              v-text-field(
                v-model.number="productoForm.stock" 
                label="Stock Inicial" 
                type="number" 
                variant="outlined" 
                density="comfortable"
              )
            v-col(cols="12")
              v-textarea(
                v-model="productoForm.descripcion" 
                label="Descripción detallada" 
                variant="outlined" 
                rows="3"
                hide-details
              )
      
      v-divider
      v-card-actions.pa-4
        v-spacer
        v-btn(variant="text" @click="ui.dialogo = false") Cancelar
        v-btn(
          :color="ui.editando ? 'info' : 'primary'" 
          variant="elevated" 
          :loading="store.loading" 
          @click="guardarProducto"
          prepend-icon="mdi-check"
        ) {{ ui.editando ? 'Actualizar' : 'Crear Producto' }}

  //- Template: Diálogo de Confirmación UI
  v-dialog(v-model="ui.dialogoEliminar" max-width="400px")
    v-card(rounded="lg")
      v-card-text.text-center.pa-6
        v-icon(color="error" size="64" class="mb-3") mdi-alert-decagram-outline
        .text-h6.font-weight-bold ¿Confirmar eliminación?
        .text-body-2.text-grey Estás a punto de borrar permanentemente:
        .text-subtitle-1.font-weight-black.mt-2 "{{ productoAEliminar?.nombre }}"
      v-card-actions.pa-4
        v-spacer
        v-btn(variant="text" color="grey" @click="ui.dialogoEliminar = false") Cancelar
        v-btn(color="error" variant="elevated" :loading="store.loading" @click="ejecutarEliminacion") Eliminar Producto        
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useAdminProductosStore } from './store';
import type { Categoria, Producto } from './types';

const store = useAdminProductosStore();

// Estado UI (Local a la vista)
const ui = ref({
  page: 1,
  limit: 10,
  hijaId: null as number | null,
  dialogo: false,
  editando: false,
  dialogoEliminar: false
});

const opened = ref([]);
const categoriaSeleccionada = ref<Categoria | null>(null);
const productoForm = ref<Partial<Producto>>({});

const headers = [
  { title: 'Imagen', key: 'imagen', sortable: false, width: '80px' },
  { title: 'Producto', key: 'nombre', align: 'start' as const },
  { title: 'Precio', key: 'precios', align: 'end' as const, width: '120px' },
  { title: 'Existencia', key: 'stock', align: 'center' as const, width: '100px' },
  { title: '', key: 'actions', sortable: false, align: 'end' as const, width: '100px' },
];

const rutaBreadcrumb = computed(() => {
  if (!categoriaSeleccionada.value) return '';
  return `Administración > Productos > ${categoriaSeleccionada.value.nombre}`;
});

const formatCurrency = (val: number) => 
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(val);

// --- Lógica de Comunicación con Store ---

const cargarArbol = () => store.fetchArbolCategorias();

// Función central de filtrado: Se activa al cambiar página o seleccionar categoría
const refreshList = async () => {
  if (ui.value.hijaId) {
    await store.fetchProductos(ui.value.hijaId, ui.value.page, ui.value.limit);
  }
};

const onTableUpdate = async ({ page, itemsPerPage }: any) => {
  ui.value.page = page;
  ui.value.limit = itemsPerPage;
  await refreshList();
};

const seleccionarHija = (hija: Categoria) => {
  categoriaSeleccionada.value = hija;
  ui.value.hijaId = hija.idCategoria;
  ui.value.page = 1; // Siempre resetear a pág 1 en nuevo filtro
  refreshList();
};

// --- Acciones CRUD ---

const nuevoProducto = () => {
  productoForm.value = { 
    nombre: '', 
    precios: 0, 
    stock: 0, 
    descripcion: '',
    idCategoria: ui.value.hijaId || 0
  };
  ui.value.editando = false;
  ui.value.dialogo = true;
};

const editarProducto = (item: Producto) => {
  productoForm.value = { ...item };
  ui.value.editando = true;
  ui.value.dialogo = true;
};

const guardarProducto = async () => {
  // Asegurar que el producto nuevo herede la categoría actual del filtro
  if (!ui.value.editando) {
    productoForm.value.idCategoria = ui.value.hijaId!;
  }
  
  await store.guardarProducto(productoForm.value);
  ui.value.dialogo = false;
  await refreshList();
};


onMounted(() => {
  cargarArbol();
});

// Script: Controladores de la UI
const productoAEliminar = ref<Producto | null>(null);

const abrirConfirmacionEliminar = (item: Producto) => {
  productoAEliminar.value = item;
  ui.value.dialogoEliminar = true;
};

const ejecutarEliminacion = async () => {
  if (!productoAEliminar.value) return;
  
  await store.eliminarProducto(productoAEliminar.value.idProducto);
  ui.value.dialogoEliminar = false;
  productoAEliminar.value = null;
  
  // Refrescar lista con los parámetros de la UI
  await store.fetchProductos(ui.value.hijaId!, ui.value.page, ui.value.limit);
};
</script>

<style scoped>
.ls-tight { letter-spacing: 0.5px; }
</style>