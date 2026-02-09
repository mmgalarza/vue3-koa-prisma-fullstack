import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetWhereInputObjectSchema as RegistroDetWhereInputObjectSchema } from './RegistroDetWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetWhereInputObjectSchema).optional()
}).strict();
export const AlmacenesCountOutputTypeCountRegistrosDetArgsObjectSchema = makeSchema();
export const AlmacenesCountOutputTypeCountRegistrosDetArgsObjectZodSchema = makeSchema();
