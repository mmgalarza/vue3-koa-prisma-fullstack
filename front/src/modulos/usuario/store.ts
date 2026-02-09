import { defineStore } from 'pinia'
import { UsuarioService as srv } from './service'
import { idUsuarioSchema, updateUsuarioSchema } from './schema.zod'
import type { UsuarioState, UsuarioFilters, UpdateUsuarioPayload } from './contract'
import { z } from 'zod'

export const useUsuarioStore = defineStore('Usuario', {
  state: (): UsuarioState => ({
    selected: null,  
    list: [],
    loading: false,
    error: null,
  }),

  getters: {
    isCliente: (s) => srv.isClient(s.selected),
    fullDireccion: (s) => srv.formatDireccion(s.selected?.cliente || null),
    allUsuarios: (s) => s.list
  },

  actions: {
    async getById(idRaw: number) {
      this.loading = true
      this.error = null
      
      try {
        const idUsuario = idUsuarioSchema.parse(idRaw)
        this.selected = await srv.getById(idUsuario)
      } catch (err: any) {
        this.error= 'Error al obtener usuario'
      } finally {
        this.loading = false
      }
    },

    async getUsers(filters?: UsuarioFilters) {
      this.loading = true
      this.error = null
      try {
        this.list = await srv.getUsers(filters)
      } catch (err: any) {
        this.error = 'Error al cargar la lista'
      } finally {
        this.loading = false
      }
    },

    /**
     * Actualización con validación cruzada
     */
    async update(idRaw: number, payload: UpdateUsuarioPayload) {
      this.loading = true
      this.error = null
      try {
        const idUsuario = idUsuarioSchema.parse(idRaw)
        const validatedData = updateUsuarioSchema.parse(payload)

        this.selected = await srv.update(idUsuario, validatedData)

        // Sincronizar lista
        this.list.map(u => {
          if (u.idUsuario === idUsuario) return this.selected
          return u
        })
      } catch (err: any) {
        this.error = 'Error en la actualización'
      } finally {
        this.loading = false
      }
    },

    async remove(idRaw: number) {
      this.error = null
      try {
        const idUsuario = idUsuarioSchema.parse(idRaw)
        await srv.delete(idUsuario)
        this.list = this.list.filter(u => u.idUsuario !== idUsuario)
        if (this.selected?.idUsuario === idUsuario) this.selected = null
      } catch (err: any) {
        this.error= 'No se pudo eliminar' 
      } finally {
        this.loading = false
      }
    },

    clear() {
      this.selected = null
      this.list = []
      this.loading = false
      this.error = null
    }
  }
})