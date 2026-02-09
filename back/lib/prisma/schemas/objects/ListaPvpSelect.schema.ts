import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema';
import { ListaPvpDetFindManySchema as ListaPvpDetFindManySchema } from '../findManyListaPvpDet.schema';
import { VentaFindManySchema as VentaFindManySchema } from '../findManyVenta.schema';
import { ListaPvpCountOutputTypeArgsObjectSchema as ListaPvpCountOutputTypeArgsObjectSchema } from './ListaPvpCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  idListaPvp: z.boolean().optional(),
  nombre: z.boolean().optional(),
  criterio: z.boolean().optional(),
  fechaGen: z.boolean().optional(),
  idEmpresa: z.boolean().optional(),
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional(),
  detalles: z.union([z.boolean(), z.lazy(() => ListaPvpDetFindManySchema)]).optional(),
  ventas: z.union([z.boolean(), z.lazy(() => VentaFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ListaPvpCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ListaPvpSelectObjectSchema: z.ZodType<Prisma.ListaPvpSelect> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpSelect>;
export const ListaPvpSelectObjectZodSchema = makeSchema();
