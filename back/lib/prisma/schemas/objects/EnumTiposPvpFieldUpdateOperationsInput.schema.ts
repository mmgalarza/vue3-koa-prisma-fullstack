import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema'

const makeSchema = () => z.object({
  set: TiposPvpSchema.optional()
}).strict();
export const EnumTiposPvpFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumTiposPvpFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumTiposPvpFieldUpdateOperationsInput>;
export const EnumTiposPvpFieldUpdateOperationsInputObjectZodSchema = makeSchema();
