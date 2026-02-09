import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetWhereInputObjectSchema as VentaDetWhereInputObjectSchema } from './VentaDetWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaDetWhereInputObjectSchema).optional()
}).strict();
export const ProductosCountOutputTypeCountVentaDetArgsObjectSchema = makeSchema();
export const ProductosCountOutputTypeCountVentaDetArgsObjectZodSchema = makeSchema();
