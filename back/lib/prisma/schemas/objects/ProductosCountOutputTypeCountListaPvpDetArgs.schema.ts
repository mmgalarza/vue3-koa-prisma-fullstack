import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetWhereInputObjectSchema as ListaPvpDetWhereInputObjectSchema } from './ListaPvpDetWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpDetWhereInputObjectSchema).optional()
}).strict();
export const ProductosCountOutputTypeCountListaPvpDetArgsObjectSchema = makeSchema();
export const ProductosCountOutputTypeCountListaPvpDetArgsObjectZodSchema = makeSchema();
