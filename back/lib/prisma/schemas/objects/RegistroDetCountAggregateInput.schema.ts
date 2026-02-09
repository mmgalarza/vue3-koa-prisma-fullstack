import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idRegistroDet: z.literal(true).optional(),
  idRegistro: z.literal(true).optional(),
  idProducto: z.literal(true).optional(),
  idAlmacen: z.literal(true).optional(),
  flujoAlmacen: z.literal(true).optional(),
  cantidad: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const RegistroDetCountAggregateInputObjectSchema: z.ZodType<Prisma.RegistroDetCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetCountAggregateInputType>;
export const RegistroDetCountAggregateInputObjectZodSchema = makeSchema();
