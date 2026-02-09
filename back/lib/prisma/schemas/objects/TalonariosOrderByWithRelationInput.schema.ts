import * as z from 'zod';
import type { Prisma } from '../../client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TiposDocOrderByRelationAggregateInputObjectSchema as TiposDocOrderByRelationAggregateInputObjectSchema } from './TiposDocOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  idTalon: SortOrderSchema.optional(),
  nombre: SortOrderSchema.optional(),
  inicio: SortOrderSchema.optional(),
  fin: SortOrderSchema.optional(),
  actual: SortOrderSchema.optional(),
  tiposDoc: z.lazy(() => TiposDocOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const TalonariosOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.TalonariosOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosOrderByWithRelationInput>;
export const TalonariosOrderByWithRelationInputObjectZodSchema = makeSchema();
