import { get, post, patch, del } from '@auth/api-v2'
import type { 
  Usuario, 
  UsuarioFilters, 
  UpdateUsuarioPayload, 
  UsuarioResponse 
} from './contract'

/* USUARIOS API */
export const apiUsuario = {
  getUsers: (params?: UsuarioFilters) => 
    get<Usuario[]>('/usuarios', params),

  getById: (id: number) => 
    get<Usuario>(`/usuarios/${id}`),

  update: (id: number, data: UpdateUsuarioPayload) => 
    patch<UsuarioResponse>(`/usuarios/${id}`, data),

  delete: (id: number) => 
    del<void>(`/usuarios/${id}`),

  postUpdate: (id: number, data: UpdateUsuarioPayload) => 
    post<UsuarioResponse>(`/usuarios/${id}`, data),
}