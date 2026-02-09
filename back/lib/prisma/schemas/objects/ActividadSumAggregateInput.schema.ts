import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idActividad: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const ActividadSumAggregateInputObjectSchema: z.ZodType<Prisma.ActividadSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ActividadSumAggregateInputType>;
export const ActividadSumAggregateInputObjectZodSchema = makeSchema();
