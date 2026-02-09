import { defineStore } from 'pinia'
import { categoriasService } from './service'
import type { Categoria, CategoriaTipo } from './types'

export const useCategoriasStore = defineStore('categorias', {
  state: () => ({
    familias: [] as Categoria[],
    loading: false,
    error: null as string | null,
  }),

  getters: {
    /**
     * Devuelve todas las categorías tipo MADRE en una lista plana
     */
    allMadres: (state) => {
      return state.familias.flatMap(f => f.subcategorias || [])
    },

    /**
     * Devuelve todas las categorías tipo HIJA en una lista plana
     */
    allHijas: (state) => {
      return state.familias
        .flatMap(f => f.subcategorias || [])
        .flatMap(m => m.subcategorias || [])
    },

    /**
     * Busca una categoría específica por ID dentro del árbol
     */
    findInTree: (state) => (id: number): Categoria | undefined => {
      const search = (list: Categoria[]): Categoria | undefined => {
        for (const cat of list) {
          if (cat.idCategoria === id) return cat
          if (cat.subcategorias) {
            const found = search(cat.subcategorias)
            if (found) return found
          }
        }
      }
      return search(state.familias)
    }
  },

  actions: {
    /**
     * Carga el árbol completo desde la API
     */
    async fetchTree() {
      this.loading = true
      this.error = null
      try {
        const data = await categoriasService.getTree()
        this.familias = data.familias
      } catch (err: any) {
        this.error = err.message || 'Error al cargar categorías'
      } finally {
        this.loading = false
      }
    },

    /**
     * Crea una categoría y refresca el árbol
     */
    async createCategoria(payload: any) {
      try {
        await categoriasService.create(payload)
        await this.fetchTree()
      } catch (err: any) {
        throw err
      }
    },

    /**
     * Actualiza y refresca
     */
    async updateCategoria(id: number, payload: any) {
      try {
        await categoriasService.update(id, payload)
        await this.fetchTree()
      } catch (err: any) {
        throw err
      }
    },

    /**
     * Elimina físicamente o desactiva según necesidad
     */
    async removeCategoria(id: number, physical: boolean = false) {
      try {
        if (physical) {
          await categoriasService.delete(id)
        } else {
          await categoriasService.desactivar(id)
        }
        await this.fetchTree()
      } catch (err: any) {
        throw err
      }
    }
  }
})