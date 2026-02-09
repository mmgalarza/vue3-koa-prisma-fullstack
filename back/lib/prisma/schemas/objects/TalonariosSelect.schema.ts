import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocFindManySchema as TiposDocFindManySchema } from '../findManyTiposDoc.schema';
import { TalonariosCountOutputTypeArgsObjectSchema as TalonariosCountOutputTypeArgsObjectSchema } from './TalonariosCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  idTalon: z.boolean().optional(),
  nombre: z.boolean().optional(),
  inicio: z.boolean().optional(),
  fin: z.boolean().optional(),
  actual: z.boolean().optional(),
  tiposDoc: z.union([z.boolean(), z.lazy(() => TiposDocFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => TalonariosCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const TalonariosSelectObjectSchema: z.ZodType<Prisma.TalonariosSelect> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosSelect>;
export const TalonariosSelectObjectZodSchema = makeSchema();
