import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FlujoSchema } from '../enums/Flujo.schema';
import { EnumFlujoFieldUpdateOperationsInputObjectSchema as EnumFlujoFieldUpdateOperationsInputObjectSchema } from './EnumFlujoFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema as NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { RegistroUncheckedUpdateManyWithoutTipoDocNestedInputObjectSchema as RegistroUncheckedUpdateManyWithoutTipoDocNestedInputObjectSchema } from './RegistroUncheckedUpdateManyWithoutTipoDocNestedInput.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string().max(80), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  movAlmacen: z.union([FlujoSchema, z.lazy(() => EnumFlujoFieldUpdateOperationsInputObjectSchema)]).optional(),
  idTalon: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  registros: z.lazy(() => RegistroUncheckedUpdateManyWithoutTipoDocNestedInputObjectSchema).optional()
}).strict();
export const TiposDocUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.TiposDocUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUncheckedUpdateInput>;
export const TiposDocUncheckedUpdateInputObjectZodSchema = makeSchema();
