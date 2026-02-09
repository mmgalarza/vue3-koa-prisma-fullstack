import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { EmpresasUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema as EmpresasUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema } from './EmpresasUpdateOneRequiredWithoutCategoriasNestedInput.schema'

const makeSchema = () => z.object({
  nombre: z.union([z.string().max(80), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  descripcion: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  icono: z.union([z.string().max(50), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  activo: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  empresa: z.lazy(() => EmpresasUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema).optional()
}).strict();
export const CategoriasUpdateWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriasUpdateWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasUpdateWithoutProductosInput>;
export const CategoriasUpdateWithoutProductosInputObjectZodSchema = makeSchema();
