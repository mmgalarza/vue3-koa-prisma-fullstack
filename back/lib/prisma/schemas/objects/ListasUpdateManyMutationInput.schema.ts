import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  refNo: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  observacion: z.union([z.string().max(150), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable()
}).strict();
export const ListasUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ListasUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUpdateManyMutationInput>;
export const ListasUpdateManyMutationInputObjectZodSchema = makeSchema();
