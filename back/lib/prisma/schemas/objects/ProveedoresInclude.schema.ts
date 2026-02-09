import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema';
import { ListasFindManySchema as ListasFindManySchema } from '../findManyListas.schema';
import { ProveedoresCountOutputTypeArgsObjectSchema as ProveedoresCountOutputTypeArgsObjectSchema } from './ProveedoresCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional(),
  listas: z.union([z.boolean(), z.lazy(() => ListasFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ProveedoresCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ProveedoresIncludeObjectSchema: z.ZodType<Prisma.ProveedoresInclude> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresInclude>;
export const ProveedoresIncludeObjectZodSchema = makeSchema();
