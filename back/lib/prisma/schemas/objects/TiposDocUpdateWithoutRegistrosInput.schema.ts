import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FlujoSchema } from '../enums/Flujo.schema';
import { EnumFlujoFieldUpdateOperationsInputObjectSchema as EnumFlujoFieldUpdateOperationsInputObjectSchema } from './EnumFlujoFieldUpdateOperationsInput.schema';
import { TalonariosUpdateOneWithoutTiposDocNestedInputObjectSchema as TalonariosUpdateOneWithoutTiposDocNestedInputObjectSchema } from './TalonariosUpdateOneWithoutTiposDocNestedInput.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string().max(80), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  movAlmacen: z.union([FlujoSchema, z.lazy(() => EnumFlujoFieldUpdateOperationsInputObjectSchema)]).optional(),
  talonario: z.lazy(() => TalonariosUpdateOneWithoutTiposDocNestedInputObjectSchema).optional()
}).strict();
export const TiposDocUpdateWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.TiposDocUpdateWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUpdateWithoutRegistrosInput>;
export const TiposDocUpdateWithoutRegistrosInputObjectZodSchema = makeSchema();
