// src/modules/pedidos/store.ts
import { defineStore } from 'pinia'
import type {
  Operacion,
  PedidoFilters,
  PedidosError,
  PageMeta,
  PagedResponse
} from './contract'
import { PedidosService } from './service'
import { useUsuarioStore } from '@/modulos/usuario/store'

const PAGE_SIZE = 9

export const usePedidosStore = defineStore('pedidos', {
  state: () => ({
    pedidos: [] as Operacion[],
    meta: {
      page: 1,
      limit: PAGE_SIZE,
      total: 0,
    } as PageMeta,

    cargando: false,
    cargado: false,
    error: null as PedidosError | null,

    filters: {
      estados: [],
    } as PedidoFilters,
  }),

  getters: {
    pedidosFiltrados(state): Operacion[] {
      return state.pedidos.filter(op => {
        if (
          state.filters.estados.length &&
          !state.filters.estados.includes(op.estado)
        ) return false

        if (
          state.filters.idOperacion &&
          op.idOperacion !== state.filters.idOperacion
        ) return false

        if (
          state.filters.totalMin !== undefined &&
          op.total < state.filters.totalMin
        ) return false

        if (
          state.filters.totalMax !== undefined &&
          op.total > state.filters.totalMax
        ) return false

        if (
          state.filters.desde &&
          op.createdAt < state.filters.desde
        ) return false

        if (
          state.filters.hasta &&
          op.createdAt > state.filters.hasta
        ) return false

        return true
      })
    },
  },

  actions: {
    /**
     * Carga pedidos del cliente autenticado
     * Consume el contexto Perfil
     */
    async loadMisPedidos(page: number = 1): Promise<void> {
      const usuarioStore = useUsuarioStore()

      // 1️⃣ Asegurar contexto usuario
      if (!usuarioStore.loaded) {
        await usuarioStore.loadUsuario()
      }

      // 2️⃣ Si no es cliente, no hay pedidos
      if (!usuarioStore.isCliente || !usuarioStore.clienteId) {
        this.pedidos = []
        this.cargado = true
        return
      }

      this.cargando = true
      this.error = null

      try {
        const res: PagedResponse<Operacion> =
          await PedidosService.getByCliente(
            usuarioStore.clienteId,
            page,
            PAGE_SIZE
          )

        this.pedidos = res.data
        this.meta = res.meta
        this.cargado = true
      } catch (err: any) {
        this.error = {
          code: err.code ?? 'PEDIDOS_ERROR',
          message: err.message ?? 'Error cargando pedidos',
        }
      } finally {
        this.cargando = false
      }
    },

    async confirmarPedido(idOperacion: number): Promise<void> {
      this.cargando = true
      this.error = null

      try {
        const opUpd = await PedidosService.confirmarOperacion(idOperacion)

        this.pedidos = this.pedidos.map(p =>
          p.idOperacion === idOperacion ? opUpd : p
        )
      } catch (err: any) {
        this.error = {
          code: err.code ?? 'CONFIRMAR_ERROR',
          message: err.message ?? 'Error confirmando pedido',
        }
      } finally {
        this.cargando = false
      }
    },

    async anularPedido(idOperacion: number): Promise<void> {
      this.cargando = true
      this.error = null

      try {
        await PedidosService.anularOperacion(idOperacion)

        this.pedidos = this.pedidos.filter(
          p => p.idOperacion !== idOperacion
        )
      } catch (err: any) {
        this.error = {
          code: err.code ?? 'ANULAR_ERROR',
          message: err.message ?? 'Error anulando pedido',
        }
      } finally {
        this.cargando = false
      }
    },

    reset(): void {
      this.pedidos = []
      this.cargando = false
      this.cargado = false
      this.error = null
      this.filters = { estados: [] }
    },
  },
})
