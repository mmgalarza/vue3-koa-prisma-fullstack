import * as z from 'zod';
export const ProductosDeleteResultSchema = z.nullable(z.object({
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
}));