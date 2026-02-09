import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereInputObjectSchema).optional()
}).strict();
export const EmpresasCountOutputTypeCountVentasArgsObjectSchema = makeSchema();
export const EmpresasCountOutputTypeCountVentasArgsObjectZodSchema = makeSchema();
