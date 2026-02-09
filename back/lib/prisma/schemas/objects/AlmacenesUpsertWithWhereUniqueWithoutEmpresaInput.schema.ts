import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './AlmacenesWhereUniqueInput.schema';
import { AlmacenesUpdateWithoutEmpresaInputObjectSchema as AlmacenesUpdateWithoutEmpresaInputObjectSchema } from './AlmacenesUpdateWithoutEmpresaInput.schema';
import { AlmacenesUncheckedUpdateWithoutEmpresaInputObjectSchema as AlmacenesUncheckedUpdateWithoutEmpresaInputObjectSchema } from './AlmacenesUncheckedUpdateWithoutEmpresaInput.schema';
import { AlmacenesCreateWithoutEmpresaInputObjectSchema as AlmacenesCreateWithoutEmpresaInputObjectSchema } from './AlmacenesCreateWithoutEmpresaInput.schema';
import { AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema as AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema } from './AlmacenesUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AlmacenesWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AlmacenesUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => AlmacenesUncheckedUpdateWithoutEmpresaInputObjectSchema)]),
  create: z.union([z.lazy(() => AlmacenesCreateWithoutEmpresaInputObjectSchema), z.lazy(() => AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const AlmacenesUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.AlmacenesUpsertWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesUpsertWithWhereUniqueWithoutEmpresaInput>;
export const AlmacenesUpsertWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
