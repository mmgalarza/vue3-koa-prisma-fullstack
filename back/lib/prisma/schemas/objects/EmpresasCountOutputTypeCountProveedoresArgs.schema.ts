import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresWhereInputObjectSchema as ProveedoresWhereInputObjectSchema } from './ProveedoresWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProveedoresWhereInputObjectSchema).optional()
}).strict();
export const EmpresasCountOutputTypeCountProveedoresArgsObjectSchema = makeSchema();
export const EmpresasCountOutputTypeCountProveedoresArgsObjectZodSchema = makeSchema();
