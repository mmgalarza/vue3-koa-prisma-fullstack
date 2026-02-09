import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FlujoSchema } from '../enums/Flujo.schema';
import { EnumFlujoFieldUpdateOperationsInputObjectSchema as EnumFlujoFieldUpdateOperationsInputObjectSchema } from './EnumFlujoFieldUpdateOperationsInput.schema';
import { RegistroUncheckedUpdateManyWithoutTipoDocNestedInputObjectSchema as RegistroUncheckedUpdateManyWithoutTipoDocNestedInputObjectSchema } from './RegistroUncheckedUpdateManyWithoutTipoDocNestedInput.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  movAlmacen: z.union([FlujoSchema, z.lazy(() => EnumFlujoFieldUpdateOperationsInputObjectSchema)]).optional(),
  registros: z.lazy(() => RegistroUncheckedUpdateManyWithoutTipoDocNestedInputObjectSchema).optional()
}).strict();
export const TiposDocUncheckedUpdateWithoutTalonarioInputObjectSchema: z.ZodType<Prisma.TiposDocUncheckedUpdateWithoutTalonarioInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUncheckedUpdateWithoutTalonarioInput>;
export const TiposDocUncheckedUpdateWithoutTalonarioInputObjectZodSchema = makeSchema();
