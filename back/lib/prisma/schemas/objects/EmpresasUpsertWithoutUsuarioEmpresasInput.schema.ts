import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasUpdateWithoutUsuarioEmpresasInputObjectSchema as EmpresasUpdateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasUpdateWithoutUsuarioEmpresasInput.schema';
import { EmpresasUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema as EmpresasUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasUncheckedUpdateWithoutUsuarioEmpresasInput.schema';
import { EmpresasCreateWithoutUsuarioEmpresasInputObjectSchema as EmpresasCreateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasCreateWithoutUsuarioEmpresasInput.schema';
import { EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema as EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema } from './EmpresasUncheckedCreateWithoutUsuarioEmpresasInput.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EmpresasUpdateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutUsuarioEmpresasInputObjectSchema)]),
  create: z.union([z.lazy(() => EmpresasCreateWithoutUsuarioEmpresasInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutUsuarioEmpresasInputObjectSchema)]),
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional()
}).strict();
export const EmpresasUpsertWithoutUsuarioEmpresasInputObjectSchema: z.ZodType<Prisma.EmpresasUpsertWithoutUsuarioEmpresasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpsertWithoutUsuarioEmpresasInput>;
export const EmpresasUpsertWithoutUsuarioEmpresasInputObjectZodSchema = makeSchema();
