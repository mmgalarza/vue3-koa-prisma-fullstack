import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroArgsObjectSchema as RegistroArgsObjectSchema } from './RegistroArgs.schema';
import { ProductosArgsObjectSchema as ProductosArgsObjectSchema } from './ProductosArgs.schema';
import { AlmacenesArgsObjectSchema as AlmacenesArgsObjectSchema } from './AlmacenesArgs.schema'

const makeSchema = () => z.object({
  idRegistroDet: z.boolean().optional(),
  idRegistro: z.boolean().optional(),
  idProducto: z.boolean().optional(),
  idAlmacen: z.boolean().optional(),
  flujoAlmacen: z.boolean().optional(),
  cantidad: z.boolean().optional(),
  registro: z.union([z.boolean(), z.lazy(() => RegistroArgsObjectSchema)]).optional(),
  producto: z.union([z.boolean(), z.lazy(() => ProductosArgsObjectSchema)]).optional(),
  almacen: z.union([z.boolean(), z.lazy(() => AlmacenesArgsObjectSchema)]).optional()
}).strict();
export const RegistroDetSelectObjectSchema: z.ZodType<Prisma.RegistroDetSelect> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetSelect>;
export const RegistroDetSelectObjectZodSchema = makeSchema();
