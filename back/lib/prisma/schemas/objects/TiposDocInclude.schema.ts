import * as z from 'zod';
import type { Prisma } from '../../client';
import { TalonariosArgsObjectSchema as TalonariosArgsObjectSchema } from './TalonariosArgs.schema';
import { RegistroFindManySchema as RegistroFindManySchema } from '../findManyRegistro.schema';
import { TiposDocCountOutputTypeArgsObjectSchema as TiposDocCountOutputTypeArgsObjectSchema } from './TiposDocCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  talonario: z.union([z.boolean(), z.lazy(() => TalonariosArgsObjectSchema)]).optional(),
  registros: z.union([z.boolean(), z.lazy(() => RegistroFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TiposDocCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TiposDocIncludeObjectSchema: z.ZodType<Prisma.TiposDocInclude> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocInclude>;
export const TiposDocIncludeObjectZodSchema = makeSchema();
