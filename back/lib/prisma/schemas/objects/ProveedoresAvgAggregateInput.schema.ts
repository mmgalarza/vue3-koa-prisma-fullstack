import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idProveedor: z.literal(true).optional(),
  idEmpresa: z.literal(true).optional()
}).strict();
export const ProveedoresAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProveedoresAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresAvgAggregateInputType>;
export const ProveedoresAvgAggregateInputObjectZodSchema = makeSchema();
