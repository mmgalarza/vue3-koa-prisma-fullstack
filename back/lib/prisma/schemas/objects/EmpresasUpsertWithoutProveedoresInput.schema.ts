import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasUpdateWithoutProveedoresInputObjectSchema as EmpresasUpdateWithoutProveedoresInputObjectSchema } from './EmpresasUpdateWithoutProveedoresInput.schema';
import { EmpresasUncheckedUpdateWithoutProveedoresInputObjectSchema as EmpresasUncheckedUpdateWithoutProveedoresInputObjectSchema } from './EmpresasUncheckedUpdateWithoutProveedoresInput.schema';
import { EmpresasCreateWithoutProveedoresInputObjectSchema as EmpresasCreateWithoutProveedoresInputObjectSchema } from './EmpresasCreateWithoutProveedoresInput.schema';
import { EmpresasUncheckedCreateWithoutProveedoresInputObjectSchema as EmpresasUncheckedCreateWithoutProveedoresInputObjectSchema } from './EmpresasUncheckedCreateWithoutProveedoresInput.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EmpresasUpdateWithoutProveedoresInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutProveedoresInputObjectSchema)]),
  create: z.union([z.lazy(() => EmpresasCreateWithoutProveedoresInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutProveedoresInputObjectSchema)]),
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional()
}).strict();
export const EmpresasUpsertWithoutProveedoresInputObjectSchema: z.ZodType<Prisma.EmpresasUpsertWithoutProveedoresInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpsertWithoutProveedoresInput>;
export const EmpresasUpsertWithoutProveedoresInputObjectZodSchema = makeSchema();
