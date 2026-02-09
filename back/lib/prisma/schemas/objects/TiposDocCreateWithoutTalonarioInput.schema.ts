import * as z from 'zod';
import type { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema';
import { RegistroCreateNestedManyWithoutTipoDocInputObjectSchema as RegistroCreateNestedManyWithoutTipoDocInputObjectSchema } from './RegistroCreateNestedManyWithoutTipoDocInput.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.string().max(3),
  nombre: z.string().max(80),
  movAlmacen: FlujoSchema.optional(),
  registros: z.lazy(() => RegistroCreateNestedManyWithoutTipoDocInputObjectSchema).optional()
}).strict();
export const TiposDocCreateWithoutTalonarioInputObjectSchema: z.ZodType<Prisma.TiposDocCreateWithoutTalonarioInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocCreateWithoutTalonarioInput>;
export const TiposDocCreateWithoutTalonarioInputObjectZodSchema = makeSchema();
