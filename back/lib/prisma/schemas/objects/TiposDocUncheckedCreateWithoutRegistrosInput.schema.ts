import * as z from 'zod';
import type { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.string(),
  nombre: z.string(),
  movAlmacen: FlujoSchema.optional(),
  idTalon: z.number().int().optional().nullable()
}).strict();
export const TiposDocUncheckedCreateWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.TiposDocUncheckedCreateWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUncheckedCreateWithoutRegistrosInput>;
export const TiposDocUncheckedCreateWithoutRegistrosInputObjectZodSchema = makeSchema();
