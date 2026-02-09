import { apiPerfil } from './api'
import type { 
  PerfilUpdateSuccess, 
  UpdatePerfilRequest, 
  PerfilUsuarioResponse 
} from './types'

export const perfilService = {
  /**
   * Obtiene la información detallada del perfil por ID
   */
  async getById(id: number): Promise<PerfilUsuarioResponse> {
    // Se retorna directamente el resultado para cumplir con el tipo PerfilUsuarioResponse
    return await apiPerfil.getById(id)
  },

  /**
   * Actualiza los datos del perfil y cliente
   */
  async update(payload: UpdatePerfilRequest): Promise<PerfilUpdateSuccess> {
    // Se retorna directamente el resultado para cumplir con el tipo PerfilUpdateSuccess
    return await apiPerfil.updateMiPerfil(payload)
  }
}