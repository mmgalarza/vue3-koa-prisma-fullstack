import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocCreateWithoutRegistrosInputObjectSchema as TiposDocCreateWithoutRegistrosInputObjectSchema } from './TiposDocCreateWithoutRegistrosInput.schema';
import { TiposDocUncheckedCreateWithoutRegistrosInputObjectSchema as TiposDocUncheckedCreateWithoutRegistrosInputObjectSchema } from './TiposDocUncheckedCreateWithoutRegistrosInput.schema';
import { TiposDocCreateOrConnectWithoutRegistrosInputObjectSchema as TiposDocCreateOrConnectWithoutRegistrosInputObjectSchema } from './TiposDocCreateOrConnectWithoutRegistrosInput.schema';
import { TiposDocUpsertWithoutRegistrosInputObjectSchema as TiposDocUpsertWithoutRegistrosInputObjectSchema } from './TiposDocUpsertWithoutRegistrosInput.schema';
import { TiposDocWhereUniqueInputObjectSchema as TiposDocWhereUniqueInputObjectSchema } from './TiposDocWhereUniqueInput.schema';
import { TiposDocUpdateToOneWithWhereWithoutRegistrosInputObjectSchema as TiposDocUpdateToOneWithWhereWithoutRegistrosInputObjectSchema } from './TiposDocUpdateToOneWithWhereWithoutRegistrosInput.schema';
import { TiposDocUpdateWithoutRegistrosInputObjectSchema as TiposDocUpdateWithoutRegistrosInputObjectSchema } from './TiposDocUpdateWithoutRegistrosInput.schema';
import { TiposDocUncheckedUpdateWithoutRegistrosInputObjectSchema as TiposDocUncheckedUpdateWithoutRegistrosInputObjectSchema } from './TiposDocUncheckedUpdateWithoutRegistrosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TiposDocCreateWithoutRegistrosInputObjectSchema), z.lazy(() => TiposDocUncheckedCreateWithoutRegistrosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TiposDocCreateOrConnectWithoutRegistrosInputObjectSchema).optional(),
  upsert: z.lazy(() => TiposDocUpsertWithoutRegistrosInputObjectSchema).optional(),
  connect: z.lazy(() => TiposDocWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => TiposDocUpdateToOneWithWhereWithoutRegistrosInputObjectSchema), z.lazy(() => TiposDocUpdateWithoutRegistrosInputObjectSchema), z.lazy(() => TiposDocUncheckedUpdateWithoutRegistrosInputObjectSchema)]).optional()
}).strict();
export const TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectSchema: z.ZodType<Prisma.TiposDocUpdateOneRequiredWithoutRegistrosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUpdateOneRequiredWithoutRegistrosNestedInput>;
export const TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectZodSchema = makeSchema();
