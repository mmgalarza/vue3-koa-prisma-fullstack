import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetScalarWhereInputObjectSchema as RegistroDetScalarWhereInputObjectSchema } from './RegistroDetScalarWhereInput.schema';
import { RegistroDetUpdateManyMutationInputObjectSchema as RegistroDetUpdateManyMutationInputObjectSchema } from './RegistroDetUpdateManyMutationInput.schema';
import { RegistroDetUncheckedUpdateManyWithoutRegistroInputObjectSchema as RegistroDetUncheckedUpdateManyWithoutRegistroInputObjectSchema } from './RegistroDetUncheckedUpdateManyWithoutRegistroInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RegistroDetUpdateManyMutationInputObjectSchema), z.lazy(() => RegistroDetUncheckedUpdateManyWithoutRegistroInputObjectSchema)])
}).strict();
export const RegistroDetUpdateManyWithWhereWithoutRegistroInputObjectSchema: z.ZodType<Prisma.RegistroDetUpdateManyWithWhereWithoutRegistroInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUpdateManyWithWhereWithoutRegistroInput>;
export const RegistroDetUpdateManyWithWhereWithoutRegistroInputObjectZodSchema = makeSchema();
