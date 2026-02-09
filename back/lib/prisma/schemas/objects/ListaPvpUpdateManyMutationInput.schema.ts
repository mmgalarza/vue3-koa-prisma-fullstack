import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { EnumTiposPvpFieldUpdateOperationsInputObjectSchema as EnumTiposPvpFieldUpdateOperationsInputObjectSchema } from './EnumTiposPvpFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  nombre: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  criterio: z.union([TiposPvpSchema, z.lazy(() => EnumTiposPvpFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaGen: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ListaPvpUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.ListaPvpUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUpdateManyMutationInput>;
export const ListaPvpUpdateManyMutationInputObjectZodSchema = makeSchema();
