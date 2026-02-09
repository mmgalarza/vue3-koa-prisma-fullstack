import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { UsuarioEmpresaListRelationFilterObjectSchema as UsuarioEmpresaListRelationFilterObjectSchema } from './UsuarioEmpresaListRelationFilter.schema';
import { ClientesListRelationFilterObjectSchema as ClientesListRelationFilterObjectSchema } from './ClientesListRelationFilter.schema';
import { ProveedoresListRelationFilterObjectSchema as ProveedoresListRelationFilterObjectSchema } from './ProveedoresListRelationFilter.schema';
import { AlmacenesListRelationFilterObjectSchema as AlmacenesListRelationFilterObjectSchema } from './AlmacenesListRelationFilter.schema';
import { VentaListRelationFilterObjectSchema as VentaListRelationFilterObjectSchema } from './VentaListRelationFilter.schema';
import { CategoriasListRelationFilterObjectSchema as CategoriasListRelationFilterObjectSchema } from './CategoriasListRelationFilter.schema';
import { ActividadListRelationFilterObjectSchema as ActividadListRelationFilterObjectSchema } from './ActividadListRelationFilter.schema';
import { ListaPvpListRelationFilterObjectSchema as ListaPvpListRelationFilterObjectSchema } from './ListaPvpListRelationFilter.schema'

const empresaswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => EmpresasWhereInputObjectSchema), z.lazy(() => EmpresasWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => EmpresasWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => EmpresasWhereInputObjectSchema), z.lazy(() => EmpresasWhereInputObjectSchema).array()]).optional(),
  idEmpresa: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  nombre: z.union([z.lazy(() => StringFilterObjectSchema), z.string().max(100)]).optional(),
  email: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(100)]).optional().nullable(),
  calle: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  numero: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  ciudad: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  provincia: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  codigoPostal: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  pais: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  contacto: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string().max(80)]).optional().nullable(),
  activo: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  UsuarioEmpresas: z.lazy(() => UsuarioEmpresaListRelationFilterObjectSchema).optional(),
  clientes: z.lazy(() => ClientesListRelationFilterObjectSchema).optional(),
  proveedores: z.lazy(() => ProveedoresListRelationFilterObjectSchema).optional(),
  almacenes: z.lazy(() => AlmacenesListRelationFilterObjectSchema).optional(),
  ventas: z.lazy(() => VentaListRelationFilterObjectSchema).optional(),
  categorias: z.lazy(() => CategoriasListRelationFilterObjectSchema).optional(),
  actividades: z.lazy(() => ActividadListRelationFilterObjectSchema).optional(),
  listasPvp: z.lazy(() => ListaPvpListRelationFilterObjectSchema).optional()
}).strict();
export const EmpresasWhereInputObjectSchema: z.ZodType<Prisma.EmpresasWhereInput> = empresaswhereinputSchema as unknown as z.ZodType<Prisma.EmpresasWhereInput>;
export const EmpresasWhereInputObjectZodSchema = empresaswhereinputSchema;
