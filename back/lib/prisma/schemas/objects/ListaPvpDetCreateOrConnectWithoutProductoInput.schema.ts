import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './ListaPvpDetWhereUniqueInput.schema';
import { ListaPvpDetCreateWithoutProductoInputObjectSchema as ListaPvpDetCreateWithoutProductoInputObjectSchema } from './ListaPvpDetCreateWithoutProductoInput.schema';
import { ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema as ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema } from './ListaPvpDetUncheckedCreateWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ListaPvpDetCreateWithoutProductoInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema)])
}).strict();
export const ListaPvpDetCreateOrConnectWithoutProductoInputObjectSchema: z.ZodType<Prisma.ListaPvpDetCreateOrConnectWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetCreateOrConnectWithoutProductoInput>;
export const ListaPvpDetCreateOrConnectWithoutProductoInputObjectZodSchema = makeSchema();
