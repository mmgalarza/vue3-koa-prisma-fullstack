import { api } from '../api';
import { UsuarioSchema, type Usuario } from '../types';
import { z } from 'zod';

export const usuariosService = {
  /**
   * Lista usuarios con filtros (skip, take, search)
   */
  async listar(params: { skip?: number; take?: number; search?: string; activo?: boolean }): Promise<Usuario[]> {
    const response = await api.get<Usuario[]>('/usuarios', params);
    return z.array(UsuarioSchema).parse(response);
  },

  /**
   * Obtiene un usuario por ID
   */
  async getById(id: number): Promise<Usuario> {
    const response = await api.get<Usuario>(`/usuarios/${id}`);
    return UsuarioSchema.parse(response);
  },

  /**
   * Actualiza datos del usuario (PATCH)
   */
  async actualizar(id: number, data: Partial<Usuario>): Promise<Usuario> {
    const response = await api.patch<{ user: Usuario }>(`/usuarios/${id}`, data);
    return UsuarioSchema.parse(response.user);
  },

  /**
   * Elimina un usuario físicamente
   */
  async eliminar(id: number): Promise<void> {
    await api.del(`/usuarios/${id}`);
  }
};