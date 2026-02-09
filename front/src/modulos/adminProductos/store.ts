import { defineStore } from 'pinia';
import { ref } from 'vue';
import { serviceProductos, serviceCategorias } from './service';
import type { Producto, Categoria } from './types';

export const useAdminProductosStore = defineStore('adminProductos', () => {
  // --- ESTADO (Solo Datos Crudos) ---
  const productos = ref<Producto[]>([]);
  const totalProductos = ref(0);
  const loading = ref(false);
  const arbolCategorias = ref<Categoria[]>([]);

  // --- ACCIONES (Solo Lógica de Negocio y Persistencia) ---

  /**
   * Carga el árbol de categorías jerárquico
   */
  async function fetchArbolCategorias() {
    arbolCategorias.value = await serviceCategorias.getArbolCategorias();
  }

  /**
   * Carga productos basados en parámetros externos (UI)
   */
  async function fetchProductos(categoriaId: number, page: number, limit: number) {
    loading.value = true;
    try {
      const response = await serviceProductos.getListaPaginada(page, limit, categoriaId);
      productos.value = response.items;
      totalProductos.value = response.total;
    } finally {
      loading.value = false;
    }
  }

  /**
   * Centraliza la creación y actualización
   */
  async function guardarProducto(payload: Partial<Producto>) {
    loading.value = true;
    try {
      if (payload.idProducto) {
        await serviceProductos.actualizarProducto(payload.idProducto, payload);
      } else {
        await serviceProductos.crearProducto(payload as any);
      }
    } finally {
      loading.value = false;
    }
  }

  /**
   * Acción para eliminación física
   */
  async function eliminarProducto(id: number) {
    loading.value = true;
    try {
      await serviceProductos.eliminarProducto(id);
    } finally {
      loading.value = false;
    }
  }

  return {
    // Estado
    productos,
    totalProductos,
    loading,
    arbolCategorias,
    // Acciones
    fetchArbolCategorias,
    fetchProductos,
    guardarProducto,
    eliminarProducto
  };
});