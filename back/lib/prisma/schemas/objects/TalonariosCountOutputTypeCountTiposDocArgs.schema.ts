import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocWhereInputObjectSchema as TiposDocWhereInputObjectSchema } from './TiposDocWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TiposDocWhereInputObjectSchema).optional()
}).strict();
export const TalonariosCountOutputTypeCountTiposDocArgsObjectSchema = makeSchema();
export const TalonariosCountOutputTypeCountTiposDocArgsObjectZodSchema = makeSchema();
