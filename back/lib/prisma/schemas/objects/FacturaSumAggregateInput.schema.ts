import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idVenta: z.literal(true).optional(),
  neto: z.literal(true).optional(),
  iva: z.literal(true).optional(),
  total: z.literal(true).optional()
}).strict();
export const FacturaSumAggregateInputObjectSchema: z.ZodType<Prisma.FacturaSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FacturaSumAggregateInputType>;
export const FacturaSumAggregateInputObjectZodSchema = makeSchema();
