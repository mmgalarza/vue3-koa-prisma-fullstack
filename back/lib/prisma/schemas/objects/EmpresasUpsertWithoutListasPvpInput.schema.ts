import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasUpdateWithoutListasPvpInputObjectSchema as EmpresasUpdateWithoutListasPvpInputObjectSchema } from './EmpresasUpdateWithoutListasPvpInput.schema';
import { EmpresasUncheckedUpdateWithoutListasPvpInputObjectSchema as EmpresasUncheckedUpdateWithoutListasPvpInputObjectSchema } from './EmpresasUncheckedUpdateWithoutListasPvpInput.schema';
import { EmpresasCreateWithoutListasPvpInputObjectSchema as EmpresasCreateWithoutListasPvpInputObjectSchema } from './EmpresasCreateWithoutListasPvpInput.schema';
import { EmpresasUncheckedCreateWithoutListasPvpInputObjectSchema as EmpresasUncheckedCreateWithoutListasPvpInputObjectSchema } from './EmpresasUncheckedCreateWithoutListasPvpInput.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EmpresasUpdateWithoutListasPvpInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutListasPvpInputObjectSchema)]),
  create: z.union([z.lazy(() => EmpresasCreateWithoutListasPvpInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutListasPvpInputObjectSchema)]),
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional()
}).strict();
export const EmpresasUpsertWithoutListasPvpInputObjectSchema: z.ZodType<Prisma.EmpresasUpsertWithoutListasPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpsertWithoutListasPvpInput>;
export const EmpresasUpsertWithoutListasPvpInputObjectZodSchema = makeSchema();
