import * as z from 'zod';
import type { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.string().max(3),
  nombre: z.string().max(80),
  movAlmacen: FlujoSchema.optional()
}).strict();
export const TiposDocCreateManyTalonarioInputObjectSchema: z.ZodType<Prisma.TiposDocCreateManyTalonarioInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocCreateManyTalonarioInput>;
export const TiposDocCreateManyTalonarioInputObjectZodSchema = makeSchema();
