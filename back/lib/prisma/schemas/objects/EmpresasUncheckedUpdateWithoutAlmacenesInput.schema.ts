import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { UsuarioEmpresaUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema as UsuarioEmpresaUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema } from './UsuarioEmpresaUncheckedUpdateManyWithoutEmpresaNestedInput.schema';
import { ClientesUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema as ClientesUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema } from './ClientesUncheckedUpdateManyWithoutEmpresaNestedInput.schema';
import { ProveedoresUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema as ProveedoresUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema } from './ProveedoresUncheckedUpdateManyWithoutEmpresaNestedInput.schema';
import { VentaUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema as VentaUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema } from './VentaUncheckedUpdateManyWithoutEmpresaNestedInput.schema';
import { CategoriasUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema as CategoriasUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema } from './CategoriasUncheckedUpdateManyWithoutEmpresaNestedInput.schema';
import { ActividadUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema as ActividadUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema } from './ActividadUncheckedUpdateManyWithoutEmpresaNestedInput.schema';
import { ListaPvpUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema as ListaPvpUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema } from './ListaPvpUncheckedUpdateManyWithoutEmpresaNestedInput.schema'

const makeSchema = () => z.object({
  idEmpresa: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  calle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numero: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ciudad: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  provincia: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  codigoPostal: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  pais: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  contacto: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  activo: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  UsuarioEmpresas: z.lazy(() => UsuarioEmpresaUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema).optional(),
  clientes: z.lazy(() => ClientesUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema).optional(),
  proveedores: z.lazy(() => ProveedoresUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema).optional(),
  ventas: z.lazy(() => VentaUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema).optional(),
  categorias: z.lazy(() => CategoriasUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema).optional(),
  actividades: z.lazy(() => ActividadUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema).optional(),
  listasPvp: z.lazy(() => ListaPvpUncheckedUpdateManyWithoutEmpresaNestedInputObjectSchema).optional()
}).strict();
export const EmpresasUncheckedUpdateWithoutAlmacenesInputObjectSchema: z.ZodType<Prisma.EmpresasUncheckedUpdateWithoutAlmacenesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUncheckedUpdateWithoutAlmacenesInput>;
export const EmpresasUncheckedUpdateWithoutAlmacenesInputObjectZodSchema = makeSchema();
