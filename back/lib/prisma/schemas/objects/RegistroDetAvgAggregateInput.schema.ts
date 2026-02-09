import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idRegistroDet: z.literal(true).optional(),
  idRegistro: z.literal(true).optional(),
  idProducto: z.literal(true).optional(),
  idAlmacen: z.literal(true).optional(),
  cantidad: z.literal(true).optional()
}).strict();
export const RegistroDetAvgAggregateInputObjectSchema: z.ZodType<Prisma.RegistroDetAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetAvgAggregateInputType>;
export const RegistroDetAvgAggregateInputObjectZodSchema = makeSchema();
