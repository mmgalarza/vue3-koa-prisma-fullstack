import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './ListasDetWhereUniqueInput.schema';
import { ListasDetUpdateWithoutProductoInputObjectSchema as ListasDetUpdateWithoutProductoInputObjectSchema } from './ListasDetUpdateWithoutProductoInput.schema';
import { ListasDetUncheckedUpdateWithoutProductoInputObjectSchema as ListasDetUncheckedUpdateWithoutProductoInputObjectSchema } from './ListasDetUncheckedUpdateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasDetWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ListasDetUpdateWithoutProductoInputObjectSchema), z.lazy(() => ListasDetUncheckedUpdateWithoutProductoInputObjectSchema)])
}).strict();
export const ListasDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema: z.ZodType<Prisma.ListasDetUpdateWithWhereUniqueWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetUpdateWithWhereUniqueWithoutProductoInput>;
export const ListasDetUpdateWithWhereUniqueWithoutProductoInputObjectZodSchema = makeSchema();
