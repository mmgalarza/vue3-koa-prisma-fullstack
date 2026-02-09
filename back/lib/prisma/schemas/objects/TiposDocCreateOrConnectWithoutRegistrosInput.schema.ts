import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocWhereUniqueInputObjectSchema as TiposDocWhereUniqueInputObjectSchema } from './TiposDocWhereUniqueInput.schema';
import { TiposDocCreateWithoutRegistrosInputObjectSchema as TiposDocCreateWithoutRegistrosInputObjectSchema } from './TiposDocCreateWithoutRegistrosInput.schema';
import { TiposDocUncheckedCreateWithoutRegistrosInputObjectSchema as TiposDocUncheckedCreateWithoutRegistrosInputObjectSchema } from './TiposDocUncheckedCreateWithoutRegistrosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TiposDocWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TiposDocCreateWithoutRegistrosInputObjectSchema), z.lazy(() => TiposDocUncheckedCreateWithoutRegistrosInputObjectSchema)])
}).strict();
export const TiposDocCreateOrConnectWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.TiposDocCreateOrConnectWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocCreateOrConnectWithoutRegistrosInput>;
export const TiposDocCreateOrConnectWithoutRegistrosInputObjectZodSchema = makeSchema();
