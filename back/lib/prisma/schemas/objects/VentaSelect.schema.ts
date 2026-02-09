import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasArgsObjectSchema as EmpresasArgsObjectSchema } from './EmpresasArgs.schema';
import { ClientesArgsObjectSchema as ClientesArgsObjectSchema } from './ClientesArgs.schema';
import { ListaPvpArgsObjectSchema as ListaPvpArgsObjectSchema } from './ListaPvpArgs.schema';
import { VentaDetFindManySchema as VentaDetFindManySchema } from '../findManyVentaDet.schema';
import { FacturaArgsObjectSchema as FacturaArgsObjectSchema } from './FacturaArgs.schema';
import { RegistroFindManySchema as RegistroFindManySchema } from '../findManyRegistro.schema';
import { VentaCountOutputTypeArgsObjectSchema as VentaCountOutputTypeArgsObjectSchema } from './VentaCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  idVenta: z.boolean().optional(),
  fecha: z.boolean().optional(),
  estado: z.boolean().optional(),
  idEmpresa: z.boolean().optional(),
  idCliente: z.boolean().optional(),
  idListaPvp: z.boolean().optional(),
  empresa: z.union([z.boolean(), z.lazy(() => EmpresasArgsObjectSchema)]).optional(),
  cliente: z.union([z.boolean(), z.lazy(() => ClientesArgsObjectSchema)]).optional(),
  listaPvp: z.union([z.boolean(), z.lazy(() => ListaPvpArgsObjectSchema)]).optional(),
  detalles: z.union([z.boolean(), z.lazy(() => VentaDetFindManySchema)]).optional(),
  factura: z.union([z.boolean(), z.lazy(() => FacturaArgsObjectSchema)]).optional(),
  registros: z.union([z.boolean(), z.lazy(() => RegistroFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => VentaCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const VentaSelectObjectSchema: z.ZodType<Prisma.VentaSelect> = makeSchema() as unknown as z.ZodType<Prisma.VentaSelect>;
export const VentaSelectObjectZodSchema = makeSchema();
