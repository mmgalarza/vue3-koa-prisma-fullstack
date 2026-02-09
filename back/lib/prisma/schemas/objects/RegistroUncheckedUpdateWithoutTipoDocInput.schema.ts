import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { RegistroDetUncheckedUpdateManyWithoutRegistroNestedInputObjectSchema as RegistroDetUncheckedUpdateManyWithoutRegistroNestedInputObjectSchema } from './RegistroDetUncheckedUpdateManyWithoutRegistroNestedInput.schema'

const makeSchema = () => z.object({
  idRegistro: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  numero: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  idVenta: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  idActividad: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  detalles: z.lazy(() => RegistroDetUncheckedUpdateManyWithoutRegistroNestedInputObjectSchema).optional()
}).strict();
export const RegistroUncheckedUpdateWithoutTipoDocInputObjectSchema: z.ZodType<Prisma.RegistroUncheckedUpdateWithoutTipoDocInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUncheckedUpdateWithoutTipoDocInput>;
export const RegistroUncheckedUpdateWithoutTipoDocInputObjectZodSchema = makeSchema();
