import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idListaPvpDet: z.literal(true).optional(),
  idListaPvp: z.literal(true).optional(),
  idProducto: z.literal(true).optional(),
  precioVenta: z.literal(true).optional()
}).strict();
export const ListaPvpDetAvgAggregateInputObjectSchema: z.ZodType<Prisma.ListaPvpDetAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetAvgAggregateInputType>;
export const ListaPvpDetAvgAggregateInputObjectZodSchema = makeSchema();
