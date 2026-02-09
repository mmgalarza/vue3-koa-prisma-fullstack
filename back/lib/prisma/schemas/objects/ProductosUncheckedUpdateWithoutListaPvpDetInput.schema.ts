import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ListasDetUncheckedUpdateManyWithoutProductoNestedInputObjectSchema as ListasDetUncheckedUpdateManyWithoutProductoNestedInputObjectSchema } from './ListasDetUncheckedUpdateManyWithoutProductoNestedInput.schema';
import { VentaDetUncheckedUpdateManyWithoutProductoNestedInputObjectSchema as VentaDetUncheckedUpdateManyWithoutProductoNestedInputObjectSchema } from './VentaDetUncheckedUpdateManyWithoutProductoNestedInput.schema';
import { RegistroDetUncheckedUpdateManyWithoutProductoNestedInputObjectSchema as RegistroDetUncheckedUpdateManyWithoutProductoNestedInputObjectSchema } from './RegistroDetUncheckedUpdateManyWithoutProductoNestedInput.schema'

const makeSchema = () => z.object({
  idProducto: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  idCategoria: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcion: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  imagen: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  codigo: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  unidad: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  activo: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  listasDet: z.lazy(() => ListasDetUncheckedUpdateManyWithoutProductoNestedInputObjectSchema).optional(),
  ventaDet: z.lazy(() => VentaDetUncheckedUpdateManyWithoutProductoNestedInputObjectSchema).optional(),
  registroDet: z.lazy(() => RegistroDetUncheckedUpdateManyWithoutProductoNestedInputObjectSchema).optional()
}).strict();
export const ProductosUncheckedUpdateWithoutListaPvpDetInputObjectSchema: z.ZodType<Prisma.ProductosUncheckedUpdateWithoutListaPvpDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUncheckedUpdateWithoutListaPvpDetInput>;
export const ProductosUncheckedUpdateWithoutListaPvpDetInputObjectZodSchema = makeSchema();
