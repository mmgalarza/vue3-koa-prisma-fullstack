import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const EmpresasSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EmpresasSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasSumOrderByAggregateInput>;
export const EmpresasSumOrderByAggregateInputObjectZodSchema = makeSchema();
