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
export const VentaDetMinAggregateInputObjectSchema: z.ZodType<Prisma.VentaDetMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetMinAggregateInputType>;
export const VentaDetMinAggregateInputObjectZodSchema = makeSchema();
