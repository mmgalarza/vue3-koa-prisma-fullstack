import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaCreateNestedManyWithoutEmpresaInputObjectSchema as UsuarioEmpresaCreateNestedManyWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaCreateNestedManyWithoutEmpresaInput.schema';
import { ClientesCreateNestedManyWithoutEmpresaInputObjectSchema as ClientesCreateNestedManyWithoutEmpresaInputObjectSchema } from './ClientesCreateNestedManyWithoutEmpresaInput.schema';
import { ProveedoresCreateNestedManyWithoutEmpresaInputObjectSchema as ProveedoresCreateNestedManyWithoutEmpresaInputObjectSchema } from './ProveedoresCreateNestedManyWithoutEmpresaInput.schema';
import { AlmacenesCreateNestedManyWithoutEmpresaInputObjectSchema as AlmacenesCreateNestedManyWithoutEmpresaInputObjectSchema } from './AlmacenesCreateNestedManyWithoutEmpresaInput.schema';
import { VentaCreateNestedManyWithoutEmpresaInputObjectSchema as VentaCreateNestedManyWithoutEmpresaInputObjectSchema } from './VentaCreateNestedManyWithoutEmpresaInput.schema';
import { CategoriasCreateNestedManyWithoutEmpresaInputObjectSchema as CategoriasCreateNestedManyWithoutEmpresaInputObjectSchema } from './CategoriasCreateNestedManyWithoutEmpresaInput.schema';
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
  proveedores: z.lazy(() => ProveedoresCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  almacenes: z.lazy(() => AlmacenesCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  ventas: z.lazy(() => VentaCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  categorias: z.lazy(() => CategoriasCreateNestedManyWithoutEmpresaInputObjectSchema).optional(),
  listasPvp: z.lazy(() => ListaPvpCreateNestedManyWithoutEmpresaInputObjectSchema).optional()
}).strict();
export const EmpresasCreateWithoutActividadesInputObjectSchema: z.ZodType<Prisma.EmpresasCreateWithoutActividadesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateWithoutActividadesInput>;
export const EmpresasCreateWithoutActividadesInputObjectZodSchema = makeSchema();
