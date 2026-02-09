import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasCreateWithoutProductosInputObjectSchema as CategoriasCreateWithoutProductosInputObjectSchema } from './CategoriasCreateWithoutProductosInput.schema';
import { CategoriasUncheckedCreateWithoutProductosInputObjectSchema as CategoriasUncheckedCreateWithoutProductosInputObjectSchema } from './CategoriasUncheckedCreateWithoutProductosInput.schema';
import { CategoriasCreateOrConnectWithoutProductosInputObjectSchema as CategoriasCreateOrConnectWithoutProductosInputObjectSchema } from './CategoriasCreateOrConnectWithoutProductosInput.schema';
import { CategoriasUpsertWithoutProductosInputObjectSchema as CategoriasUpsertWithoutProductosInputObjectSchema } from './CategoriasUpsertWithoutProductosInput.schema';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './CategoriasWhereUniqueInput.schema';
import { CategoriasUpdateToOneWithWhereWithoutProductosInputObjectSchema as CategoriasUpdateToOneWithWhereWithoutProductosInputObjectSchema } from './CategoriasUpdateToOneWithWhereWithoutProductosInput.schema';
import { CategoriasUpdateWithoutProductosInputObjectSchema as CategoriasUpdateWithoutProductosInputObjectSchema } from './CategoriasUpdateWithoutProductosInput.schema';
import { CategoriasUncheckedUpdateWithoutProductosInputObjectSchema as CategoriasUncheckedUpdateWithoutProductosInputObjectSchema } from './CategoriasUncheckedUpdateWithoutProductosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoriasCreateWithoutProductosInputObjectSchema), z.lazy(() => CategoriasUncheckedCreateWithoutProductosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoriasCreateOrConnectWithoutProductosInputObjectSchema).optional(),
  upsert: z.lazy(() => CategoriasUpsertWithoutProductosInputObjectSchema).optional(),
  connect: z.lazy(() => CategoriasWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CategoriasUpdateToOneWithWhereWithoutProductosInputObjectSchema), z.lazy(() => CategoriasUpdateWithoutProductosInputObjectSchema), z.lazy(() => CategoriasUncheckedUpdateWithoutProductosInputObjectSchema)]).optional()
}).strict();
export const CategoriasUpdateOneRequiredWithoutProductosNestedInputObjectSchema: z.ZodType<Prisma.CategoriasUpdateOneRequiredWithoutProductosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasUpdateOneRequiredWithoutProductosNestedInput>;
export const CategoriasUpdateOneRequiredWithoutProductosNestedInputObjectZodSchema = makeSchema();
