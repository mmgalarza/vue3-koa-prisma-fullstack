import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasWhereInputObjectSchema as ListasWhereInputObjectSchema } from './ListasWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasWhereInputObjectSchema).optional()
}).strict();
export const ProveedoresCountOutputTypeCountListasArgsObjectSchema = makeSchema();
export const ProveedoresCountOutputTypeCountListasArgsObjectZodSchema = makeSchema();
