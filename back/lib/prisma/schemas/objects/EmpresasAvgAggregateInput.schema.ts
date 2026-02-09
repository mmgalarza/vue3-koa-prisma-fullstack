import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idEmpresa: z.literal(true).optional()
}).strict();
export const EmpresasAvgAggregateInputObjectSchema: z.ZodType<Prisma.EmpresasAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasAvgAggregateInputType>;
export const EmpresasAvgAggregateInputObjectZodSchema = makeSchema();
