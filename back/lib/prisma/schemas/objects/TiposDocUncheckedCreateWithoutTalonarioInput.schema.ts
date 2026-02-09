import * as z from 'zod';
import type { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema';
import { RegistroUncheckedCreateNestedManyWithoutTipoDocInputObjectSchema as RegistroUncheckedCreateNestedManyWithoutTipoDocInputObjectSchema } from './RegistroUncheckedCreateNestedManyWithoutTipoDocInput.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.string(),
  nombre: z.string(),
  movAlmacen: FlujoSchema.optional(),
  registros: z.lazy(() => RegistroUncheckedCreateNestedManyWithoutTipoDocInputObjectSchema).optional()
}).strict();
export const TiposDocUncheckedCreateWithoutTalonarioInputObjectSchema: z.ZodType<Prisma.TiposDocUncheckedCreateWithoutTalonarioInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUncheckedCreateWithoutTalonarioInput>;
export const TiposDocUncheckedCreateWithoutTalonarioInputObjectZodSchema = makeSchema();
