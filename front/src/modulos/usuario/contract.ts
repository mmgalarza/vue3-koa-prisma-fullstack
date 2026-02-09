/* ============ ENUMS ============ */

export type Rol = 'ADMIN' | 'USER'

/* ============ CLIENTE (Subtipo de Usuario) ============ */

export interface Cliente {
  idCliente: number
  idUsuario: number
  nombre: string
  email?: string
  calle: string
  numero?: string
  ciudad: string
  provincia: string
  codigoPostal: string
  pais: string
  contacto?: string
  activo: boolean
}

/* ============ USUARIO ============ */

export interface Usuario {
  idUsuario: number
  username: string
  email: string
  password?: string // Opcional, solo presente en creación/edición
  nombre: string
  activo: boolean
  rol: Rol
  cliente?: Cliente // Relación 1:1
  creadoEn: string
  actualizadoEn: string
}

/* ============ API PAYLOADS & PARAMS ============ */

/**
 * Parámetros para el listado de usuarios (Dashboard Admin)
 */
export interface UsuarioFilters {
  skip?: number
  take?: number
  activo?: boolean
  search?: string
}

/**
 * Datos permitidos para actualizar un usuario
 * Basado en el endpoint PATCH /usuarios/{id}
 */
export interface UpdateUsuarioPayload {
  username?: string
  email?: string
  password?: string
  nombre?: string
  activo?: boolean
}

/**
 * Estructura de respuesta para actualizaciones 
 * (El API devuelve { user: Usuario })
 */
export interface UsuarioResponse {
  user: Usuario
  message?: string
}

/**
 * Error genérico de la API
 */
export interface ApiError {
  message: string
  error?: string
}

export interface UsuarioState {
  selected: Usuario | null 
  list: Usuario[] // Lista para el CRUD Admin
  loading: boolean
  error: string | null
}