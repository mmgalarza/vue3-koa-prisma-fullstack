import { z } from 'zod';

export const ClienteCreateSchema = z.object({
  idUsuario: z.number(),
  nombre: z.string().min(2),
  calle: z.string().optional(),
  numero: z.string().optional(),
  ciudad: z.string().optional(),
  provincia: z.string().optional(),
  codigoPostal: z.string().optional(),
  pais: z.string().optional(),
  contacto: z.string().optional(),
  activo: z.boolean().optional(),
});

export const ClienteUpdateSchema = ClienteCreateSchema.partial();

export type ClienteCreateDTO = z.infer<typeof ClienteCreateSchema>;
export type ClienteUpdateDTO = z.infer<typeof ClienteUpdateSchema>;
