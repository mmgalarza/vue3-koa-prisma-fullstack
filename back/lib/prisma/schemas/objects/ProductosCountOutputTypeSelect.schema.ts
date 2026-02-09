import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProductosCountOutputTypeCountListasDetArgsObjectSchema as ProductosCountOutputTypeCountListasDetArgsObjectSchema } from './ProductosCountOutputTypeCountListasDetArgs.schema';
import { ProductosCountOutputTypeCountListaPvpDetArgsObjectSchema as ProductosCountOutputTypeCountListaPvpDetArgsObjectSchema } from './ProductosCountOutputTypeCountListaPvpDetArgs.schema';
import { ProductosCountOutputTypeCountVentaDetArgsObjectSchema as ProductosCountOutputTypeCountVentaDetArgsObjectSchema } from './ProductosCountOutputTypeCountVentaDetArgs.schema';
import { ProductosCountOutputTypeCountRegistroDetArgsObjectSchema as ProductosCountOutputTypeCountRegistroDetArgsObjectSchema } from './ProductosCountOutputTypeCountRegistroDetArgs.schema'

const makeSchema = () => z.object({
  listasDet: z.union([z.boolean(), z.lazy(() => ProductosCountOutputTypeCountListasDetArgsObjectSchema)]).optional(),
  listaPvpDet: z.union([z.boolean(), z.lazy(() => ProductosCountOutputTypeCountListaPvpDetArgsObjectSchema)]).optional(),
  ventaDet: z.union([z.boolean(), z.lazy(() => ProductosCountOutputTypeCountVentaDetArgsObjectSchema)]).optional(),
  registroDet: z.union([z.boolean(), z.lazy(() => ProductosCountOutputTypeCountRegistroDetArgsObjectSchema)]).optional()
}).strict();
export const ProductosCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ProductosCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductosCountOutputTypeSelect>;
export const ProductosCountOutputTypeSelectObjectZodSchema = makeSchema();
