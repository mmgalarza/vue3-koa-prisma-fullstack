import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocWhereInputObjectSchema as TiposDocWhereInputObjectSchema } from './TiposDocWhereInput.schema';
import { TiposDocUpdateWithoutRegistrosInputObjectSchema as TiposDocUpdateWithoutRegistrosInputObjectSchema } from './TiposDocUpdateWithoutRegistrosInput.schema';
import { TiposDocUncheckedUpdateWithoutRegistrosInputObjectSchema as TiposDocUncheckedUpdateWithoutRegistrosInputObjectSchema } from './TiposDocUncheckedUpdateWithoutRegistrosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TiposDocWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => TiposDocUpdateWithoutRegistrosInputObjectSchema), z.lazy(() => TiposDocUncheckedUpdateWithoutRegistrosInputObjectSchema)])
}).strict();
export const TiposDocUpdateToOneWithWhereWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.TiposDocUpdateToOneWithWhereWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUpdateToOneWithWhereWithoutRegistrosInput>;
export const TiposDocUpdateToOneWithWhereWithoutRegistrosInputObjectZodSchema = makeSchema();
