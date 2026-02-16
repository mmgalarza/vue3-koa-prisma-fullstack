import { AuthService } from './service'
import type { AuthState, AuthUser, LoginPayload } from './contract'

const TOKEN_KEY = 'token'
const USER_KEY = 'user'
const EXPIRES_KEY = 'expiresAt'

export class AuthController {
  #estado: AuthState = {
    user: null,
    token: localStorage.getItem(TOKEN_KEY),
    expiresAt: localStorage.getItem(EXPIRES_KEY) 
      ? Number(localStorage.getItem(EXPIRES_KEY)) 
      : null,
  };

  #oyentes = new Set<() => void>();

  constructor() {
    this.loadFromStorage();
  }

  get estado() { return this.#estado; }

  // Getters de lógica de identidad
  get isLoggedIn(): boolean {
    return !!this.#estado.token && 
           !!this.#estado.expiresAt && 
           this.#estado.expiresAt > Date.now();
  }

  get isAdmin(): boolean { return this.#estado.user?.rol === 'SUPER' || this.#estado.user?.rol === 'ADMIN'; }
  get isClient(): boolean { return this.#estado.user?.idCliente !== null; }
  get user(): AuthUser | null { return this.#estado.user; }

  suscribir(callback: () => void) {
    this.#oyentes.add(callback);
    return () => this.#oyentes.delete(callback);
  }

  #notificar() {
    this.#oyentes.forEach(o => o());
  }

  #actualizar(parcial: Partial<AuthState>) {
    this.#estado = { ...this.#estado, ...parcial };
    this.#notificar();
  }

  async login(payload: LoginPayload) {
    try {
      const { user, token, expiresIn } = await AuthService.login(payload);
      const expiresAt = Date.now() + expiresIn * 1000;

      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      localStorage.setItem(EXPIRES_KEY, String(expiresAt));

      this.#actualizar({ user, token, expiresAt });

      return { user, token, expiresAt }

    } catch (error) {
      this.logout();
      throw error;
    }
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(EXPIRES_KEY);

    this.#actualizar({
      user: null,
      token: null,
      expiresAt: null
    });
  }

  async refreshToken() {
    try {
      const { token, expiresIn } = await AuthService.refreshToken();
      const expiresAt = Date.now() + expiresIn * 1000;

      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(EXPIRES_KEY, String(expiresAt));

      this.#actualizar({ token, expiresAt });
    } catch (error) {
      this.logout();
    }
  }

  private loadFromStorage() {
    const token = localStorage.getItem(TOKEN_KEY);
    const userJson = localStorage.getItem(USER_KEY);
    const expiresAt = localStorage.getItem(EXPIRES_KEY);

    if (token && expiresAt && Number(expiresAt) > Date.now()) {
      this.#estado = {
        token,
        user: userJson ? (JSON.parse(userJson) as AuthUser) : null,
        expiresAt: Number(expiresAt)
      };
    } else {
      this.logout();
    }
  }
}

export const authController = new AuthController();