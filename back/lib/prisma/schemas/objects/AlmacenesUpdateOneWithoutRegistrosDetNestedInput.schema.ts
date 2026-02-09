import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesCreateWithoutRegistrosDetInputObjectSchema as AlmacenesCreateWithoutRegistrosDetInputObjectSchema } from './AlmacenesCreateWithoutRegistrosDetInput.schema';
import { AlmacenesUncheckedCreateWithoutRegistrosDetInputObjectSchema as AlmacenesUncheckedCreateWithoutRegistrosDetInputObjectSchema } from './AlmacenesUncheckedCreateWithoutRegistrosDetInput.schema';
import { AlmacenesCreateOrConnectWithoutRegistrosDetInputObjectSchema as AlmacenesCreateOrConnectWithoutRegistrosDetInputObjectSchema } from './AlmacenesCreateOrConnectWithoutRegistrosDetInput.schema';
import { AlmacenesUpsertWithoutRegistrosDetInputObjectSchema as AlmacenesUpsertWithoutRegistrosDetInputObjectSchema } from './AlmacenesUpsertWithoutRegistrosDetInput.schema';
import { AlmacenesWhereInputObjectSchema as AlmacenesWhereInputObjectSchema } from './AlmacenesWhereInput.schema';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './AlmacenesWhereUniqueInput.schema';
import { AlmacenesUpdateToOneWithWhereWithoutRegistrosDetInputObjectSchema as AlmacenesUpdateToOneWithWhereWithoutRegistrosDetInputObjectSchema } from './AlmacenesUpdateToOneWithWhereWithoutRegistrosDetInput.schema';
import { AlmacenesUpdateWithoutRegistrosDetInputObjectSchema as AlmacenesUpdateWithoutRegistrosDetInputObjectSchema } from './AlmacenesUpdateWithoutRegistrosDetInput.schema';
import { AlmacenesUncheckedUpdateWithoutRegistrosDetInputObjectSchema as AlmacenesUncheckedUpdateWithoutRegistrosDetInputObjectSchema } from './AlmacenesUncheckedUpdateWithoutRegistrosDetInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AlmacenesCreateWithoutRegistrosDetInputObjectSchema), z.lazy(() => AlmacenesUncheckedCreateWithoutRegistrosDetInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => AlmacenesCreateOrConnectWithoutRegistrosDetInputObjectSchema).optional(),
  upsert: z.lazy(() => AlmacenesUpsertWithoutRegistrosDetInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => AlmacenesWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => AlmacenesWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => AlmacenesWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => AlmacenesUpdateToOneWithWhereWithoutRegistrosDetInputObjectSchema), z.lazy(() => AlmacenesUpdateWithoutRegistrosDetInputObjectSchema), z.lazy(() => AlmacenesUncheckedUpdateWithoutRegistrosDetInputObjectSchema)]).optional()
}).strict();
export const AlmacenesUpdateOneWithoutRegistrosDetNestedInputObjectSchema: z.ZodType<Prisma.AlmacenesUpdateOneWithoutRegistrosDetNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesUpdateOneWithoutRegistrosDetNestedInput>;
export const AlmacenesUpdateOneWithoutRegistrosDetNestedInputObjectZodSchema = makeSchema();
