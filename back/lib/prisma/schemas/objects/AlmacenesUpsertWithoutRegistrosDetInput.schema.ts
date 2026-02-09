import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesUpdateWithoutRegistrosDetInputObjectSchema as AlmacenesUpdateWithoutRegistrosDetInputObjectSchema } from './AlmacenesUpdateWithoutRegistrosDetInput.schema';
import { AlmacenesUncheckedUpdateWithoutRegistrosDetInputObjectSchema as AlmacenesUncheckedUpdateWithoutRegistrosDetInputObjectSchema } from './AlmacenesUncheckedUpdateWithoutRegistrosDetInput.schema';
import { AlmacenesCreateWithoutRegistrosDetInputObjectSchema as AlmacenesCreateWithoutRegistrosDetInputObjectSchema } from './AlmacenesCreateWithoutRegistrosDetInput.schema';
import { AlmacenesUncheckedCreateWithoutRegistrosDetInputObjectSchema as AlmacenesUncheckedCreateWithoutRegistrosDetInputObjectSchema } from './AlmacenesUncheckedCreateWithoutRegistrosDetInput.schema';
import { AlmacenesWhereInputObjectSchema as AlmacenesWhereInputObjectSchema } from './AlmacenesWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => AlmacenesUpdateWithoutRegistrosDetInputObjectSchema), z.lazy(() => AlmacenesUncheckedUpdateWithoutRegistrosDetInputObjectSchema)]),
  create: z.union([z.lazy(() => AlmacenesCreateWithoutRegistrosDetInputObjectSchema), z.lazy(() => AlmacenesUncheckedCreateWithoutRegistrosDetInputObjectSchema)]),
  where: z.lazy(() => AlmacenesWhereInputObjectSchema).optional()
}).strict();
export const AlmacenesUpsertWithoutRegistrosDetInputObjectSchema: z.ZodType<Prisma.AlmacenesUpsertWithoutRegistrosDetInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesUpsertWithoutRegistrosDetInput>;
export const AlmacenesUpsertWithoutRegistrosDetInputObjectZodSchema = makeSchema();
