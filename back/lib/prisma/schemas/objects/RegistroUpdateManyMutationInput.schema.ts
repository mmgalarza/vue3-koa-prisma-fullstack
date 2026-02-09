import * as z from 'zod';
import type { Prisma } from '../../client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  numero: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const RegistroUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.RegistroUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateManyMutationInput>;
export const RegistroUpdateManyMutationInputObjectZodSchema = makeSchema();
