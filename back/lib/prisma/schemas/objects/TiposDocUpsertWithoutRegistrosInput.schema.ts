import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocUpdateWithoutRegistrosInputObjectSchema as TiposDocUpdateWithoutRegistrosInputObjectSchema } from './TiposDocUpdateWithoutRegistrosInput.schema';
import { TiposDocUncheckedUpdateWithoutRegistrosInputObjectSchema as TiposDocUncheckedUpdateWithoutRegistrosInputObjectSchema } from './TiposDocUncheckedUpdateWithoutRegistrosInput.schema';
import { TiposDocCreateWithoutRegistrosInputObjectSchema as TiposDocCreateWithoutRegistrosInputObjectSchema } from './TiposDocCreateWithoutRegistrosInput.schema';
import { TiposDocUncheckedCreateWithoutRegistrosInputObjectSchema as TiposDocUncheckedCreateWithoutRegistrosInputObjectSchema } from './TiposDocUncheckedCreateWithoutRegistrosInput.schema';
import { TiposDocWhereInputObjectSchema as TiposDocWhereInputObjectSchema } from './TiposDocWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => TiposDocUpdateWithoutRegistrosInputObjectSchema), z.lazy(() => TiposDocUncheckedUpdateWithoutRegistrosInputObjectSchema)]),
  create: z.union([z.lazy(() => TiposDocCreateWithoutRegistrosInputObjectSchema), z.lazy(() => TiposDocUncheckedCreateWithoutRegistrosInputObjectSchema)]),
  where: z.lazy(() => TiposDocWhereInputObjectSchema).optional()
}).strict();
export const TiposDocUpsertWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.TiposDocUpsertWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUpsertWithoutRegistrosInput>;
export const TiposDocUpsertWithoutRegistrosInputObjectZodSchema = makeSchema();
