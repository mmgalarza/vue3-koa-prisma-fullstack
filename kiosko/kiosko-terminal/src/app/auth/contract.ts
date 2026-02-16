export type UserRole = 'SUPER' | 'ADMIN' | 'USER'

export interface AuthUser {
  id: number
  username: string
  email: string
  nombre: string
  rol: UserRole
  idCliente: number | null
}

export interface LoginPayload {
  email: string
  password: string
}

export interface RefreshTokenResponse {
  token: string
  expiresIn: number
}

export interface AuthState {
  token: string | null
  user: AuthUser | null
  expiresAt: number | null
}

export type LoginResponse = {
  token: string
  user: AuthUser
  expiresIn: number
}