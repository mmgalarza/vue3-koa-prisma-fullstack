import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesWhereInputObjectSchema as ClientesWhereInputObjectSchema } from './ClientesWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ClientesWhereInputObjectSchema).optional()
}).strict();
export const EmpresasCountOutputTypeCountClientesArgsObjectSchema = makeSchema();
export const EmpresasCountOutputTypeCountClientesArgsObjectZodSchema = makeSchema();
