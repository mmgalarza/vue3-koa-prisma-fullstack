import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FlujoSchema } from '../enums/Flujo.schema';
import { EnumFlujoFieldUpdateOperationsInputObjectSchema as EnumFlujoFieldUpdateOperationsInputObjectSchema } from './EnumFlujoFieldUpdateOperationsInput.schema';
import { RegistroUpdateManyWithoutTipoDocNestedInputObjectSchema as RegistroUpdateManyWithoutTipoDocNestedInputObjectSchema } from './RegistroUpdateManyWithoutTipoDocNestedInput.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string().max(80), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  movAlmacen: z.union([FlujoSchema, z.lazy(() => EnumFlujoFieldUpdateOperationsInputObjectSchema)]).optional(),
  registros: z.lazy(() => RegistroUpdateManyWithoutTipoDocNestedInputObjectSchema).optional()
}).strict();
export const TiposDocUpdateWithoutTalonarioInputObjectSchema: z.ZodType<Prisma.TiposDocUpdateWithoutTalonarioInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUpdateWithoutTalonarioInput>;
export const TiposDocUpdateWithoutTalonarioInputObjectZodSchema = makeSchema();
