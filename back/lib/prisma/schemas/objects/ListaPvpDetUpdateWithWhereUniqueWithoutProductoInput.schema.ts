import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './ListaPvpDetWhereUniqueInput.schema';
import { ListaPvpDetUpdateWithoutProductoInputObjectSchema as ListaPvpDetUpdateWithoutProductoInputObjectSchema } from './ListaPvpDetUpdateWithoutProductoInput.schema';
import { ListaPvpDetUncheckedUpdateWithoutProductoInputObjectSchema as ListaPvpDetUncheckedUpdateWithoutProductoInputObjectSchema } from './ListaPvpDetUncheckedUpdateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ListaPvpDetUpdateWithoutProductoInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedUpdateWithoutProductoInputObjectSchema)])
}).strict();
export const ListaPvpDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema: z.ZodType<Prisma.ListaPvpDetUpdateWithWhereUniqueWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetUpdateWithWhereUniqueWithoutProductoInput>;
export const ListaPvpDetUpdateWithWhereUniqueWithoutProductoInputObjectZodSchema = makeSchema();
