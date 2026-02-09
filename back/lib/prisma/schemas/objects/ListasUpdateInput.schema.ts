import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ProveedoresUpdateOneRequiredWithoutListasNestedInputObjectSchema as ProveedoresUpdateOneRequiredWithoutListasNestedInputObjectSchema } from './ProveedoresUpdateOneRequiredWithoutListasNestedInput.schema';
import { ListasDetUpdateManyWithoutListaNestedInputObjectSchema as ListasDetUpdateManyWithoutListaNestedInputObjectSchema } from './ListasDetUpdateManyWithoutListaNestedInput.schema'

const makeSchema = () => z.object({
  refNo: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  observacion: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  proveedor: z.lazy(() => ProveedoresUpdateOneRequiredWithoutListasNestedInputObjectSchema).optional(),
  detalles: z.lazy(() => ListasDetUpdateManyWithoutListaNestedInputObjectSchema).optional()
}).strict();
export const ListasUpdateInputObjectSchema: z.ZodType<Prisma.ListasUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUpdateInput>;
export const ListasUpdateInputObjectZodSchema = makeSchema();
