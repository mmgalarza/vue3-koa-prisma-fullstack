import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './ListaPvpWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpWhereInputObjectSchema).optional()
}).strict();
export const EmpresasCountOutputTypeCountListasPvpArgsObjectSchema = makeSchema();
export const EmpresasCountOutputTypeCountListasPvpArgsObjectZodSchema = makeSchema();
