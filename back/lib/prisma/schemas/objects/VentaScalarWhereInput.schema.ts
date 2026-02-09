import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const ventascalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => VentaScalarWhereInputObjectSchema), z.lazy(() => VentaScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => VentaScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => VentaScalarWhereInputObjectSchema), z.lazy(() => VentaScalarWhereInputObjectSchema).array()]).optional(),
  idVenta: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  fecha: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  estado: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idCliente: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idListaPvp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional()
}).strict();
export const VentaScalarWhereInputObjectSchema: z.ZodType<Prisma.VentaScalarWhereInput> = ventascalarwhereinputSchema as unknown as z.ZodType<Prisma.VentaScalarWhereInput>;
export const VentaScalarWhereInputObjectZodSchema = ventascalarwhereinputSchema;
