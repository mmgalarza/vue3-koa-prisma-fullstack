import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasCreateWithoutListasPvpInputObjectSchema as EmpresasCreateWithoutListasPvpInputObjectSchema } from './EmpresasCreateWithoutListasPvpInput.schema';
import { EmpresasUncheckedCreateWithoutListasPvpInputObjectSchema as EmpresasUncheckedCreateWithoutListasPvpInputObjectSchema } from './EmpresasUncheckedCreateWithoutListasPvpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => EmpresasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => EmpresasCreateWithoutListasPvpInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutListasPvpInputObjectSchema)])
}).strict();
export const EmpresasCreateOrConnectWithoutListasPvpInputObjectSchema: z.ZodType<Prisma.EmpresasCreateOrConnectWithoutListasPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasCreateOrConnectWithoutListasPvpInput>;
export const EmpresasCreateOrConnectWithoutListasPvpInputObjectZodSchema = makeSchema();
