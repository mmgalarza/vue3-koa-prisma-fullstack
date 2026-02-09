import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutListasPvpInputObjectSchema as EmpresasCreateWithoutListasPvpInputObjectSchema } from './EmpresasCreateWithoutListasPvpInput.schema';
import { EmpresasUncheckedCreateWithoutListasPvpInputObjectSchema as EmpresasUncheckedCreateWithoutListasPvpInputObjectSchema } from './EmpresasUncheckedCreateWithoutListasPvpInput.schema';
import { EmpresasCreateOrConnectWithoutListasPvpInputObjectSchema as EmpresasCreateOrConnectWithoutListasPvpInputObjectSchema } from './EmpresasCreateOrConnectWithoutListasPvpInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutListasPvpInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutListasPvpInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutListasPvpInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional()
}).strict();
export const EmpresasCreateNestedOneWithoutListasPvpInputObjectSchema: z.ZodType<Prisma.EmpresasCreateNestedOneWithoutListasPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateNestedOneWithoutListasPvpInput>;
export const EmpresasCreateNestedOneWithoutListasPvpInputObjectZodSchema = makeSchema();
