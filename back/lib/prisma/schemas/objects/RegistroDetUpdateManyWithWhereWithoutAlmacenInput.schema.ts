import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetScalarWhereInputObjectSchema as RegistroDetScalarWhereInputObjectSchema } from './RegistroDetScalarWhereInput.schema';
import { RegistroDetUpdateManyMutationInputObjectSchema as RegistroDetUpdateManyMutationInputObjectSchema } from './RegistroDetUpdateManyMutationInput.schema';
import { RegistroDetUncheckedUpdateManyWithoutAlmacenInputObjectSchema as RegistroDetUncheckedUpdateManyWithoutAlmacenInputObjectSchema } from './RegistroDetUncheckedUpdateManyWithoutAlmacenInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RegistroDetUpdateManyMutationInputObjectSchema), z.lazy(() => RegistroDetUncheckedUpdateManyWithoutAlmacenInputObjectSchema)])
}).strict();
export const RegistroDetUpdateManyWithWhereWithoutAlmacenInputObjectSchema: z.ZodType<Prisma.RegistroDetUpdateManyWithWhereWithoutAlmacenInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUpdateManyWithWhereWithoutAlmacenInput>;
export const RegistroDetUpdateManyWithWhereWithoutAlmacenInputObjectZodSchema = makeSchema();
