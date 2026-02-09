import * as z from 'zod';
export const ClientesFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});