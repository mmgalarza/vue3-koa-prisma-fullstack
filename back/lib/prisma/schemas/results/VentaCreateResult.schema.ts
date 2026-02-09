import * as z from 'zod';
export const VentaCreateResultSchema = z.object({
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
});