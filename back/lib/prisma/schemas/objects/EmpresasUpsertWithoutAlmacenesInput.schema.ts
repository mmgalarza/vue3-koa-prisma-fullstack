import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasUpdateWithoutAlmacenesInputObjectSchema as EmpresasUpdateWithoutAlmacenesInputObjectSchema } from './EmpresasUpdateWithoutAlmacenesInput.schema';
import { EmpresasUncheckedUpdateWithoutAlmacenesInputObjectSchema as EmpresasUncheckedUpdateWithoutAlmacenesInputObjectSchema } from './EmpresasUncheckedUpdateWithoutAlmacenesInput.schema';
import { EmpresasCreateWithoutAlmacenesInputObjectSchema as EmpresasCreateWithoutAlmacenesInputObjectSchema } from './EmpresasCreateWithoutAlmacenesInput.schema';
import { EmpresasUncheckedCreateWithoutAlmacenesInputObjectSchema as EmpresasUncheckedCreateWithoutAlmacenesInputObjectSchema } from './EmpresasUncheckedCreateWithoutAlmacenesInput.schema';
import { EmpresasWhereInputObjectSchema as EmpresasWhereInputObjectSchema } from './EmpresasWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => EmpresasUpdateWithoutAlmacenesInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutAlmacenesInputObjectSchema)]),
  create: z.union([z.lazy(() => EmpresasCreateWithoutAlmacenesInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutAlmacenesInputObjectSchema)]),
  where: z.lazy(() => EmpresasWhereInputObjectSchema).optional()
}).strict();
export const EmpresasUpsertWithoutAlmacenesInputObjectSchema: z.ZodType<Prisma.EmpresasUpsertWithoutAlmacenesInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpsertWithoutAlmacenesInput>;
export const EmpresasUpsertWithoutAlmacenesInputObjectZodSchema = makeSchema();
