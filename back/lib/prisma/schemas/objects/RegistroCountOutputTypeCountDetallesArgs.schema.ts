import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetWhereInputObjectSchema as RegistroDetWhereInputObjectSchema } from './RegistroDetWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetWhereInputObjectSchema).optional()
}).strict();
export const RegistroCountOutputTypeCountDetallesArgsObjectSchema = makeSchema();
export const RegistroCountOutputTypeCountDetallesArgsObjectZodSchema = makeSchema();
