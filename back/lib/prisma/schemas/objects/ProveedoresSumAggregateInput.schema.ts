import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idProveedor: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const ProveedoresSumAggregateInputObjectSchema: z.ZodType<Prisma.ProveedoresSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresSumAggregateInputType>;
export const ProveedoresSumAggregateInputObjectZodSchema = makeSchema();
