import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { TiposDocListRelationFilterObjectSchema as TiposDocListRelationFilterObjectSchema } from './TiposDocListRelationFilter.schema'

const talonarioswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TalonariosWhereInputObjectSchema), z.lazy(() => TalonariosWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TalonariosWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TalonariosWhereInputObjectSchema), z.lazy(() => TalonariosWhereInputObjectSchema).array()]).optional(),
  idTalon: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(50)]).optional(),
  inicio: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  fin: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  actual: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  tiposDoc: z.lazy(() => TiposDocListRelationFilterObjectSchema).optional()
}).strict();
export const TalonariosWhereInputObjectSchema: z.ZodType<Prisma.TalonariosWhereInput> = talonarioswhereinputSchema as unknown as z.ZodType<Prisma.TalonariosWhereInput>;
export const TalonariosWhereInputObjectZodSchema = talonarioswhereinputSchema;
