import * as z from 'zod';
import type { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema'

const makeSchema = () => z.object({
  set: FlujoSchema.optional()
}).strict();
export const EnumFlujoFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumFlujoFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumFlujoFieldUpdateOperationsInput>;
export const EnumFlujoFieldUpdateOperationsInputObjectZodSchema = makeSchema();
