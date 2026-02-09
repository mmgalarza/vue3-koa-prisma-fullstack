import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idEmpresa: z.literal(true).optional()
}).strict();
export const EmpresasSumAggregateInputObjectSchema: z.ZodType<Prisma.EmpresasSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasSumAggregateInputType>;
export const EmpresasSumAggregateInputObjectZodSchema = makeSchema();
