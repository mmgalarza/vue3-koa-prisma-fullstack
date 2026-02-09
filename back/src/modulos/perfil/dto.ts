import { z } from 'zod';

// Esquema simple y directo
export const updatePerfilSchema = z.object({
  // Usuario
  username: z.string().min(3).max(50).optional(),
  email: z.string().email().optional(),
  nombre: z.string().min(2).max(100).optional(),
  activo: z.boolean().optional(),
  rol: z.enum(['USER', 'ADMIN', 'SUPER']).optional(),
  
  // Cliente
  cliente: z.object({
    nombre: z.string().min(2).max(100).optional(),
    email: z.string().email().nullable().optional(),
    calle: z.string().optional(),
    numero: z.string().nullable().optional(),
    ciudad: z.string().optional(),
    provincia: z.string().optional(),
    codigoPostal: z.string().optional(),
    pais: z.string().optional(),
    contacto: z.string().nullable().optional(),
    activo: z.boolean().optional()
  }).optional()
});

// Tipo inferido
export type UpdatePerfilInput = z.infer<typeof updatePerfilSchema>;