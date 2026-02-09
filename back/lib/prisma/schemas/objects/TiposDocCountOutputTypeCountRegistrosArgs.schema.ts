import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereInputObjectSchema as RegistroWhereInputObjectSchema } from './RegistroWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroWhereInputObjectSchema).optional()
}).strict();
export const TiposDocCountOutputTypeCountRegistrosArgsObjectSchema = makeSchema();
export const TiposDocCountOutputTypeCountRegistrosArgsObjectZodSchema = makeSchema();
