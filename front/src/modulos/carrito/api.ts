// src/modules/carrito/api.ts
import { post } from '@auth/api'
import type { CarroOperacion, OperacionConfirmada } from './contract'

/* CARRITO / OPERACIONES */
export const apiCarrito = {
  /**
   * Envía la estructura completa del carrito para que el backend 
   * confirme la operación y gestione el registro del cliente.
   */
  confirmar: (data: CarroOperacion) => 
    post<OperacionConfirmada>('/operaciones/confirmar', data),
}