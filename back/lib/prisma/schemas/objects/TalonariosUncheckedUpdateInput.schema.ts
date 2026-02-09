import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TiposDocUncheckedUpdateManyWithoutTalonarioNestedInputObjectSchema as TiposDocUncheckedUpdateManyWithoutTalonarioNestedInputObjectSchema } from './TiposDocUncheckedUpdateManyWithoutTalonarioNestedInput.schema'

const makeSchema = () => z.object({
  idTalon: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inicio: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  fin: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  actual: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  tiposDoc: z.lazy(() => TiposDocUncheckedUpdateManyWithoutTalonarioNestedInputObjectSchema).optional()
}).strict();
export const TalonariosUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TalonariosUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosUncheckedUpdateInput>;
export const TalonariosUncheckedUpdateInputObjectZodSchema = makeSchema();
