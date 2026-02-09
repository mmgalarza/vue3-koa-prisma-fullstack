import * as z from 'zod';
import type { Prisma } from '../../client';
import { ClientesUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema as ClientesUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema } from './ClientesUncheckedCreateNestedManyWithoutEmpresaInput.schema';
import { ProveedoresUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema as ProveedoresUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema } from './ProveedoresUncheckedCreateNestedManyWithoutEmpresaInput.schema';
import { AlmacenesUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema as AlmacenesUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema } from './AlmacenesUncheckedCreateNestedManyWithoutEmpresaInput.schema';
import { VentaUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema as VentaUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema } from './VentaUncheckedCreateNestedManyWithoutEmpresaInput.schema';
import { CategoriasUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema as CategoriasUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema } from './CategoriasUncheckedCreateNestedManyWithoutEmpresaInput.schema';
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
  clientes: z.lazy(() => ClientesUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  proveedores: z.lazy(() => ProveedoresUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  almacenes: z.lazy(() => AlmacenesUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  ventas: z.lazy(() => VentaUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  categorias: z.lazy(() => CategoriasUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  actividades: z.lazy(() => ActividadUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  listasPvp: z.lazy(() => ListaPvpUncheckedCreateNestedManyWithoutEmpresaInputObjectSchema).optional()
}).strict();
export const EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema: z.ZodType<Prisma.EmpresasUncheckedCreateWithoutUsuarioEmpresasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUncheckedCreateWithoutUsuarioEmpresasInput>;
export const EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectZodSchema = makeSchema();
