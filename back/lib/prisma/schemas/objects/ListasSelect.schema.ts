import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresArgsObjectSchema as ProveedoresArgsObjectSchema } from './ProveedoresArgs.schema';
import { ListasDetFindManySchema as ListasDetFindManySchema } from '../findManyListasDet.schema';
import { ListasCountOutputTypeArgsObjectSchema as ListasCountOutputTypeArgsObjectSchema } from './ListasCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  idLista: z.boolean().optional(),
  idProveedor: z.boolean().optional(),
  refNo: z.boolean().optional(),
  fecha: z.boolean().optional(),
  observacion: z.boolean().optional(),
  proveedor: z.union([z.boolean(), z.lazy(() => ProveedoresArgsObjectSchema)]).optional(),
  detalles: z.union([z.boolean(), z.lazy(() => ListasDetFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ListasCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ListasSelectObjectSchema: z.ZodType<Prisma.ListasSelect> = makeSchema() as unknown as z.ZodType<Prisma.ListasSelect>;
export const ListasSelectObjectZodSchema = makeSchema();
