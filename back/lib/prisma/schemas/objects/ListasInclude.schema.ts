import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresArgsObjectSchema as ProveedoresArgsObjectSchema } from './ProveedoresArgs.schema';
import { ListasDetFindManySchema as ListasDetFindManySchema } from '../findManyListasDet.schema';
import { ListasCountOutputTypeArgsObjectSchema as ListasCountOutputTypeArgsObjectSchema } from './ListasCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  proveedor: z.union([z.boolean(), z.lazy(() => ProveedoresArgsObjectSchema)]).optional(),
  detalles: z.union([z.boolean(), z.lazy(() => ListasDetFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ListasCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ListasIncludeObjectSchema: z.ZodType<Prisma.ListasInclude> = makeSchema() as unknown as z.ZodType<Prisma.ListasInclude>;
export const ListasIncludeObjectZodSchema = makeSchema();
