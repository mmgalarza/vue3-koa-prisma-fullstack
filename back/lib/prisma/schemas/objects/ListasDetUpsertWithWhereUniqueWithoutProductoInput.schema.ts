import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './ListasDetWhereUniqueInput.schema';
import { ListasDetUpdateWithoutProductoInputObjectSchema as ListasDetUpdateWithoutProductoInputObjectSchema } from './ListasDetUpdateWithoutProductoInput.schema';
import { ListasDetUncheckedUpdateWithoutProductoInputObjectSchema as ListasDetUncheckedUpdateWithoutProductoInputObjectSchema } from './ListasDetUncheckedUpdateWithoutProductoInput.schema';
import { ListasDetCreateWithoutProductoInputObjectSchema as ListasDetCreateWithoutProductoInputObjectSchema } from './ListasDetCreateWithoutProductoInput.schema';
import { ListasDetUncheckedCreateWithoutProductoInputObjectSchema as ListasDetUncheckedCreateWithoutProductoInputObjectSchema } from './ListasDetUncheckedCreateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasDetWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ListasDetUpdateWithoutProductoInputObjectSchema), z.lazy(() => ListasDetUncheckedUpdateWithoutProductoInputObjectSchema)]),
  create: z.union([z.lazy(() => ListasDetCreateWithoutProductoInputObjectSchema), z.lazy(() => ListasDetUncheckedCreateWithoutProductoInputObjectSchema)])
}).strict();
export const ListasDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema: z.ZodType<Prisma.ListasDetUpsertWithWhereUniqueWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetUpsertWithWhereUniqueWithoutProductoInput>;
export const ListasDetUpsertWithWhereUniqueWithoutProductoInputObjectZodSchema = makeSchema();
