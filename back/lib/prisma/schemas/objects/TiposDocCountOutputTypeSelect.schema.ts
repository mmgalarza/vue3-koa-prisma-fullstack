import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocCountOutputTypeCountRegistrosArgsObjectSchema as TiposDocCountOutputTypeCountRegistrosArgsObjectSchema } from './TiposDocCountOutputTypeCountRegistrosArgs.schema'

const makeSchema = () => z.object({
  registros: z.union([z.boolean(), z.lazy(() => TiposDocCountOutputTypeCountRegistrosArgsObjectSchema)]).optional()
}).strict();
export const TiposDocCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TiposDocCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocCountOutputTypeSelect>;
export const TiposDocCountOutputTypeSelectObjectZodSchema = makeSchema();
