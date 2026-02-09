import * as z from 'zod';
import type { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.string().max(3),
  nombre: z.string().max(80),
  movAlmacen: FlujoSchema.optional(),
  idTalon: z.number().int().optional().nullable()
}).strict();
export const TiposDocCreateManyInputObjectSchema: z.ZodType<Prisma.TiposDocCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocCreateManyInput>;
export const TiposDocCreateManyInputObjectZodSchema = makeSchema();
