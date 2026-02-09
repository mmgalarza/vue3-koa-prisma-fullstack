import { get, put, patch } from '@auth/api-v2'
import type { 
  PerfilUsuarioResponse, 
  UpdatePerfilRequest, 
  PerfilUpdateSuccess,
  ClienteResponse
} from './types'

/* PERFIL API */
const endpoint = '/api/perfil'

export const apiPerfil = {
    /**
     * Obtiene el perfil del usuario autenticado (JWT)
     */
    getMiPerfil: () => 
        get<PerfilUsuarioResponse>(endpoint),

    /**
     * Actualiza el perfil del usuario autenticado
     */
    updateMiPerfil: (data: UpdatePerfilRequest) => 
        put<PerfilUpdateSuccess>(endpoint, data),

    /**
     * Actualización parcial del perfil autenticado
     */
    patchMiPerfil: (data: UpdatePerfilRequest) => 
        patch<PerfilUpdateSuccess>(endpoint, data),

    /**
     * Obtiene perfil por ID (Uso administrativo)
     */
    getById: (id: number) => 
        get<PerfilUsuarioResponse>(`${endpoint}/${id}`),

    /**
     * Actualiza perfil por ID (Uso administrativo)
     */
    updateById: (id: number, data: UpdatePerfilRequest) => 
        put<PerfilUpdateSuccess>(`${endpoint}/${id}`, data),

    /**
     * Obtiene específicamente los datos de cliente del usuario actual
     */
    getMiCliente: () => 
        get<ClienteResponse>(`${endpoint}/cliente`),
}