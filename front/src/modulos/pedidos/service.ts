import { apiOperaciones } from './api'
import type { Operacion, PagedResponse } from './contract'

export const PedidosService = {
  getAll(): Promise<Operacion[]> {
    return apiOperaciones.getAll()
  },

  getByCliente(
    idCliente: number,
    page: number,
    limit: number): Promise<PagedResponse<Operacion>> {
    return apiOperaciones.getByCliente(idCliente, page, limit)
  },

  getById(id: number): Promise<Operacion> {
    return apiOperaciones.getById(id)
  },
  confirmarOperacion(idOperacion: number): Promise<Operacion> {
    return apiOperaciones.confirmar(idOperacion)
  },
  anularOperacion(idOperacion: number): Promise<Operacion> {
    return apiOperaciones.anular(idOperacion)
  },
}
