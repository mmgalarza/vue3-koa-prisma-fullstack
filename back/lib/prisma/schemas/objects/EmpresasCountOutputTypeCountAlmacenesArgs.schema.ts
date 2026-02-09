import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesWhereInputObjectSchema as AlmacenesWhereInputObjectSchema } from './AlmacenesWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AlmacenesWhereInputObjectSchema).optional()
}).strict();
export const EmpresasCountOutputTypeCountAlmacenesArgsObjectSchema = makeSchema();
export const EmpresasCountOutputTypeCountAlmacenesArgsObjectZodSchema = makeSchema();
