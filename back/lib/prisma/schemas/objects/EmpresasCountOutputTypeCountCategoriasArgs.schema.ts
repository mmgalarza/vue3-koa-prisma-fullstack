import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasWhereInputObjectSchema as CategoriasWhereInputObjectSchema } from './CategoriasWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoriasWhereInputObjectSchema).optional()
}).strict();
export const EmpresasCountOutputTypeCountCategoriasArgsObjectSchema = makeSchema();
export const EmpresasCountOutputTypeCountCategoriasArgsObjectZodSchema = makeSchema();
