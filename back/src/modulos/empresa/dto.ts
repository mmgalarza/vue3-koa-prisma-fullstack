import { z } from 'zod';

export const EmpresaUpdateSchema = z.object({
  nombre: z.string().min(2),
  email: z.string().email().optional(),
  calle: z.string().optional(),
  numero: z.string().optional(),
  ciudad: z.string().optional(),
  provincia: z.string().optional(),
  codigoPostal: z.string().optional(),
  pais: z.string().optional(),
  contacto: z.string().optional(),
  activo: z.boolean().optional(),
});

export type EmpresaUpdateDTO = z.infer<typeof EmpresaUpdateSchema>;
