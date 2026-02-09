import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetWhereInputObjectSchema as ListasDetWhereInputObjectSchema } from './ListasDetWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasDetWhereInputObjectSchema).optional()
}).strict();
export const ProductosCountOutputTypeCountListasDetArgsObjectSchema = makeSchema();
export const ProductosCountOutputTypeCountListasDetArgsObjectZodSchema = makeSchema();
