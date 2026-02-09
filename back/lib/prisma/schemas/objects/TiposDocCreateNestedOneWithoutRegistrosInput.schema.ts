import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocCreateWithoutRegistrosInputObjectSchema as TiposDocCreateWithoutRegistrosInputObjectSchema } from './TiposDocCreateWithoutRegistrosInput.schema';
import { TiposDocUncheckedCreateWithoutRegistrosInputObjectSchema as TiposDocUncheckedCreateWithoutRegistrosInputObjectSchema } from './TiposDocUncheckedCreateWithoutRegistrosInput.schema';
import { TiposDocCreateOrConnectWithoutRegistrosInputObjectSchema as TiposDocCreateOrConnectWithoutRegistrosInputObjectSchema } from './TiposDocCreateOrConnectWithoutRegistrosInput.schema';
import { TiposDocWhereUniqueInputObjectSchema as TiposDocWhereUniqueInputObjectSchema } from './TiposDocWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TiposDocCreateWithoutRegistrosInputObjectSchema), z.lazy(() => TiposDocUncheckedCreateWithoutRegistrosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => TiposDocCreateOrConnectWithoutRegistrosInputObjectSchema).optional(),
  connect: z.lazy(() => TiposDocWhereUniqueInputObjectSchema).optional()
}).strict();
export const TiposDocCreateNestedOneWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.TiposDocCreateNestedOneWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocCreateNestedOneWithoutRegistrosInput>;
export const TiposDocCreateNestedOneWithoutRegistrosInputObjectZodSchema = makeSchema();
