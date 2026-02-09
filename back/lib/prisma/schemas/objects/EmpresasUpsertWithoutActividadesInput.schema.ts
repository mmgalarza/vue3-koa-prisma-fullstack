import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasUpdateWithoutActividadesInputObjectSchema as EmpresasUpdateWithoutActividadesInputObjectSchema } from './EmpresasUpdateWithoutActividadesInput.schema';
import { EmpresasUncheckedUpdateWithoutActividadesInputObjectSchema as EmpresasUncheckedUpdateWithoutActividadesInputObjectSchema } from './EmpresasUncheckedUpdateWithoutActividadesInput.schema';
import { EmpresasCreateWithoutActividadesInputObjectSchema as EmpresasCreateWithoutActividadesInputObjectSchema } from './EmpresasCreateWithoutActividadesInput.schema';
import { EmpresasUncheckedCreateWithoutActividadesInputObjectSchema as EmpresasUncheckedCreateWithoutActividadesInputObjectSchema } from './EmpresasUncheckedCreateWithoutActividadesInput.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EmpresasUpdateWithoutActividadesInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutActividadesInputObjectSchema)]),
  create: z.union([z.lazy(() => EmpresasCreateWithoutActividadesInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutActividadesInputObjectSchema)]),
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional()
}).strict();
export const EmpresasUpsertWithoutActividadesInputObjectSchema: z.ZodType<Prisma.EmpresasUpsertWithoutActividadesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpsertWithoutActividadesInput>;
export const EmpresasUpsertWithoutActividadesInputObjectZodSchema = makeSchema();
