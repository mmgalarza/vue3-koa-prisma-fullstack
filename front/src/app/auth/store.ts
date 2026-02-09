import { defineStore } from 'pinia'
import { AuthService } from './service'
import type { AuthState, AuthUser, LoginPayload } from './contract'

const TOKEN_KEY = 'token'
const USER_KEY = 'user'
const EXPIRES_KEY = 'expiresAt'

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null as AuthUser | null,
    token: localStorage.getItem(TOKEN_KEY),
    expiresAt: localStorage.getItem(EXPIRES_KEY)
      ? Number(localStorage.getItem(EXPIRES_KEY))
      : null,
  }),

  getters: {
    // 🔐 Estado de autenticación
    isLoggedIn: (state) =>
      !!state.token &&
      !!state.expiresAt &&
      state.expiresAt > Date.now(),

    isAnonymous: (state) => !state.token,

    // 👤 Roles
    isAdmin: (state) => state.user?.rol === 'ADMIN',
    isClient: (state) => state.user?.idCliente !== null,
    isUser: (state) => state.user?.rol === 'USER',

    // Opcionales pero útiles
    getUsuario: (state) => state.user,
    getToken: (state) => state.token,
    getExpiresAt: (state) => state.expiresAt,
    getClientId: (state) => state.user?.idCliente || null,
  },

  actions: {
    async login(payload: LoginPayload) {
      const { user, token, expiresIn } = await AuthService.login(payload)

      this.user = user
      this.token = token
      this.expiresAt = Date.now() + expiresIn * 1000

      localStorage.setItem(TOKEN_KEY, token)
      localStorage.setItem(USER_KEY, JSON.stringify(user))
      localStorage.setItem(EXPIRES_KEY, String(this.expiresAt))
    },

    logout() {
      this.user = null
      this.token = null
      this.expiresAt = null

      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(USER_KEY)
      localStorage.removeItem(EXPIRES_KEY)
    },

    async refreshToken() {
      const { token, expiresIn } = await AuthService.refreshToken()

      this.token = token
      this.expiresAt = Date.now() + expiresIn * 1000

      localStorage.setItem(TOKEN_KEY, token)
      localStorage.setItem(EXPIRES_KEY, String(this.expiresAt))
    },

    loadFromStorage() {
      const token = localStorage.getItem(TOKEN_KEY)
      const user = localStorage.getItem(USER_KEY)
      const expiresAt = localStorage.getItem(EXPIRES_KEY)

      if (token && expiresAt && Number(expiresAt) > Date.now()) {
        this.token = token
        this.user = user ? (JSON.parse(user) as AuthUser) : null
        this.expiresAt = Number(expiresAt)
      } else {
        this.logout()
      }
    },
  },
})
