import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idActividad: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const ActividadAvgAggregateInputObjectSchema: z.ZodType<Prisma.ActividadAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActividadAvgAggregateInputType>;
export const ActividadAvgAggregateInputObjectZodSchema = makeSchema();
