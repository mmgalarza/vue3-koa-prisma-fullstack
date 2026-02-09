import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ListasDetUncheckedUpdateManyWithoutListaNestedInputObjectSchema as ListasDetUncheckedUpdateManyWithoutListaNestedInputObjectSchema } from './ListasDetUncheckedUpdateManyWithoutListaNestedInput.schema'

const makeSchema = () => z.object({
  idLista: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  refNo: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  observacion: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  detalles: z.lazy(() => ListasDetUncheckedUpdateManyWithoutListaNestedInputObjectSchema).optional()
}).strict();
export const ListasUncheckedUpdateWithoutProveedorInputObjectSchema: z.ZodType<Prisma.ListasUncheckedUpdateWithoutProveedorInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUncheckedUpdateWithoutProveedorInput>;
export const ListasUncheckedUpdateWithoutProveedorInputObjectZodSchema = makeSchema();
