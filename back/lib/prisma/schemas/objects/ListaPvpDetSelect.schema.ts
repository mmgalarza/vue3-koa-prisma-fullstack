import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpArgsObjectSchema as ListaPvpArgsObjectSchema } from './ListaPvpArgs.schema';
import { ProductosArgsObjectSchema as ProductosArgsObjectSchema } from './ProductosArgs.schema'

const makeSchema = () => z.object({
  idListaPvpDet: z.boolean().optional(),
  idListaPvp: z.boolean().optional(),
  idProducto: z.boolean().optional(),
  precioVenta: z.boolean().optional(),
  listaPvp: z.union([z.boolean(), z.lazy(() => ListaPvpArgsObjectSchema)]).optional(),
  producto: z.union([z.boolean(), z.lazy(() => ProductosArgsObjectSchema)]).optional()
}).strict();
export const ListaPvpDetSelectObjectSchema: z.ZodType<Prisma.ListaPvpDetSelect> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetSelect>;
export const ListaPvpDetSelectObjectZodSchema = makeSchema();
