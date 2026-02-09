import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UsuarioEmpresaUpdateManyWithoutEmpresaNestedInputObjectSchema as UsuarioEmpresaUpdateManyWithoutEmpresaNestedInputObjectSchema } from './UsuarioEmpresaUpdateManyWithoutEmpresaNestedInput.schema';
import { ClientesUpdateManyWithoutEmpresaNestedInputObjectSchema as ClientesUpdateManyWithoutEmpresaNestedInputObjectSchema } from './ClientesUpdateManyWithoutEmpresaNestedInput.schema';
import { ProveedoresUpdateManyWithoutEmpresaNestedInputObjectSchema as ProveedoresUpdateManyWithoutEmpresaNestedInputObjectSchema } from './ProveedoresUpdateManyWithoutEmpresaNestedInput.schema';
import { AlmacenesUpdateManyWithoutEmpresaNestedInputObjectSchema as AlmacenesUpdateManyWithoutEmpresaNestedInputObjectSchema } from './AlmacenesUpdateManyWithoutEmpresaNestedInput.schema';
import { VentaUpdateManyWithoutEmpresaNestedInputObjectSchema as VentaUpdateManyWithoutEmpresaNestedInputObjectSchema } from './VentaUpdateManyWithoutEmpresaNestedInput.schema';
import { CategoriasUpdateManyWithoutEmpresaNestedInputObjectSchema as CategoriasUpdateManyWithoutEmpresaNestedInputObjectSchema } from './CategoriasUpdateManyWithoutEmpresaNestedInput.schema';
import { ListaPvpUpdateManyWithoutEmpresaNestedInputObjectSchema as ListaPvpUpdateManyWithoutEmpresaNestedInputObjectSchema } from './ListaPvpUpdateManyWithoutEmpresaNestedInput.schema'

const makeSchema = () => z.object({
  nombre: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string().max(100), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  calle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numero: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ciudad: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  provincia: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  codigoPostal: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  pais: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  contacto: z.union([z.string().max(80), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  activo: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  UsuarioEmpresas: z.lazy(() => UsuarioEmpresaUpdateManyWithoutEmpresaNestedInputObjectSchema).optional(),
  clientes: z.lazy(() => ClientesUpdateManyWithoutEmpresaNestedInputObjectSchema).optional(),
  proveedores: z.lazy(() => ProveedoresUpdateManyWithoutEmpresaNestedInputObjectSchema).optional(),
  almacenes: z.lazy(() => AlmacenesUpdateManyWithoutEmpresaNestedInputObjectSchema).optional(),
  ventas: z.lazy(() => VentaUpdateManyWithoutEmpresaNestedInputObjectSchema).optional(),
  categorias: z.lazy(() => CategoriasUpdateManyWithoutEmpresaNestedInputObjectSchema).optional(),
  listasPvp: z.lazy(() => ListaPvpUpdateManyWithoutEmpresaNestedInputObjectSchema).optional()
}).strict();
export const EmpresasUpdateWithoutActividadesInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateWithoutActividadesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateWithoutActividadesInput>;
export const EmpresasUpdateWithoutActividadesInputObjectZodSchema = makeSchema();
