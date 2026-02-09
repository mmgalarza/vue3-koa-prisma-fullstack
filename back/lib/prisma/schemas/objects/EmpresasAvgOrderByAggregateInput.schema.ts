import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const EmpresasAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.EmpresasAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasAvgOrderByAggregateInput>;
export const EmpresasAvgOrderByAggregateInputObjectZodSchema = makeSchema();
