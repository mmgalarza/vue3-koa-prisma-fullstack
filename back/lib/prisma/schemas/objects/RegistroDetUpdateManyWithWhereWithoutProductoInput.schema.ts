import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetScalarWhereInputObjectSchema as RegistroDetScalarWhereInputObjectSchema } from './RegistroDetScalarWhereInput.schema';
import { RegistroDetUpdateManyMutationInputObjectSchema as RegistroDetUpdateManyMutationInputObjectSchema } from './RegistroDetUpdateManyMutationInput.schema';
import { RegistroDetUncheckedUpdateManyWithoutProductoInputObjectSchema as RegistroDetUncheckedUpdateManyWithoutProductoInputObjectSchema } from './RegistroDetUncheckedUpdateManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroDetScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RegistroDetUpdateManyMutationInputObjectSchema), z.lazy(() => RegistroDetUncheckedUpdateManyWithoutProductoInputObjectSchema)])
}).strict();
export const RegistroDetUpdateManyWithWhereWithoutProductoInputObjectSchema: z.ZodType<Prisma.RegistroDetUpdateManyWithWhereWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUpdateManyWithWhereWithoutProductoInput>;
export const RegistroDetUpdateManyWithWhereWithoutProductoInputObjectZodSchema = makeSchema();
