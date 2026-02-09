import { defineStore } from 'pinia'
import type { CarroItem, Operacion } from './contract'
import * as service from './service'

export const useCarroStore = defineStore('carro', {
  state: () => ({
    items: [] as CarroItem[],
    operacionActual: null as Operacion | null,
    loading: false,
    error: null as string | null
  }),
  getters: {
    totalItems: state => state.items.reduce((sum, i) => sum + i.cantidad, 0),
    totalPrecio: state => state.items.reduce((sum, i) => sum + i.subtotal, 0)
  },
  actions: {
    agregarProducto(item: CarroItem) {
      const existente = this.items.find(i => i.idProducto === item.idProducto)
      if (existente) {
        existente.cantidad += item.cantidad
        existente.subtotal = existente.cantidad * existente.precio
      } else {
        this.items.push({ ...item, subtotal: item.cantidad * item.precio })
      }
    },
    quitarProducto(idProducto: number) {
      this.items = this.items.filter(i => i.idProducto !== idProducto)
    },
    actualizarCantidad(idProducto: number, cantidad: number) {
      const item = this.items.find(i => i.idProducto === idProducto)
      if (item) {
        item.cantidad = cantidad
        item.subtotal = cantidad * item.precio
      }
    },
    limpiarCarro() {
      this.items = []
      this.operacionActual = null
    },
    // ------------------
    // Operación BORRADOR
    // ------------------
    async crearOperacion(usuarioId: number) {
      this.loading = true
      try {
        const op = await service.crearOperacion(usuarioId)
        this.operacionActual = op
        return op
      } finally {
        this.loading = false
      }
    },
    async confirmarOperacion(usuarioId: number, cliente: any) {
      if (!this.operacionActual) throw new Error('No hay operación activa')
      this.loading = true
      try {
        const op = await service.confirmarOperacion(this.operacionActual.idOperacion, usuarioId, cliente)
        this.operacionActual = op
        this.limpiarCarro()
        return op
      } finally {
        this.loading = false
      }
    }
  }
})
