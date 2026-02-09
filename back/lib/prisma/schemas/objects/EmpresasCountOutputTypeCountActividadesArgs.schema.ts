import * as z from 'zod';
import type { Prisma } from '../../client';
import { ActividadWhereInputObjectSchema as ActividadWhereInputObjectSchema } from './ActividadWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ActividadWhereInputObjectSchema).optional()
}).strict();
export const EmpresasCountOutputTypeCountActividadesArgsObjectSchema = makeSchema();
export const EmpresasCountOutputTypeCountActividadesArgsObjectZodSchema = makeSchema();
