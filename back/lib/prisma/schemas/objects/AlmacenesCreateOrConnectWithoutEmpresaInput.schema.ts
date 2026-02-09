import * as z from 'zod';
import type { Prisma } from '../../client';
import { AlmacenesWhereUniqueInputObjectSchema as AlmacenesWhereUniqueInputObjectSchema } from './AlmacenesWhereUniqueInput.schema';
import { AlmacenesCreateWithoutEmpresaInputObjectSchema as AlmacenesCreateWithoutEmpresaInputObjectSchema } from './AlmacenesCreateWithoutEmpresaInput.schema';
import { AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema as AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema } from './AlmacenesUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AlmacenesWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AlmacenesCreateWithoutEmpresaInputObjectSchema), z.lazy(() => AlmacenesUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const AlmacenesCreateOrConnectWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.AlmacenesCreateOrConnectWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesCreateOrConnectWithoutEmpresaInput>;
export const AlmacenesCreateOrConnectWithoutEmpresaInputObjectZodSchema = makeSchema();
