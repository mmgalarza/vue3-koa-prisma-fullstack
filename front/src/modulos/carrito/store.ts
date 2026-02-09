// src/modules/carrito/store.ts
import { defineStore } from 'pinia'
import type { CarroItem } from './contract'
import { carritoService } from './service'

// Items de ejemplo para inicializar o probar el store
const itemsEjemplo: CarroItem[] = [
  {
    idProducto: 101,
    nombre: "iPhone 15 Pro",
    precio: 1219,
    cantidad: 1,
    subtotal: 1219,
    imagen: "https://picsum.photos/id/160/400/400"
  },
  {
    idProducto: 102,
    nombre: "MacBook Air M3",
    precio: 1299,
    cantidad: 1,
    subtotal: 1299,
    imagen: "https://picsum.photos/id/0/400/400"
  },
  {
    idProducto: 103,
    nombre: "Sony WH-1000XM5",
    precio: 349,
    cantidad: 2,
    subtotal: 698,
    imagen: "https://picsum.photos/id/48/400/400"
  },
  {
    idProducto: 104,
    nombre: "Logitech MX Master 3S",
    precio: 109,
    cantidad: 1,
    subtotal: 109,
    imagen: "https://picsum.photos/id/2/400/400"
  }
];

export const useCarritoStore = defineStore('carrito', {
  state: () => ({
    items: [...itemsEjemplo] as CarroItem[],
    loading: false,
    error: null as string | null
  }),

  getters: {
    // Se recalculan automáticamente cuando cambia 'items'
    totalPrecio: (state) => 
      state.items.reduce((acc, item) => acc + item.subtotal, 0),
    
    totalCantidad: (state) => 
      state.items.reduce((acc, item) => acc + item.cantidad, 0),
    
    isEmpty: (state) => state.items.length === 0
  },

  actions: {  
    agregarProducto(producto: any) {
      const idABuscar = producto.idProducto || producto.id;
      const existente = this.items.find(i => i.idProducto === idABuscar);
      
      if (existente) {
        existente.cantidad++;
        existente.subtotal = existente.cantidad * existente.precio;
      } else {
        this.items.push({
          idProducto: idABuscar,
          nombre: producto.nombre,
          cantidad: 1,
          precio: producto.precio,
          subtotal: producto.precio,
          imagen: producto.imagen
        });
      }
    },
    decrementarCantidad(idProducto: number) {
        const item = this.items.find(i => i.idProducto === idProducto)
        if (item) {
        if (item.cantidad > 1) {
            item.cantidad--
            item.subtotal = item.cantidad * item.precio
        } else {
            this.eliminarProducto(idProducto) // Si es 1, lo quitamos
        }
        }
    },
    eliminarProducto(idProducto: number) {
      this.items = this.items.filter(i => i.idProducto !== idProducto)
    },

    // Acción principal para cerrar la operación
    async checkout(datosCliente: any) {
      this.loading = true
      this.error = null
      
      try {
        // Llamamos al service que usa tu api.ts adaptada
        const respuesta = await carritoService.procesarCheckout(this.items, datosCliente)
        
        // Si el backend confirma, limpiamos el carrito
        this.$reset()
        return respuesta
      } catch (err: any) {
        this.error = err.message || 'Error al confirmar la operación'
        throw err
      } finally {
        this.loading = false
      }
    },

    // Para vaciar el carrito manualmente
    limpiarCarrito() {
      this.$reset()
    }
  }
})