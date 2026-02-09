import * as z from 'zod';
export const RegistroFindManyResultSchema = z.object({
  data: z.array(z.object({
  idRegistro: z.number().int(),
  fecha: z.date(),
  numero: z.string(),
  idTipoDoc: z.string(),
  idVenta: z.number().int().optional(),
  idActividad: z.number().int().optional(),
  tipoDoc: z.unknown(),
  venta: z.unknown().optional(),
  actividad: z.unknown().optional(),
  detalles: z.array(z.unknown())
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