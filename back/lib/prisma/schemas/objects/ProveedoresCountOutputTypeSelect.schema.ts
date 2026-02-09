import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresCountOutputTypeCountListasArgsObjectSchema as ProveedoresCountOutputTypeCountListasArgsObjectSchema } from './ProveedoresCountOutputTypeCountListasArgs.schema'

const makeSchema = () => z.object({
  listas: z.union([z.boolean(), z.lazy(() => ProveedoresCountOutputTypeCountListasArgsObjectSchema)]).optional()
}).strict();
export const ProveedoresCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProveedoresCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresCountOutputTypeSelect>;
export const ProveedoresCountOutputTypeSelectObjectZodSchema = makeSchema();
