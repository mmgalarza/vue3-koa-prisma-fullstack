import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetWhereInputObjectSchema as ListaPvpDetWhereInputObjectSchema } from './ListaPvpDetWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpDetWhereInputObjectSchema).optional()
}).strict();
export const ListaPvpCountOutputTypeCountDetallesArgsObjectSchema = makeSchema();
export const ListaPvpCountOutputTypeCountDetallesArgsObjectZodSchema = makeSchema();
