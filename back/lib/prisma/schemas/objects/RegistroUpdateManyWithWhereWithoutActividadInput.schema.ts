import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroScalarWhereInputObjectSchema as RegistroScalarWhereInputObjectSchema } from './RegistroScalarWhereInput.schema';
import { RegistroUpdateManyMutationInputObjectSchema as RegistroUpdateManyMutationInputObjectSchema } from './RegistroUpdateManyMutationInput.schema';
import { RegistroUncheckedUpdateManyWithoutActividadInputObjectSchema as RegistroUncheckedUpdateManyWithoutActividadInputObjectSchema } from './RegistroUncheckedUpdateManyWithoutActividadInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => RegistroUpdateManyMutationInputObjectSchema), z.lazy(() => RegistroUncheckedUpdateManyWithoutActividadInputObjectSchema)])
}).strict();
export const RegistroUpdateManyWithWhereWithoutActividadInputObjectSchema: z.ZodType<Prisma.RegistroUpdateManyWithWhereWithoutActividadInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateManyWithWhereWithoutActividadInput>;
export const RegistroUpdateManyWithWhereWithoutActividadInputObjectZodSchema = makeSchema();
