import * as z from 'zod';
export const VentaFindManyResultSchema = z.object({
  data: z.array(z.object({
  idVenta: z.number().int(),
  fecha: z.date(),
  estado: z.string(),
  idEmpresa: z.number().int(),
  idCliente: z.number().int(),
  idListaPvp: z.number().int(),
  empresa: z.unknown(),
  cliente: z.unknown(),
  listaPvp: z.unknown(),
  detalles: z.array(z.unknown()),
  factura: z.unknown().optional(),
  registros: z.array(z.unknown())
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