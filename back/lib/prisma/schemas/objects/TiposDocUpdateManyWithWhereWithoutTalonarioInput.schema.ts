import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposDocScalarWhereInputObjectSchema as TiposDocScalarWhereInputObjectSchema } from './TiposDocScalarWhereInput.schema';
import { TiposDocUpdateManyMutationInputObjectSchema as TiposDocUpdateManyMutationInputObjectSchema } from './TiposDocUpdateManyMutationInput.schema';
import { TiposDocUncheckedUpdateManyWithoutTalonarioInputObjectSchema as TiposDocUncheckedUpdateManyWithoutTalonarioInputObjectSchema } from './TiposDocUncheckedUpdateManyWithoutTalonarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TiposDocScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TiposDocUpdateManyMutationInputObjectSchema), z.lazy(() => TiposDocUncheckedUpdateManyWithoutTalonarioInputObjectSchema)])
}).strict();
export const TiposDocUpdateManyWithWhereWithoutTalonarioInputObjectSchema: z.ZodType<Prisma.TiposDocUpdateManyWithWhereWithoutTalonarioInput> = makeSchema() as unknown as z.ZodType<Prisma.TiposDocUpdateManyWithWhereWithoutTalonarioInput>;
export const TiposDocUpdateManyWithWhereWithoutTalonarioInputObjectZodSchema = makeSchema();
