import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { EnumTiposPvpFieldUpdateOperationsInputObjectSchema as EnumTiposPvpFieldUpdateOperationsInputObjectSchema } from './EnumTiposPvpFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  idListaPvp: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  criterio: z.union([TiposPvpSchema, z.lazy(() => EnumTiposPvpFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaGen: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const ListaPvpUncheckedUpdateManyWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ListaPvpUncheckedUpdateManyWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUncheckedUpdateManyWithoutEmpresaInput>;
export const ListaPvpUncheckedUpdateManyWithoutEmpresaInputObjectZodSchema = makeSchema();
