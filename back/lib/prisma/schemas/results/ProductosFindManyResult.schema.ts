import * as z from 'zod';
export const ProductosFindManyResultSchema = z.object({
  data: z.array(z.object({
  idProducto: z.number().int(),
  nombre: z.string(),
  idCategoria: z.number().int(),
  descripcion: z.string().optional(),
  imagen: z.string().optional(),
  codigo: z.string().optional(),
  unidad: z.string().optional(),
  activo: z.boolean(),
  categoria: z.unknown(),
  listasDet: z.array(z.unknown()),
  listaPvpDet: z.array(z.unknown()),
  ventaDet: z.array(z.unknown()),
  registroDet: z.array(z.unknown())
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