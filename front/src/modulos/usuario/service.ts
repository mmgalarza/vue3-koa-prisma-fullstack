import { apiUsuario as api } from './api'
import type { 
  Usuario, 
  Cliente,
  UsuarioFilters, 
  UpdateUsuarioPayload 
} from './contract'

export const UsuarioService = {

  async getById(idUsuario: number): Promise<Usuario> {
    return await api.getById(idUsuario)
  },

  async getUsers(filters?: UsuarioFilters): Promise<Usuario[]> {
    return await api.getUsers(filters)
  },
  async update(idUsuario: number, data: UpdateUsuarioPayload): Promise<Usuario> {
    const r = await api.update(idUsuario, data)
    return r.user
  },

  async delete(idUsuario: number): Promise<void> {
    return await api.delete(idUsuario)
  },

  /* ============ LOGICA DE SUBTIPO (CLIENTE) ============ */

  isClient(user: Usuario | null): boolean {
    if (!user || !user.cliente) return false
    return user.cliente.activo
  },

  getClienteData(user: Usuario | null): Cliente | null {
    return this.isClient(user) ? user!.cliente! : null
  },

  formatDireccion(cliente: Cliente | null): string {
    if (!cliente) return 'Sin dirección de facturación'
    
    const { calle, numero, ciudad, codigoPostal, pais } = cliente
    const num = numero ? ` ${numero}` : ''
    
    return `${calle}${num}, ${codigoPostal} ${ciudad}, ${pais}`
  }
}