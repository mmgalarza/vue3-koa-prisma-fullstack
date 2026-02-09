import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './AlmacenesWhereUniqueInput.schema';
import { AlmacenesCreateWithoutRegistrosDetInputObjectSchema as AlmacenesCreateWithoutRegistrosDetInputObjectSchema } from './AlmacenesCreateWithoutRegistrosDetInput.schema';
import { AlmacenesUncheckedCreateWithoutRegistrosDetInputObjectSchema as AlmacenesUncheckedCreateWithoutRegistrosDetInputObjectSchema } from './AlmacenesUncheckedCreateWithoutRegistrosDetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AlmacenesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AlmacenesCreateWithoutRegistrosDetInputObjectSchema), z.lazy(() => AlmacenesUncheckedCreateWithoutRegistrosDetInputObjectSchema)])
}).strict();
export const AlmacenesCreateOrConnectWithoutRegistrosDetInputObjectSchema: z.ZodType<Prisma.AlmacenesCreateOrConnectWithoutRegistrosDetInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesCreateOrConnectWithoutRegistrosDetInput>;
export const AlmacenesCreateOrConnectWithoutRegistrosDetInputObjectZodSchema = makeSchema();
