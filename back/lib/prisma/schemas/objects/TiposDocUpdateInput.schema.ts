import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FlujoSchema } from '../enums/Flujo.schema';
import { EnumFlujoFieldUpdateOperationsInputObjectSchema as EnumFlujoFieldUpdateOperationsInputObjectSchema } from './EnumFlujoFieldUpdateOperationsInput.schema';
import { TalonariosUpdateOneWithoutTiposDocNestedInputObjectSchema as TalonariosUpdateOneWithoutTiposDocNestedInputObjectSchema } from './TalonariosUpdateOneWithoutTiposDocNestedInput.schema';
import { RegistroUpdateManyWithoutTipoDocNestedInputObjectSchema as RegistroUpdateManyWithoutTipoDocNestedInputObjectSchema } from './RegistroUpdateManyWithoutTipoDocNestedInput.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string().max(80), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  movAlmacen: z.union([FlujoSchema, z.lazy(() => EnumFlujoFieldUpdateOperationsInputObjectSchema)]).optional(),
  talonario: z.lazy(() => TalonariosUpdateOneWithoutTiposDocNestedInputObjectSchema).optional(),
  registros: z.lazy(() => RegistroUpdateManyWithoutTipoDocNestedInputObjectSchema).optional()
}).strict();
export const TiposDocUpdateInputObjectSchema: z.ZodType<Prisma.TiposDocUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUpdateInput>;
export const TiposDocUpdateInputObjectZodSchema = makeSchema();
