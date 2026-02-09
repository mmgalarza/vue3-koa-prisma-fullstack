import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema';
import { RegistroFindManySchema as RegistroFindManySchema } from '../findManyRegistro.schema';
import { ActividadCountOutputTypeArgsObjectSchema as ActividadCountOutputTypeArgsObjectSchema } from './ActividadCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional(),
  registros: z.union([z.boolean(), z.lazy(() => RegistroFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ActividadCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ActividadIncludeObjectSchema: z.ZodType<Prisma.ActividadInclude> = makeSchema() as unknown as z.ZodType<Prisma.ActividadInclude>;
export const ActividadIncludeObjectZodSchema = makeSchema();
