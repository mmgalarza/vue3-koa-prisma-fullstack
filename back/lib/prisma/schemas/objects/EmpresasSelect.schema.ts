import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaFindManySchema as UsuarioEmpresaFindManySchema } from '../findManyUsuarioEmpresa.schema';
import { ClientesFindManySchema as ClientesFindManySchema } from '../findManyClientes.schema';
import { ProveedoresFindManySchema as ProveedoresFindManySchema } from '../findManyProveedores.schema';
import { AlmacenesFindManySchema as AlmacenesFindManySchema } from '../findManyAlmacenes.schema';
import { VentaFindManySchema as VentaFindManySchema } from '../findManyVenta.schema';
import { CategoriasFindManySchema as CategoriasFindManySchema } from '../findManyCategorias.schema';
import { ActividadFindManySchema as ActividadFindManySchema } from '../findManyActividad.schema';
import { ListaPvpFindManySchema as ListaPvpFindManySchema } from '../findManyListaPvp.schema';
import { EmpresasCountOutputTypeArgsObjectSchema as EmpresasCountOutputTypeArgsObjectSchema } from './EmpresasCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  idEmpresa: z.boolean().optional(),
  nombre: z.boolean().optional(),
  email: z.boolean().optional(),
  calle: z.boolean().optional(),
  numero: z.boolean().optional(),
  ciudad: z.boolean().optional(),
  provincia: z.boolean().optional(),
  codigoPostal: z.boolean().optional(),
  pais: z.boolean().optional(),
  contacto: z.boolean().optional(),
  activo: z.boolean().optional(),
  UsuarioEmpresas: z.union([z.boolean(), z.lazy(() => UsuarioEmpresaFindManySchema)]).optional(),
  clientes: z.union([z.boolean(), z.lazy(() => ClientesFindManySchema)]).optional(),
  proveedores: z.union([z.boolean(), z.lazy(() => ProveedoresFindManySchema)]).optional(),
  almacenes: z.union([z.boolean(), z.lazy(() => AlmacenesFindManySchema)]).optional(),
  ventas: z.union([z.boolean(), z.lazy(() => VentaFindManySchema)]).optional(),
  categorias: z.union([z.boolean(), z.lazy(() => CategoriasFindManySchema)]).optional(),
  actividades: z.union([z.boolean(), z.lazy(() => ActividadFindManySchema)]).optional(),
  listasPvp: z.union([z.boolean(), z.lazy(() => ListaPvpFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => EmpresasCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const EmpresasSelectObjectSchema: z.ZodType<Prisma.EmpresasSelect> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasSelect>;
export const EmpresasSelectObjectZodSchema = makeSchema();
