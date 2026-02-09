import * as z from 'zod';
export const RegistroFindFirstResultSchema = z.nullable(z.object({
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
}));