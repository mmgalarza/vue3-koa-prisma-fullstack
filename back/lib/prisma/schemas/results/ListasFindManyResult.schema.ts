import * as z from 'zod';
export const ListasFindManyResultSchema = z.object({
  data: z.array(z.object({
  idLista: z.number().int(),
  idProveedor: z.number().int(),
  refNo: z.string(),
  fecha: z.date(),
  observacion: z.string().optional(),
  proveedor: z.unknown(),
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