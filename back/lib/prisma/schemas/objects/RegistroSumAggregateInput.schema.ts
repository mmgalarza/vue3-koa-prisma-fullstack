import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idRegistro: z.literal(true).optional(),
  idVenta: z.literal(true).optional(),
  idActividad: z.literal(true).optional()
}).strict();
export const RegistroSumAggregateInputObjectSchema: z.ZodType<Prisma.RegistroSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.RegistroSumAggregateInputType>;
export const RegistroSumAggregateInputObjectZodSchema = makeSchema();
