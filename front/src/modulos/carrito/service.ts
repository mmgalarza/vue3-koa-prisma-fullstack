// src/modules/carrito/service.ts
import { apiCarrito } from './api'
import type { CarroItem, CarroOperacion } from './contract'

export const carritoService = {
  async procesarCheckout(items: CarroItem[], cliente: any) {
    const totalPrecio = items.reduce((acc, i) => acc + i.subtotal, 0);
    const totalItems = items.reduce((acc, i) => acc + i.cantidad, 0);

    const payload: CarroOperacion = {
      cliente,
      items,
      resumen: {
        totalItems,
        totalPrecio
      }
    };

    // Llamada a tu API adaptada
    return await apiCarrito.confirmar(payload);
  }
}