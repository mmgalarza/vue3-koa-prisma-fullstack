import * as z from 'zod';
import type { Prisma } from '../../client';
import { TalonariosCountOutputTypeCountTiposDocArgsObjectSchema as TalonariosCountOutputTypeCountTiposDocArgsObjectSchema } from './TalonariosCountOutputTypeCountTiposDocArgs.schema'

const makeSchema = () => z.object({
  tiposDoc: z.union([z.boolean(), z.lazy(() => TalonariosCountOutputTypeCountTiposDocArgsObjectSchema)]).optional()
}).strict();
export const TalonariosCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.TalonariosCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosCountOutputTypeSelect>;
export const TalonariosCountOutputTypeSelectObjectZodSchema = makeSchema();
