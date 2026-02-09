import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocFindManySchema as TiposDocFindManySchema } from '../findManyTiposDoc.schema';
import { TalonariosCountOutputTypeArgsObjectSchema as TalonariosCountOutputTypeArgsObjectSchema } from './TalonariosCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  tiposDoc: z.union([z.boolean(), z.lazy(() => TiposDocFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TalonariosCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TalonariosIncludeObjectSchema: z.ZodType<Prisma.TalonariosInclude> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosInclude>;
export const TalonariosIncludeObjectZodSchema = makeSchema();
