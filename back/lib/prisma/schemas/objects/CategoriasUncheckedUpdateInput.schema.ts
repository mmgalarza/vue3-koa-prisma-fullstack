import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { ProductosUncheckedUpdateManyWithoutCategoriaNestedInputObjectSchema as ProductosUncheckedUpdateManyWithoutCategoriaNestedInputObjectSchema } from './ProductosUncheckedUpdateManyWithoutCategoriaNestedInput.schema'

const makeSchema = () => z.object({
  idCategoria: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string().max(80), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcion: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  icono: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  activo: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  idEmpresa: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  productos: z.lazy(() => ProductosUncheckedUpdateManyWithoutCategoriaNestedInputObjectSchema).optional()
}).strict();
export const CategoriasUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.CategoriasUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasUncheckedUpdateInput>;
export const CategoriasUncheckedUpdateInputObjectZodSchema = makeSchema();
