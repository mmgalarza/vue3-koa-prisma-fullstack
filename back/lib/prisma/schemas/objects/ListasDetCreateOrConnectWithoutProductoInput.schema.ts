import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './ListasDetWhereUniqueInput.schema';
import { ListasDetCreateWithoutProductoInputObjectSchema as ListasDetCreateWithoutProductoInputObjectSchema } from './ListasDetCreateWithoutProductoInput.schema';
import { ListasDetUncheckedCreateWithoutProductoInputObjectSchema as ListasDetUncheckedCreateWithoutProductoInputObjectSchema } from './ListasDetUncheckedCreateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasDetWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ListasDetCreateWithoutProductoInputObjectSchema), z.lazy(() => ListasDetUncheckedCreateWithoutProductoInputObjectSchema)])
}).strict();
export const ListasDetCreateOrConnectWithoutProductoInputObjectSchema: z.ZodType<Prisma.ListasDetCreateOrConnectWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetCreateOrConnectWithoutProductoInput>;
export const ListasDetCreateOrConnectWithoutProductoInputObjectZodSchema = makeSchema();
