import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { ListasDetUpdateManyWithoutListaNestedInputObjectSchema as ListasDetUpdateManyWithoutListaNestedInputObjectSchema } from './ListasDetUpdateManyWithoutListaNestedInput.schema'

const makeSchema = () => z.object({
  refNo: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  observacion: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  detalles: z.lazy(() => ListasDetUpdateManyWithoutListaNestedInputObjectSchema).optional()
}).strict();
export const ListasUpdateWithoutProveedorInputObjectSchema: z.ZodType<Prisma.ListasUpdateWithoutProveedorInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUpdateWithoutProveedorInput>;
export const ListasUpdateWithoutProveedorInputObjectZodSchema = makeSchema();
