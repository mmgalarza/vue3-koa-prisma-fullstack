import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idTipoDoc: z.literal(true).optional(),
  nombre: z.literal(true).optional(),
  movAlmacen: z.literal(true).optional(),
  idTalon: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TiposDocCountAggregateInputObjectSchema: z.ZodType<Prisma.TiposDocCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocCountAggregateInputType>;
export const TiposDocCountAggregateInputObjectZodSchema = makeSchema();
