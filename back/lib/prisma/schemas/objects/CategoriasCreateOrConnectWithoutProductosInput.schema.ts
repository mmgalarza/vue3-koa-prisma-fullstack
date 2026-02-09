import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasWhereUniqueInputObjectSchema as CategoriasWhereUniqueInputObjectSchema } from './CategoriasWhereUniqueInput.schema';
import { CategoriasCreateWithoutProductosInputObjectSchema as CategoriasCreateWithoutProductosInputObjectSchema } from './CategoriasCreateWithoutProductosInput.schema';
import { CategoriasUncheckedCreateWithoutProductosInputObjectSchema as CategoriasUncheckedCreateWithoutProductosInputObjectSchema } from './CategoriasUncheckedCreateWithoutProductosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoriasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CategoriasCreateWithoutProductosInputObjectSchema), z.lazy(() => CategoriasUncheckedCreateWithoutProductosInputObjectSchema)])
}).strict();
export const CategoriasCreateOrConnectWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriasCreateOrConnectWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasCreateOrConnectWithoutProductosInput>;
export const CategoriasCreateOrConnectWithoutProductosInputObjectZodSchema = makeSchema();
