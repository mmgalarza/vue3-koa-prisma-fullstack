import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { FlujoSchema } from '../enums/Flujo.schema';
import { EnumFlujoFieldUpdateOperationsInputObjectSchema as EnumFlujoFieldUpdateOperationsInputObjectSchema } from './EnumFlujoFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.union([z.string().max(3), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string().max(80), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  movAlmacen: z.union([FlujoSchema, z.lazy(() => EnumFlujoFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const TiposDocUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.TiposDocUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUpdateManyMutationInput>;
export const TiposDocUpdateManyMutationInputObjectZodSchema = makeSchema();
