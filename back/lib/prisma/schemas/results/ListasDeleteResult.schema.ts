import * as z from 'zod';
export const ListasDeleteResultSchema = z.nullable(z.object({
  idLista: z.number().int(),
  idProveedor: z.number().int(),
  refNo: z.string(),
  fecha: z.date(),
  observacion: z.string().optional(),
  proveedor: z.unknown(),
  detalles: z.array(z.unknown())
}));