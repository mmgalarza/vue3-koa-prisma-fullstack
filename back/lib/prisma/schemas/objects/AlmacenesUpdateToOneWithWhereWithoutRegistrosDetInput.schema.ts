import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesWhereInputObjectSchema as AlmacenesWhereInputObjectSchema } from './AlmacenesWhereInput.schema';
import { AlmacenesUpdateWithoutRegistrosDetInputObjectSchema as AlmacenesUpdateWithoutRegistrosDetInputObjectSchema } from './AlmacenesUpdateWithoutRegistrosDetInput.schema';
import { AlmacenesUncheckedUpdateWithoutRegistrosDetInputObjectSchema as AlmacenesUncheckedUpdateWithoutRegistrosDetInputObjectSchema } from './AlmacenesUncheckedUpdateWithoutRegistrosDetInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AlmacenesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => AlmacenesUpdateWithoutRegistrosDetInputObjectSchema), z.lazy(() => AlmacenesUncheckedUpdateWithoutRegistrosDetInputObjectSchema)])
}).strict();
export const AlmacenesUpdateToOneWithWhereWithoutRegistrosDetInputObjectSchema: z.ZodType<Prisma.AlmacenesUpdateToOneWithWhereWithoutRegistrosDetInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesUpdateToOneWithWhereWithoutRegistrosDetInput>;
export const AlmacenesUpdateToOneWithWhereWithoutRegistrosDetInputObjectZodSchema = makeSchema();
