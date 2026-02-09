import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  idCliente: SortOrderSchema.optional(),
  idEmpresa: SortOrderSchema.optional()
}).strict();
export const ClientesAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ClientesAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ClientesAvgOrderByAggregateInput>;
export const ClientesAvgOrderByAggregateInputObjectZodSchema = makeSchema();
