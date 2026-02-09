import { get, post } from '@auth/api'
import type { Operacion, EstadoOp, PagedResponse, PageMeta } from './contract'

/* OPERACIONES */
export const apiOperaciones = {
  getAll: () => get<Operacion[]>('/api/operaciones'),
  getByCliente: (idCliente: number, page: number, limit: number) =>
    get<PagedResponse<Operacion>>(
      `/api/operaciones/cliente/${idCliente}?page=${page}&limit=${limit}`
    ),  
  getById: (id: number) => get<Operacion>(`/api/operaciones/${id}`),
  confirmar: (idOperacion: number) => post<Operacion>(`/api/operaciones/${idOperacion}/confirmar`),
  anular: (idOperacion: number) => post<Operacion>(`/api/operaciones/${idOperacion}/anular`)
}
