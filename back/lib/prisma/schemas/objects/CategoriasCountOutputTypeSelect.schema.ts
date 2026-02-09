import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasCountOutputTypeCountProductosArgsObjectSchema as CategoriasCountOutputTypeCountProductosArgsObjectSchema } from './CategoriasCountOutputTypeCountProductosArgs.schema'

const makeSchema = () => z.object({
  productos: z.union([z.boolean(), z.lazy(() => CategoriasCountOutputTypeCountProductosArgsObjectSchema)]).optional()
}).strict();
export const CategoriasCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CategoriasCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasCountOutputTypeSelect>;
export const CategoriasCountOutputTypeSelectObjectZodSchema = makeSchema();
