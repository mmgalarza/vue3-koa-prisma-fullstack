import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasUpdateWithoutClientesInputObjectSchema as EmpresasUpdateWithoutClientesInputObjectSchema } from './EmpresasUpdateWithoutClientesInput.schema';
import { EmpresasUncheckedUpdateWithoutClientesInputObjectSchema as EmpresasUncheckedUpdateWithoutClientesInputObjectSchema } from './EmpresasUncheckedUpdateWithoutClientesInput.schema';
import { EmpresasCreateWithoutClientesInputObjectSchema as EmpresasCreateWithoutClientesInputObjectSchema } from './EmpresasCreateWithoutClientesInput.schema';
import { EmpresasUncheckedCreateWithoutClientesInputObjectSchema as EmpresasUncheckedCreateWithoutClientesInputObjectSchema } from './EmpresasUncheckedCreateWithoutClientesInput.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EmpresasUpdateWithoutClientesInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutClientesInputObjectSchema)]),
  create: z.union([z.lazy(() => EmpresasCreateWithoutClientesInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutClientesInputObjectSchema)]),
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional()
}).strict();
export const EmpresasUpsertWithoutClientesInputObjectSchema: z.ZodType<Prisma.EmpresasUpsertWithoutClientesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpsertWithoutClientesInput>;
export const EmpresasUpsertWithoutClientesInputObjectZodSchema = makeSchema();
