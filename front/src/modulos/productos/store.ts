import { defineStore } from 'pinia'
import type { Categoria, Producto, ProductoImagen, FiltrosProducto, TreeItem } from './contract'
import * as service from './service'

interface ProductosState {
  categorias: Categoria[]
  productos: Producto[]
  productoActual: Producto | null

  filtros: FiltrosProducto
  page: number
  limit: number
  total: number

  loading: boolean
  error: string | null
}

export const useProductosStore = defineStore('productos', {
  state: (): ProductosState => ({
    categorias: [],
    productos: [],
    productoActual: null,

    filtros: {},
    page: 1,
    limit: 12,
    total: 0,

    loading: false,
    error: null,
  }),

  getters: {
    categoriasTree: (s): TreeItem[] => mapCategoriasTree(s.categorias),

    hasProductos: (s) => s.productos.length > 0,
  },

  actions: {
    async cargarCategorias() {
      if (this.categorias.length) return
      this.categorias = await service.obtenerCategorias()
    },

    async cargarProductos() {
      this.loading = true
      this.error = null
      try {
        const res = await service.obtenerProductosPaginados({
          page: this.page,
          limit: this.limit,
          ...this.filtros,
        })
        this.productos = res.items
        this.total = res.total
      } catch {
        this.error = 'No se pudieron cargar los productos'
      } finally {
        this.loading = false
      }
    },

    async cargarProducto(id: number) {
      this.loading = true
      this.error = null
      try {
        const producto = await service.obtenerProducto(id)
        const imagenes = await service.obtenerImagenesProducto(id)
        this.productoActual = { ...producto, imagenes }
      } catch {
        this.error = 'No se pudo cargar el producto'
      } finally {
        this.loading = false
      }
    },

    setFiltros(filtros: FiltrosProducto) {
      this.filtros = filtros
      this.page = 1
      this.cargarProductos()
    },

    setPage(page: number) {
      this.page = page
      this.cargarProductos()
    },

    clearProductoActual() {
      this.productoActual = null
    },
  },
})

function mapCategoriasTree(familias: Categoria[]): TreeItem[] {
  return familias.map(f => ({
    id: f.idCategoria,
    name: f.nombre,
    children: f.subcategorias?.map(m => ({
      id: m.idCategoria,
      name: m.nombre,
      children: m.subcategorias?.map(h => ({
        id: h.idCategoria,
        name: h.nombre,
        selectable: true,
      })),
    })),
  }))
}
