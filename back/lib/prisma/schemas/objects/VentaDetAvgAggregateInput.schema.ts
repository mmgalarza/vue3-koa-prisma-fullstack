import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVentaDet: z.literal(true).optional(),
  idVenta: z.literal(true).optional(),
  idProducto: z.literal(true).optional(),
  cantidad: z.literal(true).optional(),
  precioUnit: z.literal(true).optional(),
  descuento: z.literal(true).optional()
}).strict();
export const VentaDetAvgAggregateInputObjectSchema: z.ZodType<Prisma.VentaDetAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetAvgAggregateInputType>;
export const VentaDetAvgAggregateInputObjectZodSchema = makeSchema();
