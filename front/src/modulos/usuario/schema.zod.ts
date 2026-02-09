import { z } from 'zod'

// Validación de ID
export const idUsuarioSchema = z.number().int().positive('ID de usuario no válido')

// Esquema de Usuario (Salida de API)
export const usuarioSchema = z.object({
  idUsuario: z.number().int(),
  username: z.string().min(3, 'Username demasiado corto'),
  nombre: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email no válido'),
  rol: z.enum(['ADMIN', 'USER']),
  activo: z.boolean(),
  creadoEn: z.string().optional(),
  actualizadoEn: z.string().optional(),
  cliente: z.any().optional()
})

export type usuarioSchemaDTO = z.infer<typeof usuarioSchema>

// Esquema para Actualización (Entrada desde Formulario)
export const updateUsuarioSchema = usuarioSchema.pick({
  nombre: true,
  username: true,
  email: true,
  activo: true
}).extend({
  password: z.string().min(6, 'Mínimo 6 caracteres').optional().or(z.literal(''))
})

export type updateUsuarioSchemaDTO = z.infer<typeof updateUsuarioSchema>