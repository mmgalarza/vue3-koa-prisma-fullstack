import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema';
import { VentaFindManySchema as VentaFindManySchema } from '../findManyVenta.schema';
import { ClientesCountOutputTypeArgsObjectSchema as ClientesCountOutputTypeArgsObjectSchema } from './ClientesCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional(),
  ventas: z.union([z.boolean(), z.lazy(() => VentaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ClientesCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ClientesIncludeObjectSchema: z.ZodType<Prisma.ClientesInclude> = makeSchema() as unknown as z.ZodType<Prisma.ClientesInclude>;
export const ClientesIncludeObjectZodSchema = makeSchema();
