import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroArgsObjectSchema as RegistroArgsObjectSchema } from './RegistroArgs.schema';
import { ProductosArgsObjectSchema as ProductosArgsObjectSchema } from './ProductosArgs.schema';
import { AlmacenesArgsObjectSchema as AlmacenesArgsObjectSchema } from './AlmacenesArgs.schema'

const makeSchema = () => z.object({
  registro: z.union([z.boolean(), z.lazy(() => RegistroArgsObjectSchema)]).optional(),
  producto: z.union([z.boolean(), z.lazy(() => ProductosArgsObjectSchema)]).optional(),
  almacen: z.union([z.boolean(), z.lazy(() => AlmacenesArgsObjectSchema)]).optional()
}).strict();
export const RegistroDetIncludeObjectSchema: z.ZodType<Prisma.RegistroDetInclude> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetInclude>;
export const RegistroDetIncludeObjectZodSchema = makeSchema();
