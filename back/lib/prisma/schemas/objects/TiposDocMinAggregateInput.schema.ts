import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idTipoDoc: z.literal(true).optional(),
  nombre: z.literal(true).optional(),
  movAlmacen: z.literal(true).optional(),
  idTalon: z.literal(true).optional()
}).strict();
export const TiposDocMinAggregateInputObjectSchema: z.ZodType<Prisma.TiposDocMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocMinAggregateInputType>;
export const TiposDocMinAggregateInputObjectZodSchema = makeSchema();
