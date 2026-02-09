import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema as UsuarioEmpresaUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaUncheckedCreateNestedManyWithoutEmpresaInput.schema';
import { ClientesUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema as ClientesUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema } from './ClientesUncheckedCreateNestedManyWithoutEmpresaInput.schema';
import { ProveedoresUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema as ProveedoresUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema } from './ProveedoresUncheckedCreateNestedManyWithoutEmpresaInput.schema';
import { AlmacenesUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema as AlmacenesUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema } from './AlmacenesUncheckedCreateNestedManyWithoutEmpresaInput.schema';
import { VentaUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema as VentaUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema } from './VentaUncheckedCreateNestedManyWithoutEmpresaInput.schema';
import { ActividadUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema as ActividadUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema } from './ActividadUncheckedCreateNestedManyWithoutEmpresaInput.schema';
import { ListaPvpUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema as ListaPvpUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema } from './ListaPvpUncheckedCreateNestedManyWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  idEmpresa: z.number().int().optional(),
  nombre: z.string(),
  email: z.string().optional().nullable(),
  calle: z.string().optional(),
  numero: z.string().optional().nullable(),
  ciudad: z.string().optional(),
  provincia: z.string().optional(),
  codigoPostal: z.string().optional(),
  pais: z.string().optional(),
  contacto: z.string().optional().nullable(),
  activo: z.boolean().optional(),
  UsuarioEmpresas: z.lazy(() => UsuarioEmpresaUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  clientes: z.lazy(() => ClientesUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  proveedores: z.lazy(() => ProveedoresUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  almacenes: z.lazy(() => AlmacenesUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  ventas: z.lazy(() => VentaUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  actividades: z.lazy(() => ActividadUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  listasPvp: z.lazy(() => ListaPvpUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional()
}).strict();
export const EmpresasUncheckedCreateWithoutCategoriasInputObjectSchema: z.ZodType<Prisma.EmpresasUncheckedCreateWithoutCategoriasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUncheckedCreateWithoutCategoriasInput>;
export const EmpresasUncheckedCreateWithoutCategoriasInputObjectZodSchema = makeSchema();
