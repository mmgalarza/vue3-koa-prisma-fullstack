
/**
 * Datos del cliente que el usuario puede editar.
 * Omitimos idCliente e idUsuario porque el backend los gestiona por seguridad.
 */
export interface ClienteUpdateRequest {
  calle?: string;
  numero?: string | null;
  ciudad?: string;
  provincia?: string;
  codigoPostal?: string;
  pais?: string;
  contacto?: string | null;
}

/**
 * Payload principal para el PUT /api/perfil
 */
export interface UpdatePerfilRequest {
  nombre?: string;
  email?: string; // Si permites cambiarlo, el backend validará el 409 (Conflict)
  cliente?: ClienteUpdateRequest;
}

/**
 * Representa la estructura completa del Cliente tal como viene de Prisma
 */
export interface ClienteResponse {
  idCliente: number;
  idUsuario: number;
  nombre: string; // Nombre comercial o de facturación
  email: string | null;
  calle: string;
  numero: string | null;
  ciudad: string;
  provincia: string;
  codigoPostal: string;
  pais: string;
  contacto: string | null;
  activo: boolean;
}

/**
 * El objeto Perfil Completo que recibes en el GET /api/perfil
 */
export interface PerfilUsuarioResponse {
  idUsuario: number;
  username: string;
  email: string;
  nombre: string;
  rol: 'USER' | 'ADMIN' | 'SUPER';
  activo: boolean;
  creadoEn: string;
  actualizadoEn: string;
  cliente: ClienteResponse | null; // Importante: prever que puede ser null
}

/**
 * Envoltura estándar para respuestas con éxito (PUT/PATCH)
 */
export interface PerfilUpdateSuccess {
  success: boolean;
  message: string;
  perfil: PerfilUsuarioResponse;
}

/**
 * Envoltura estándar para errores de validación (Zod)
 */
export interface ValidationErrorResponse {
  success: false;
  message: string;
  errors: Array<{
    field: string;   // ej: "cliente.ciudad"
    message: string; // ej: "Mínimo 3 caracteres"
  }>;
}