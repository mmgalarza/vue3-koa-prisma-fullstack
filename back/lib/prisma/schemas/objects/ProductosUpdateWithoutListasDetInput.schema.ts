import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { CategoriasUpdateOneRequiredWithoutProductosNestedInputObjectSchema as CategoriasUpdateOneRequiredWithoutProductosNestedInputObjectSchema } from './CategoriasUpdateOneRequiredWithoutProductosNestedInput.schema';
import { ListaPvpDetUpdateManyWithoutProductoNestedInputObjectSchema as ListaPvpDetUpdateManyWithoutProductoNestedInputObjectSchema } from './ListaPvpDetUpdateManyWithoutProductoNestedInput.schema';
import { VentaDetUpdateManyWithoutProductoNestedInputObjectSchema as VentaDetUpdateManyWithoutProductoNestedInputObjectSchema } from './VentaDetUpdateManyWithoutProductoNestedInput.schema';
import { RegistroDetUpdateManyWithoutProductoNestedInputObjectSchema as RegistroDetUpdateManyWithoutProductoNestedInputObjectSchema } from './RegistroDetUpdateManyWithoutProductoNestedInput.schema'

const makeSchema = () => z.object({
  nombre: z.union([z.string().max(120), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcion: z.union([z.string().max(200), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  imagen: z.union([z.string().max(100), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  codigo: z.union([z.string().max(40), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  unidad: z.union([z.string().max(20), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  activo: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  categoria: z.lazy(() => CategoriasUpdateOneRequiredWithoutProductosNestedInputObjectSchema).optional(),
  listaPvpDet: z.lazy(() => ListaPvpDetUpdateManyWithoutProductoNestedInputObjectSchema).optional(),
  ventaDet: z.lazy(() => VentaDetUpdateManyWithoutProductoNestedInputObjectSchema).optional(),
  registroDet: z.lazy(() => RegistroDetUpdateManyWithoutProductoNestedInputObjectSchema).optional()
}).strict();
export const ProductosUpdateWithoutListasDetInputObjectSchema: z.ZodType<Prisma.ProductosUpdateWithoutListasDetInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductosUpdateWithoutListasDetInput>;
export const ProductosUpdateWithoutListasDetInputObjectZodSchema = makeSchema();
