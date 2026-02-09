import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroScalarWhereInputObjectSchema as RegistroScalarWhereInputObjectSchema } from './RegistroScalarWhereInput.schema';
import { RegistroUpdateManyMutationInputObjectSchema as RegistroUpdateManyMutationInputObjectSchema } from './RegistroUpdateManyMutationInput.schema';
import { RegistroUncheckedUpdateManyWithoutTipoDocInputObjectSchema as RegistroUncheckedUpdateManyWithoutTipoDocInputObjectSchema } from './RegistroUncheckedUpdateManyWithoutTipoDocInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RegistroUpdateManyMutationInputObjectSchema), z.lazy(() => RegistroUncheckedUpdateManyWithoutTipoDocInputObjectSchema)])
}).strict();
export const RegistroUpdateManyWithWhereWithoutTipoDocInputObjectSchema: z.ZodType<Prisma.RegistroUpdateManyWithWhereWithoutTipoDocInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateManyWithWhereWithoutTipoDocInput>;
export const RegistroUpdateManyWithWhereWithoutTipoDocInputObjectZodSchema = makeSchema();
