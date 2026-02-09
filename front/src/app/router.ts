import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@auth/store'
import tree from '@app/tree.maps'

// Ya no recibe appStore
export function setupRouter() {
  return createAppRouter()
}

export function createAppRouter() {
  const staticRoutes: RouteRecordRaw[] = [
    tree.GuestRoot, 
    tree.authRoutes      
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes
  })

  router.beforeEach(async (to) => {
    const auth = useAuthStore()

    // El middleware ahora es 100% independiente del AppStore
    if (to.matched.length === 0) {
      return auth.isUser ? '/' : '/auth/login'
    }

    if (to.path.startsWith('/auth') && auth.isUser) {
      return '/'
    }

    return true
  })

  return router
}