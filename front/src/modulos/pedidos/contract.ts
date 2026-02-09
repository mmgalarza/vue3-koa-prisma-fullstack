// src/modules/pedidos/contract.ts
import type { Cliente } from '../usuario/contract'

export type EstadoOp = 'BORRADOR' | 'CONFIRMADA' | 'ANULADA'

export interface OperacionDetalle {
  idDetalle: number
  idProducto: number
  cantidad: number
  precioUnitario: number
  subtotal: number
}

export interface Operacion {
  idOperacion: number
  estado: EstadoOp
  total: number
  createdAt: string
  confirmedAt?: string
  cliente?: Cliente
  operacionesDetalle: OperacionDetalle[]
}
export interface PedidoFilters {
  estados: EstadoOp[]
  idOperacion?: number
  totalMin?: number
  totalMax?: number
  desde?: string
  hasta?: string
}

export interface PedidosError {
  code: string
  message: string
}

/* ===== PAGINACIÓN ===== */
export interface PageMeta {
  page: number
  limit: number
  total: number
}

export interface PagedResponse<T> {
  data: T[]
  meta: PageMeta
}