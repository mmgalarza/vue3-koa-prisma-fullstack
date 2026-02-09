import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { EmpresasScalarRelationFilterObjectSchema as EmpresasScalarRelationFilterObjectSchema } from './EmpresasScalarRelationFilter.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema';
import { RegistroListRelationFilterObjectSchema as RegistroListRelationFilterObjectSchema } from './RegistroListRelationFilter.schema'

const actividadwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ActividadWhereInputObjectSchema), z.lazy(() => ActividadWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ActividadWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ActividadWhereInputObjectSchema), z.lazy(() => ActividadWhereInputObjectSchema).array()]).optional(),
  idActividad: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(80)]).optional(),
  inicio: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  fin: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  estado: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(20)]).optional(),
  activa: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  empresa: z.union([z.lazy(() => EmpresasScalarRelationFilterObjectSchema), z.lazy(() => EmpresasWhereInputObjectSchema)]).optional(),
  registros: z.lazy(() => RegistroListRelationFilterObjectSchema).optional()
}).strict();
export const ActividadWhereInputObjectSchema: z.ZodType<Prisma.ActividadWhereInput> = actividadwhereinputSchema as unknown as z.ZodType<Prisma.ActividadWhereInput>;
export const ActividadWhereInputObjectZodSchema = actividadwhereinputSchema;
