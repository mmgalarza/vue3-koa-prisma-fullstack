import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesCreateWithoutRegistrosDetInputObjectSchema as AlmacenesCreateWithoutRegistrosDetInputObjectSchema } from './AlmacenesCreateWithoutRegistrosDetInput.schema';
import { AlmacenesUncheckedCreateWithoutRegistrosDetInputObjectSchema as AlmacenesUncheckedCreateWithoutRegistrosDetInputObjectSchema } from './AlmacenesUncheckedCreateWithoutRegistrosDetInput.schema';
import { AlmacenesCreateOrConnectWithoutRegistrosDetInputObjectSchema as AlmacenesCreateOrConnectWithoutRegistrosDetInputObjectSchema } from './AlmacenesCreateOrConnectWithoutRegistrosDetInput.schema';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './AlmacenesWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AlmacenesCreateWithoutRegistrosDetInputObjectSchema), z.lazy(() => AlmacenesUncheckedCreateWithoutRegistrosDetInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AlmacenesCreateOrConnectWithoutRegistrosDetInputObjectSchema).optional(),
  connect: z.lazy(() => AlmacenesWhereUniqueInputObjectSchema).optional()
}).strict();
export const AlmacenesCreateNestedOneWithoutRegistrosDetInputObjectSchema: z.ZodType<Prisma.AlmacenesCreateNestedOneWithoutRegistrosDetInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesCreateNestedOneWithoutRegistrosDetInput>;
export const AlmacenesCreateNestedOneWithoutRegistrosDetInputObjectZodSchema = makeSchema();
