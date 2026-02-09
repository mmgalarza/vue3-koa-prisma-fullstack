import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutAlmacenesInputObjectSchema as EmpresasCreateWithoutAlmacenesInputObjectSchema } from './EmpresasCreateWithoutAlmacenesInput.schema';
import { EmpresasUncheckedCreateWithoutAlmacenesInputObjectSchema as EmpresasUncheckedCreateWithoutAlmacenesInputObjectSchema } from './EmpresasUncheckedCreateWithoutAlmacenesInput.schema';
import { EmpresasCreateOrConnectWithoutAlmacenesInputObjectSchema as EmpresasCreateOrConnectWithoutAlmacenesInputObjectSchema } from './EmpresasCreateOrConnectWithoutAlmacenesInput.schema';
import { EmpresasUpsertWithoutAlmacenesInputObjectSchema as EmpresasUpsertWithoutAlmacenesInputObjectSchema } from './EmpresasUpsertWithoutAlmacenesInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasUpdateToOneWithWhereWithoutAlmacenesInputObjectSchema as EmpresasUpdateToOneWithWhereWithoutAlmacenesInputObjectSchema } from './EmpresasUpdateToOneWithWhereWithoutAlmacenesInput.schema';
import { EmpresasUpdateWithoutAlmacenesInputObjectSchema as EmpresasUpdateWithoutAlmacenesInputObjectSchema } from './EmpresasUpdateWithoutAlmacenesInput.schema';
import { EmpresasUncheckedUpdateWithoutAlmacenesInputObjectSchema as EmpresasUncheckedUpdateWithoutAlmacenesInputObjectSchema } from './EmpresasUncheckedUpdateWithoutAlmacenesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutAlmacenesInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutAlmacenesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutAlmacenesInputObjectSchema).optional(),
  upsert: z.lazy(() => EmpresasUpsertWithoutAlmacenesInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EmpresasUpdateToOneWithWhereWithoutAlmacenesInputObjectSchema), z.lazy(() => EmpresasUpdateWithoutAlmacenesInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutAlmacenesInputObjectSchema)]).optional()
}).strict();
export const EmpresasUpdateOneRequiredWithoutAlmacenesNestedInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutAlmacenesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutAlmacenesNestedInput>;
export const EmpresasUpdateOneRequiredWithoutAlmacenesNestedInputObjectZodSchema = makeSchema();
