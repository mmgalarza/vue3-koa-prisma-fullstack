import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasUpdateWithoutVentasInputObjectSchema as EmpresasUpdateWithoutVentasInputObjectSchema } from './EmpresasUpdateWithoutVentasInput.schema';
import { EmpresasUncheckedUpdateWithoutVentasInputObjectSchema as EmpresasUncheckedUpdateWithoutVentasInputObjectSchema } from './EmpresasUncheckedUpdateWithoutVentasInput.schema';
import { EmpresasCreateWithoutVentasInputObjectSchema as EmpresasCreateWithoutVentasInputObjectSchema } from './EmpresasCreateWithoutVentasInput.schema';
import { EmpresasUncheckedCreateWithoutVentasInputObjectSchema as EmpresasUncheckedCreateWithoutVentasInputObjectSchema } from './EmpresasUncheckedCreateWithoutVentasInput.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EmpresasUpdateWithoutVentasInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutVentasInputObjectSchema)]),
  create: z.union([z.lazy(() => EmpresasCreateWithoutVentasInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutVentasInputObjectSchema)]),
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional()
}).strict();
export const EmpresasUpsertWithoutVentasInputObjectSchema: z.ZodType<Prisma.EmpresasUpsertWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpsertWithoutVentasInput>;
export const EmpresasUpsertWithoutVentasInputObjectZodSchema = makeSchema();
