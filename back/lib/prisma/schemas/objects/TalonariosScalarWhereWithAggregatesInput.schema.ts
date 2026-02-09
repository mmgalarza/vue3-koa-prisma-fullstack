import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const talonariosscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TalonariosScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TalonariosScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TalonariosScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TalonariosScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TalonariosScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idTalon: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(50)]).optional(),
  inicio: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  fin: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  actual: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const TalonariosScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TalonariosScalarWhereWithAggregatesInput> = talonariosscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TalonariosScalarWhereWithAggregatesInput>;
export const TalonariosScalarWhereWithAggregatesInputObjectZodSchema = talonariosscalarwherewithaggregatesinputSchema;
