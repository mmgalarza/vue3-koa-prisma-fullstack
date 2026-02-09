import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './AlmacenesWhereUniqueInput.schema';
import { AlmacenesUpdateWithoutEmpresaInputObjectSchema as AlmacenesUpdateWithoutEmpresaInputObjectSchema } from './AlmacenesUpdateWithoutEmpresaInput.schema';
import { AlmacenesUncheckedUpdateWithoutEmpresaInputObjectSchema as AlmacenesUncheckedUpdateWithoutEmpresaInputObjectSchema } from './AlmacenesUncheckedUpdateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AlmacenesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AlmacenesUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => AlmacenesUncheckedUpdateWithoutEmpresaInputObjectSchema)])
}).strict();
export const AlmacenesUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.AlmacenesUpdateWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesUpdateWithWhereUniqueWithoutEmpresaInput>;
export const AlmacenesUpdateWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
