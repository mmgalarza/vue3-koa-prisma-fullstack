import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCountOutputTypeCountUsuarioEmpresasArgsObjectSchema as EmpresasCountOutputTypeCountUsuarioEmpresasArgsObjectSchema } from './EmpresasCountOutputTypeCountUsuarioEmpresasArgs.schema';
import { EmpresasCountOutputTypeCountClientesArgsObjectSchema as EmpresasCountOutputTypeCountClientesArgsObjectSchema } from './EmpresasCountOutputTypeCountClientesArgs.schema';
import { EmpresasCountOutputTypeCountProveedoresArgsObjectSchema as EmpresasCountOutputTypeCountProveedoresArgsObjectSchema } from './EmpresasCountOutputTypeCountProveedoresArgs.schema';
import { EmpresasCountOutputTypeCountAlmacenesArgsObjectSchema as EmpresasCountOutputTypeCountAlmacenesArgsObjectSchema } from './EmpresasCountOutputTypeCountAlmacenesArgs.schema';
import { EmpresasCountOutputTypeCountVentasArgsObjectSchema as EmpresasCountOutputTypeCountVentasArgsObjectSchema } from './EmpresasCountOutputTypeCountVentasArgs.schema';
import { EmpresasCountOutputTypeCountCategoriasArgsObjectSchema as EmpresasCountOutputTypeCountCategoriasArgsObjectSchema } from './EmpresasCountOutputTypeCountCategoriasArgs.schema';
import { EmpresasCountOutputTypeCountActividadesArgsObjectSchema as EmpresasCountOutputTypeCountActividadesArgsObjectSchema } from './EmpresasCountOutputTypeCountActividadesArgs.schema';
import { EmpresasCountOutputTypeCountListasPvpArgsObjectSchema as EmpresasCountOutputTypeCountListasPvpArgsObjectSchema } from './EmpresasCountOutputTypeCountListasPvpArgs.schema'

const makeSchema = () => z.object({
  UsuarioEmpresas: z.union([z.boolean(), z.lazy(() => EmpresasCountOutputTypeCountUsuarioEmpresasArgsObjectSchema)]).optional(),
  clientes: z.union([z.boolean(), z.lazy(() => EmpresasCountOutputTypeCountClientesArgsObjectSchema)]).optional(),
  proveedores: z.union([z.boolean(), z.lazy(() => EmpresasCountOutputTypeCountProveedoresArgsObjectSchema)]).optional(),
  almacenes: z.union([z.boolean(), z.lazy(() => EmpresasCountOutputTypeCountAlmacenesArgsObjectSchema)]).optional(),
  ventas: z.union([z.boolean(), z.lazy(() => EmpresasCountOutputTypeCountVentasArgsObjectSchema)]).optional(),
  categorias: z.union([z.boolean(), z.lazy(() => EmpresasCountOutputTypeCountCategoriasArgsObjectSchema)]).optional(),
  actividades: z.union([z.boolean(), z.lazy(() => EmpresasCountOutputTypeCountActividadesArgsObjectSchema)]).optional(),
  listasPvp: z.union([z.boolean(), z.lazy(() => EmpresasCountOutputTypeCountListasPvpArgsObjectSchema)]).optional()
}).strict();
export const EmpresasCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.EmpresasCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCountOutputTypeSelect>;
export const EmpresasCountOutputTypeSelectObjectZodSchema = makeSchema();
