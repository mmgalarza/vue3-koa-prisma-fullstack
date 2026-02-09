import * as z from 'zod';
import type { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema';
import { RegistroUncheckedCreateNestedManyWithoutTipoDocInputObjectSchema as RegistroUncheckedCreateNestedManyWithoutTipoDocInputObjectSchema } from './RegistroUncheckedCreateNestedManyWithoutTipoDocInput.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.string().max(3),
  nombre: z.string().max(80),
  movAlmacen: FlujoSchema.optional(),
  idTalon: z.number().int().optional().nullable(),
  registros: z.lazy(() => RegistroUncheckedCreateNestedManyWithoutTipoDocInputObjectSchema).optional()
}).strict();
export const TiposDocUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TiposDocUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUncheckedCreateInput>;
export const TiposDocUncheckedCreateInputObjectZodSchema = makeSchema();
