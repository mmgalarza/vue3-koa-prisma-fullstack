import * as z from 'zod';
export const ClientesUpsertResultSchema = z.object({
  idCliente: z.number().int(),
  nombre: z.string(),
  email: z.string().optional(),
  calle: z.string(),
  numero: z.string().optional(),
  ciudad: z.string(),
  provincia: z.string(),
  codigoPostal: z.string(),
  pais: z.string(),
  contacto: z.string().optional(),
  activo: z.boolean(),
  idEmpresa: z.number().int(),
  empresa: z.unknown(),
  ventas: z.array(z.unknown())
});