import { post } from './api'
import type { LoginPayload, LoginResponse, RefreshTokenResponse } from './contract'

export const AuthService = {
  path: '',
  login(payload: LoginPayload): Promise<LoginResponse> {
    return post<LoginResponse>( this.path + '/login', payload)
  },
  logout(): Promise<void> {
    return post(this.path + '/logout')
  },
  me(): Promise<{ user: { id: number; name: string } }> {
    return post( this.path + '/me')
  },
  refreshToken(): Promise<RefreshTokenResponse> {
    return post<RefreshTokenResponse>( this.path + '/refresh')
  },
  registerUser(name: string, email: string, password: string): Promise<void> {
    return post<void>( this.path + '/register', { name, email, password })
  },

  // ---------------------------
  // Reset password
  requestPasswordReset(email: string): Promise<{ message: string }> {
    return post<{ message: string }>( this.path + '/reset-password/request', { email })
  },

  resetPassword(token: string, newPassword: string): Promise<{ message: string }> {
    return post<{ message: string }>( this.path + '/reset-password', {
      token,
      passwordNueva: newPassword
    })
  },

  // ---------------------------
  // Nuevo: Activar cuenta
  activateAccount(token: string): Promise<{ message: string }> {
    // Aunque en OpenAPI es GET, aquí hacemos POST para simplificar desde frontend
    return post<{ message: string }>( this.path + '/activate', { token })
  },

  // Nuevo: Reenviar activación
  resendActivation(email: string): Promise<{ message: string }> {
    return post<{ message: string }>( this.path + '/resend-activation', { email })
  }
}
