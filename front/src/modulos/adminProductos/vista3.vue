<template lang="pug">
v-container(fluid)
  v-row
    //--- Columna Izquierda: Árbol de Navegación ---
    v-col(cols="12" md="3")
      v-card(flat border height="80vh" class="overflow-y-auto")
        v-toolbar(density="compact" color="transparent")
          v-toolbar-title.text-subtitle-1 Categorías
          v-btn(icon="mdi-refresh" size="small" @click="cargarArbol")

        v-divider

        v-list(v-model:opened="opened" density="compact" nav)
          // Nivel 1: Familias
          v-list-group(v-for="familia in store.arbolCategorias" :key="familia.idCategoria" :value="familia.idCategoria")
            template(v-slot:activator="{ props }")
              v-list-item(v-bind="props" prepend-icon="mdi-folder-outline" :title="familia.nombre")

            // Nivel 2: Madres
            v-list-group(v-for="madre in familia.subcategorias" :key="madre.idCategoria" :value="madre.idCategoria")
              template(v-slot:activator="{ props }")
                v-list-item(v-bind="props" prepend-icon="mdi-subdirectory-arrow-right" :title="madre.nombre")

              // Nivel 3: Hijas (Acción Final)
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
      v-card(flat border v-if="categoriaSeleccionada")
        v-card-title.d-flex.align-center
          div
            .text-caption.text-uppercase.text-grey {{ rutaBreadcrumb }}
            span {{ categoriaSeleccionada.nombre }}
          v-spacer
          v-btn(color="primary" prepend-icon="mdi-plus" @click="nuevoProducto") Nuevo Producto

        v-divider

        v-data-table-server(
          v-model:items-per-page="ui.limit"
          v-model:page="ui.page"
          :headers="headers"
          :items="store.productos"
          :items-length="store.totalProductos"
          :loading="store.loading"
          @update:options="onTableUpdate"
        )
          // Slots
          template(v-slot:item.imagen="{ item }")
            v-avatar(size="40" border rounded)
              v-img(:src="item.imagenes?.[0]?.url || ''")
                template(v-slot:placeholder)
                  v-icon mdi-image-off

          template(v-slot:item.precios="{ item }")
            span.font-weight-bold {{ formatCurrency(item.precios) }}

          template(v-slot:item.actions="{ item }")
            .d-flex.ga-2
              v-btn(icon="mdi-pencil" size="small" variant="text" color="blue" @click="editarProducto(item)")
              v-btn(icon="mdi-delete" size="small" variant="text" color="red" @click="confirmarEliminar(item)")

      //--- Estado Inicial ---
      v-card(flat border v-else height="80vh").d-flex.flex-column.align-center.justify-center
        v-icon(size="80" color="grey-lighten-3") mdi-file-tree
        .text-h6.text-grey-lighten-1 Seleccione una categoría final para gestionar productos

  //--- Diálogo de Edición ---
  v-dialog(v-model="ui.dialogo" max-width="600px" persistent)
    v-card(:title="ui.editando ? 'Editar Producto' : 'Nuevo Producto'")
      v-card-text
        v-form(ref="formRef")
          v-text-field(v-model="productoForm.nombre" label="Nombre" variant="outlined")
          v-row
            v-col(cols="6")
              v-text-field(v-model.number="productoForm.precios" label="Precio" prefix="$" type="number" variant="outlined")
            v-col(cols="6")
              v-text-field(v-model.number="productoForm.stock" label="Stock" type="number" variant="outlined")
          v-textarea(v-model="productoForm.descripcion" label="Descripción" variant="outlined")
      v-card-actions
        v-spacer
        v-btn(text="Cancelar" @click="ui.dialogo = false")
        v-btn(color="primary" :loading="store.loading" @click="guardarProducto")
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useAdminProductosStore } from './store';
import type { Categoria, Producto } from './types';

const store = useAdminProductosStore();

// Estado UI (Estado local de la vista)
const ui = ref({
  page: 1,
  limit: 10,
  hijaId: null as number | null,
  dialogo: false,
  editando: false
});

const opened = ref([]);
const categoriaSeleccionada = ref<Categoria | null>(null);
const productoForm = ref<Partial<Producto>>({});

const headers = [
  { title: 'Imagen', key: 'imagen', sortable: false, width: '80px' },
  { title: 'Nombre', key: 'nombre' },
  { title: 'Precio', key: 'precios', align: 'end' as const },
  { title: 'Stock', key: 'stock', align: 'center' as const },
  { title: 'Acciones', key: 'actions', sortable: false, align: 'end' as const },
];

const rutaBreadcrumb = computed(() => {
  if (!categoriaSeleccionada.value) return '';
  return `Productos > ${categoriaSeleccionada.value.nombre}`;
});

const formatCurrency = (val: number) => 
  new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(val);

// Lógica de carga
const cargarArbol = () => store.fetchArbolCategorias();

const onTableUpdate = async ({ page, itemsPerPage }: any) => {
  ui.value.page = page;
  ui.value.limit = itemsPerPage;
  if (ui.value.hijaId) {
    await store.fetchProductos(ui.value.hijaId, ui.value.page, ui.value.limit);
  }
};

const seleccionarHija = (hija: Categoria) => {
  categoriaSeleccionada.value = hija;
  ui.value.hijaId = hija.idCategoria;
  ui.value.page = 1;
  store.fetchProductos(ui.value.hijaId, ui.value.page, ui.value.limit);
};

// Acciones CRUD
const nuevoProducto = () => {
  productoForm.value = { nombre: '', precios: 0, stock: 0, descripcion: '' };
  ui.value.editando = false;
  ui.value.dialogo = true;
};

const editarProducto = (item: Producto) => {
  productoForm.value = { ...item };
  ui.value.editando = true;
  ui.value.dialogo = true;
};

const guardarProducto = async () => {
  if (!ui.value.editando) {
    productoForm.value.idCategoria = ui.value.hijaId!;
  }
  await store.guardarProducto(productoForm.value);
  ui.value.dialogo = false;
  await store.fetchProductos(ui.value.hijaId!, ui.value.page, ui.value.limit);
};

const confirmarEliminar = async (item: Producto) => {
  if (confirm(`¿Está seguro de eliminar ${item.nombre}?`)) {
    await store.eliminarProducto(item.idProducto);
    await store.fetchProductos(ui.value.hijaId!, ui.value.page, ui.value.limit);
  }
};

onMounted(() => cargarArbol());
</script>