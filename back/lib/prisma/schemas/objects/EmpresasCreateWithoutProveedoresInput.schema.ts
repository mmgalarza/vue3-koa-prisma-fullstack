import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaCreateNestedManyWithoutEmpresaInputObjectSchema as UsuarioEmpresaCreateNestedManyWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaCreateNestedManyWithoutEmpresaInput.schema';
import { ClientesCreateNestedManyWithoutEmpresaInputObjectSchema as ClientesCreateNestedManyWithoutEmpresaInputObjectSchema } from './ClientesCreateNestedManyWithoutEmpresaInput.schema';
import { AlmacenesCreateNestedManyWithoutEmpresaInputObjectSchema as AlmacenesCreateNestedManyWithoutEmpresaInputObjectSchema } from './AlmacenesCreateNestedManyWithoutEmpresaInput.schema';
import { VentaCreateNestedManyWithoutEmpresaInputObjectSchema as VentaCreateNestedManyWithoutEmpresaInputObjectSchema } from './VentaCreateNestedManyWithoutEmpresaInput.schema';
import { CategoriasCreateNestedManyWithoutEmpresaInputObjectSchema as CategoriasCreateNestedManyWithoutEmpresaInputObjectSchema } from './CategoriasCreateNestedManyWithoutEmpresaInput.schema';
import { ActividadCreateNestedManyWithoutEmpresaInputObjectSchema as ActividadCreateNestedManyWithoutEmpresaInputObjectSchema } from './ActividadCreateNestedManyWithoutEmpresaInput.schema';
import { ListaPvpCreateNestedManyWithoutEmpresaInputObjectSchema as ListaPvpCreateNestedManyWithoutEmpresaInputObjectSchema } from './ListaPvpCreateNestedManyWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  nombre: z.string().max(100),
  email: z.string().max(100).optional().nullable(),
  calle: z.string().optional(),
  numero: z.string().optional().nullable(),
  ciudad: z.string().optional(),
  provincia: z.string().optional(),
  codigoPostal: z.string().optional(),
  pais: z.string().optional(),
  contacto: z.string().max(80).optional().nullable(),
  activo: z.boolean().optional(),
  UsuarioEmpresas: z.lazy(() => UsuarioEmpresaCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  clientes: z.lazy(() => ClientesCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  almacenes: z.lazy(() => AlmacenesCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  ventas: z.lazy(() => VentaCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  categorias: z.lazy(() => CategoriasCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  actividades: z.lazy(() => ActividadCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  listasPvp: z.lazy(() => ListaPvpCreateNestedManyWithoutEmpresaInputObjectSchema).optional()
}).strict();
export const EmpresasCreateWithoutProveedoresInputObjectSchema: z.ZodType<Prisma.EmpresasCreateWithoutProveedoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateWithoutProveedoresInput>;
export const EmpresasCreateWithoutProveedoresInputObjectZodSchema = makeSchema();
