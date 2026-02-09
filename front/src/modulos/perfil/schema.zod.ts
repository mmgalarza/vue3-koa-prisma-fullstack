import { z } from 'zod';

export const updateClienteSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100).optional(),
  email: z.string().email("Email inválido").nullable().optional(),
  calle: z.string().min(1, "La calle es requerida").max(255).optional(),
  numero: z.string().nullable().optional(),
  ciudad: z.string().min(2, "Ciudad inválida").optional(),
  provincia: z.string().optional(),
  codigoPostal: z.string().max(10, "CP demasiado largo").optional(),
  pais: z.string().optional(),
  contacto: z.string().nullable().optional(),
});

export const updatePerfilSchema = z.object({
  nombre: z.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100)
    .optional(),
  
  email: z.string()
    .email("Formato de email incorrecto")
    .optional(),

  // Validamos el objeto anidado del cliente
  cliente: updateClienteSchema.optional(),
});

// Extraemos el tipo para TypeScript automáticamente
export type UpdatePerfilDTO = z.infer<typeof updatePerfilSchema>;
