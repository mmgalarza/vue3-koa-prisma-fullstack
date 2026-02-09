import * as z from 'zod';
import type { Prisma } from '../../client';
import { FlujoSchema } from '../enums/Flujo.schema';
import { TalonariosCreateNestedOneWithoutTiposDocInputObjectSchema as TalonariosCreateNestedOneWithoutTiposDocInputObjectSchema } from './TalonariosCreateNestedOneWithoutTiposDocInput.schema'

const makeSchema = () => z.object({
  idTipoDoc: z.string().max(3),
  nombre: z.string().max(80),
  movAlmacen: FlujoSchema.optional(),
  talonario: z.lazy(() => TalonariosCreateNestedOneWithoutTiposDocInputObjectSchema).optional()
}).strict();
export const TiposDocCreateWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.TiposDocCreateWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocCreateWithoutRegistrosInput>;
export const TiposDocCreateWithoutRegistrosInputObjectZodSchema = makeSchema();
