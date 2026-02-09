import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasCreateWithoutProductosInputObjectSchema as CategoriasCreateWithoutProductosInputObjectSchema } from './CategoriasCreateWithoutProductosInput.schema';
import { CategoriasUncheckedCreateWithoutProductosInputObjectSchema as CategoriasUncheckedCreateWithoutProductosInputObjectSchema } from './CategoriasUncheckedCreateWithoutProductosInput.schema';
import { CategoriasCreateOrConnectWithoutProductosInputObjectSchema as CategoriasCreateOrConnectWithoutProductosInputObjectSchema } from './CategoriasCreateOrConnectWithoutProductosInput.schema';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './CategoriasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoriasCreateWithoutProductosInputObjectSchema), z.lazy(() => CategoriasUncheckedCreateWithoutProductosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoriasCreateOrConnectWithoutProductosInputObjectSchema).optional(),
  connect: z.lazy(() => CategoriasWhereUniqueInputObjectSchema).optional()
}).strict();
export const CategoriasCreateNestedOneWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriasCreateNestedOneWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasCreateNestedOneWithoutProductosInput>;
export const CategoriasCreateNestedOneWithoutProductosInputObjectZodSchema = makeSchema();
