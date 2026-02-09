import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { TiposDocUpdateManyWithoutTalonarioNestedInputObjectSchema as TiposDocUpdateManyWithoutTalonarioNestedInputObjectSchema } from './TiposDocUpdateManyWithoutTalonarioNestedInput.schema'

const makeSchema = () => z.object({
  nombre: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inicio: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  fin: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  actual: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  tiposDoc: z.lazy(() => TiposDocUpdateManyWithoutTalonarioNestedInputObjectSchema).optional()
}).strict();
export const TalonariosUpdateInputObjectSchema: z.ZodType<Prisma.TalonariosUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TalonariosUpdateInput>;
export const TalonariosUpdateInputObjectZodSchema = makeSchema();
