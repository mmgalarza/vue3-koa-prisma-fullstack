import { defineStore } from 'pinia'
import { perfilService } from './service'
import type { 
  PerfilUpdateSuccess, 
  UpdatePerfilRequest, 
  PerfilUsuarioResponse,
  ValidationErrorResponse
} from './types'

export const useUsuarioStore = defineStore('usuario-perfil', {
  state: () => ({
    // Mantenemos la estructura de la respuesta exitosa como estado principal
    selected: null as PerfilUpdateSuccess | null,
    loading: false,
    error: null as string | null,
  }),

  getters: {
    // Atajo para acceder directamente al objeto del usuario
    usr: (state): PerfilUsuarioResponse | null => state.selected?.perfil || null,

    // Determina si tiene objeto cliente
    isCliente(): boolean {
      return !!this.usr?.cliente
    },

    // Getter fullDireccion formateado
    fullDireccion(): string {
      const c = this.usr?.cliente
      if (!c) return 'No hay dirección registrada'
      
      const partes = [
        c.calle ? `${c.calle} ${c.numero || ''}` : '',
        c.ciudad,
        c.provincia ? `${c.provincia} ${c.codigoPostal ? `(${c.codigoPostal})` : ''}` : '',
        c.pais
      ].filter(part => part && part.trim() !== '')
      
      return partes.join(', ')
    }
  },

  actions: {
    /**
     * Obtiene el perfil por ID y lo normaliza al estado 'selected'
     */
    async getById(id: number) {
      this.loading = true
      this.error = null
      try {
        const data = await perfilService.getById(id)
        // Normalizamos para que encaje en el esquema 'selected'
        this.selected = {
          success: true,
          message: 'Perfil cargado',
          perfil: data
        }
      } catch (err: any) {
        this.error = err.message || 'Error al obtener el perfil'
        this.selected = null
      } finally {
        this.loading = false
      }
    },

    /**
     * Actualiza el perfil a través del servicio y refresca el estado
     */
    async actualizar(payload: UpdatePerfilRequest) {
      this.loading = true
      this.error = null
      try {
        const res = await perfilService.update(payload)
        this.selected = res 
        return { success: true, message: res.message }
      } catch (err: any) {
        // Capturamos el error manteniendo la estructura de ValidationErrorResponse
        this.error = err.message || 'Error al actualizar'
        return { 
          success: false, 
          message: this.error, 
          errors: (err as ValidationErrorResponse).errors || [] 
        }
      } finally {
        this.loading = false
      }
    },

    /**
     * Limpia el store
     */
    $reset() {
      this.selected = null
      this.loading = false
      this.error = null
    }
  }
})