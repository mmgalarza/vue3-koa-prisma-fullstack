import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesScalarWhereInputObjectSchema as AlmacenesScalarWhereInputObjectSchema } from './AlmacenesScalarWhereInput.schema';
import { AlmacenesUpdateManyMutationInputObjectSchema as AlmacenesUpdateManyMutationInputObjectSchema } from './AlmacenesUpdateManyMutationInput.schema';
import { AlmacenesUncheckedUpdateManyWithoutEmpresaInputObjectSchema as AlmacenesUncheckedUpdateManyWithoutEmpresaInputObjectSchema } from './AlmacenesUncheckedUpdateManyWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AlmacenesScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AlmacenesUpdateManyMutationInputObjectSchema), z.lazy(() => AlmacenesUncheckedUpdateManyWithoutEmpresaInputObjectSchema)])
}).strict();
export const AlmacenesUpdateManyWithWhereWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.AlmacenesUpdateManyWithWhereWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesUpdateManyWithWhereWithoutEmpresaInput>;
export const AlmacenesUpdateManyWithWhereWithoutEmpresaInputObjectZodSchema = makeSchema();
