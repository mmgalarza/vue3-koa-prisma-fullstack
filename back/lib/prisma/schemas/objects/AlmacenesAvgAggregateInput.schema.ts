import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idAlmacen: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const AlmacenesAvgAggregateInputObjectSchema: z.ZodType<Prisma.AlmacenesAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesAvgAggregateInputType>;
export const AlmacenesAvgAggregateInputObjectZodSchema = makeSchema();
