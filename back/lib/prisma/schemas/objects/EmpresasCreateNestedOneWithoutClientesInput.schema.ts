import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutClientesInputObjectSchema as EmpresasCreateWithoutClientesInputObjectSchema } from './EmpresasCreateWithoutClientesInput.schema';
import { EmpresasUncheckedCreateWithoutClientesInputObjectSchema as EmpresasUncheckedCreateWithoutClientesInputObjectSchema } from './EmpresasUncheckedCreateWithoutClientesInput.schema';
import { EmpresasCreateOrConnectWithoutClientesInputObjectSchema as EmpresasCreateOrConnectWithoutClientesInputObjectSchema } from './EmpresasCreateOrConnectWithoutClientesInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutClientesInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutClientesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutClientesInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional()
}).strict();
export const EmpresasCreateNestedOneWithoutClientesInputObjectSchema: z.ZodType<Prisma.EmpresasCreateNestedOneWithoutClientesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateNestedOneWithoutClientesInput>;
export const EmpresasCreateNestedOneWithoutClientesInputObjectZodSchema = makeSchema();
