import * as api from '@auth/api'
import type { Operacion, OperacionDetalle } from './contract'

export const crearOperacion = async (usuarioId: number): Promise<Operacion> => {
  return api.post<Operacion>('/operaciones', { usuarioId })
}

export const confirmarOperacion = async (
  idOperacion: number,
  usuarioId: number,
  cliente: any
): Promise<Operacion> => {
  return api.post<Operacion>(`/operaciones/${idOperacion}/confirmar`, { usuarioId, cliente })
}

export const agregarDetalle = async (
  idOperacion: number,
  detalle: Partial<OperacionDetalle>
): Promise<OperacionDetalle> => {
  return api.post<OperacionDetalle>(`/operaciones/${idOperacion}/detalles`, detalle)
}

export const actualizarDetalle = async (
  idOperacion: number,
  idDetalle: number,
  detalle: Partial<OperacionDetalle>
): Promise<OperacionDetalle> => {
  return api.post<OperacionDetalle>(`/operaciones/${idOperacion}/detalles/${idDetalle}`, detalle)
}

export const eliminarDetalle = async (idOperacion: number, idDetalle: number): Promise<{ deleted: boolean }> => {
  return api.post<{ deleted: boolean }>(`/operaciones/${idOperacion}/detalles/${idDetalle}`, { _method: 'DELETE' })
}

export const obtenerOperacion = async (idOperacion: number): Promise<Operacion> => {
  return api.get<Operacion>(`/operaciones/${idOperacion}`)
}

export const listarOperaciones = async (): Promise<Operacion[]> => {
  return api.get<Operacion[]>('/operaciones')
}
