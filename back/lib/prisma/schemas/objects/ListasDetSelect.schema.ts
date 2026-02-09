import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasArgsObjectSchema as ListasArgsObjectSchema } from './ListasArgs.schema';
import { ProductosArgsObjectSchema as ProductosArgsObjectSchema } from './ProductosArgs.schema'

const makeSchema = () => z.object({
  idListaDet: z.boolean().optional(),
  idLista: z.boolean().optional(),
  idProducto: z.boolean().optional(),
  precio: z.boolean().optional(),
  descuento: z.boolean().optional(),
  lista: z.union([z.boolean(), z.lazy(() => ListasArgsObjectSchema)]).optional(),
  producto: z.union([z.boolean(), z.lazy(() => ProductosArgsObjectSchema)]).optional()
}).strict();
export const ListasDetSelectObjectSchema: z.ZodType<Prisma.ListasDetSelect> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetSelect>;
export const ListasDetSelectObjectZodSchema = makeSchema();
