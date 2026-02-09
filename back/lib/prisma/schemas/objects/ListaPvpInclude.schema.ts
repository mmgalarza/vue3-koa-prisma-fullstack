import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema';
import { ListaPvpDetFindManySchema as ListaPvpDetFindManySchema } from '../findManyListaPvpDet.schema';
import { VentaFindManySchema as VentaFindManySchema } from '../findManyVenta.schema';
import { ListaPvpCountOutputTypeArgsObjectSchema as ListaPvpCountOutputTypeArgsObjectSchema } from './ListaPvpCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional(),
  detalles: z.union([z.boolean(), z.lazy(() => ListaPvpDetFindManySchema)]).optional(),
  ventas: z.union([z.boolean(), z.lazy(() => VentaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ListaPvpCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ListaPvpIncludeObjectSchema: z.ZodType<Prisma.ListaPvpInclude> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpInclude>;
export const ListaPvpIncludeObjectZodSchema = makeSchema();
