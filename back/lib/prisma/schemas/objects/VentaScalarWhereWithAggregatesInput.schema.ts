import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const ventascalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => VentaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VentaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VentaScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VentaScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => VentaScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  idVenta: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  estado: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string().max(20)]).optional(),
  idEmpresa: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idCliente: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  idListaPvp: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const VentaScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.VentaScalarWhereWithAggregatesInput> = ventascalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.VentaScalarWhereWithAggregatesInput>;
export const VentaScalarWhereWithAggregatesInputObjectZodSchema = ventascalarwherewithaggregatesinputSchema;
