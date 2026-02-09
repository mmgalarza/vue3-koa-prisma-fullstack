import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './ListaPvpDetWhereUniqueInput.schema';
import { ListaPvpDetUpdateWithoutProductoInputObjectSchema as ListaPvpDetUpdateWithoutProductoInputObjectSchema } from './ListaPvpDetUpdateWithoutProductoInput.schema';
import { ListaPvpDetUncheckedUpdateWithoutProductoInputObjectSchema as ListaPvpDetUncheckedUpdateWithoutProductoInputObjectSchema } from './ListaPvpDetUncheckedUpdateWithoutProductoInput.schema';
import { ListaPvpDetCreateWithoutProductoInputObjectSchema as ListaPvpDetCreateWithoutProductoInputObjectSchema } from './ListaPvpDetCreateWithoutProductoInput.schema';
import { ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema as ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema } from './ListaPvpDetUncheckedCreateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ListaPvpDetUpdateWithoutProductoInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedUpdateWithoutProductoInputObjectSchema)]),
  create: z.union([z.lazy(() => ListaPvpDetCreateWithoutProductoInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema)])
}).strict();
export const ListaPvpDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema: z.ZodType<Prisma.ListaPvpDetUpsertWithWhereUniqueWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetUpsertWithWhereUniqueWithoutProductoInput>;
export const ListaPvpDetUpsertWithWhereUniqueWithoutProductoInputObjectZodSchema = makeSchema();
