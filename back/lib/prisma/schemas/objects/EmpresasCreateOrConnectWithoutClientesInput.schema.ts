import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasCreateWithoutClientesInputObjectSchema as EmpresasCreateWithoutClientesInputObjectSchema } from './EmpresasCreateWithoutClientesInput.schema';
import { EmpresasUncheckedCreateWithoutClientesInputObjectSchema as EmpresasUncheckedCreateWithoutClientesInputObjectSchema } from './EmpresasUncheckedCreateWithoutClientesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EmpresasCreateWithoutClientesInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutClientesInputObjectSchema)])
}).strict();
export const EmpresasCreateOrConnectWithoutClientesInputObjectSchema: z.ZodType<Prisma.EmpresasCreateOrConnectWithoutClientesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateOrConnectWithoutClientesInput>;
export const EmpresasCreateOrConnectWithoutClientesInputObjectZodSchema = makeSchema();
