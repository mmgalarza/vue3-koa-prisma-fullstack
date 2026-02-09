import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  idLista: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  idProveedor: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  refNo: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  observacion: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const ListasUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.ListasUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUncheckedUpdateManyInput>;
export const ListasUncheckedUpdateManyInputObjectZodSchema = makeSchema();
