import { defineStore } from 'pinia'
import { useAuthStore } from '@auth/store'
import type { LoginPayload } from '@auth/contract'
import { uiConfig } from '@app/ui.config'
import type { AppRole, AppState, LayoutKey } from './contract'
import { Router } from 'vue-router'
import { useUsuarioStore } from '@modulos/usuario/store'
import tree from '@app/tree.maps'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    router: Router
  }
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    initialized: false,
    role: 'GUEST',
    ui: uiConfig.GUEST,
    error: null,
    errorcode: 0,
    loading: false, // Útil para deshabilitar botones en la UI
  }),

  actions: {
    /**
     * Inicialización de la App (se llama en el bootstrap)
     */
    init() {
      try {
        const auth = useAuthStore()
        auth.loadFromStorage()
        this.resolveFromAuth(auth)
        this.MountDynRoute(this.ui.root)        
        this.initialized = true
      } catch (e) {
        this.setError("Error al inicializar la sesión", 500)
      }
    },

    /**
     * Traducir el estado de Auth a la configuración de UI de App
     */
    resolveFromAuth(auth: ReturnType<typeof useAuthStore>) {
      let role: AppRole = 'GUEST'
      if (auth.isAdmin) role = 'ADMIN'
      else if (auth.isUser) role = 'USER'

      this.role = role
      this.ui = uiConfig[role]
    },

    /**
     * Proceso de Login completo
     */
    async Login(payload: LoginPayload) {
      this.loading = true
      this.error = null
      
      try {
        const auth = useAuthStore()
        // 1. Intentar login en API
        await auth.login(payload)
        
        // 2. Actualizar roles y config UI
        this.resolveFromAuth(auth)
        
        // 3. Saltar al layout correspondiente (ej: AdminRoot o UserRoot)
        await this.switchTo(this.ui.root)
        
      } catch (e: any) {
        this.setError(e.message || "Credenciales inválidas", 401)
      } finally {
        this.loading = false
      }
    },

    /**
     * Proceso de Logout completo
     */
    async Logout() {
      this.loading = true
      try {
        const usuarioStore = useUsuarioStore()
        const authStore = useAuthStore()

        // 1. Limpiar datos de usuario y auth
        usuarioStore.clear()
        authStore.logout()

        // 2. Volver al estado GUEST
        this.role = 'GUEST'
        this.ui = uiConfig.GUEST

        // 3. Limpiar rutas privadas y volver al login/público
        await this.switchTo('GuestRoot')
        
      } catch (e: any) {
        this.setError("Error al cerrar sesión", 500)
      } finally {
        this.loading = false
      }
    },

    /**
     * Orquestador de cambio de contexto (Rutas + Layout)
     */
    async switchTo(to: LayoutKey) {
      try {
        // Mover a una ruta neutral mientras reconfiguramos para evitar colisiones
        await this.router.replace('/auth')
        
        // Limpiar rutas con meta.dynamicRoute: true
        this.clearDynRoute()
        
        // Montar el nuevo árbol de rutas
        this.MountDynRoute(to)
        
        // Ir a la raíz del nuevo contexto
        await this.router.push('/')
      } catch (e: any) {
        this.setError(`Fallo al cambiar al layout: ${to}`, 500)
      }
    },

    /**
     * Gestión atómica de rutas dinámicas
     */
    MountDynRoute(layoutKey: LayoutKey) {
      const layout = tree[layoutKey]
      const rt = this.router
      if (!layout || !layout.name || rt.hasRoute(layout.name)) return
      rt.addRoute(layout)
    },

    unMountDynRoute(layoutKey: LayoutKey) {
      const layout = tree[layoutKey]
      const rt = this.router
      if (!layout || !layout.name || !rt.hasRoute(layout.name)) return
      rt.removeRoute(layout.name)
    },

    clearDynRoute() {
      const rt = this.router
      // Buscamos todas las rutas que tengan el flag en meta
      const dyns = rt.getRoutes().filter(r => r.meta?.dynamicRoute === true && r.name)
      dyns.forEach((r) => { 
        rt.removeRoute(r.name!) 
      })
    },

    /**
     * Helper interno para errores
     */
    setError(msg: string, code: number = 0) {
      this.error = msg
      this.errorcode = code
    }
  },
})

export interface AppStore extends ReturnType<typeof useAppStore> {}