import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetCreateWithoutProductoInputObjectSchema as ListaPvpDetCreateWithoutProductoInputObjectSchema } from './ListaPvpDetCreateWithoutProductoInput.schema';
import { ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema as ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema } from './ListaPvpDetUncheckedCreateWithoutProductoInput.schema';
import { ListaPvpDetCreateOrConnectWithoutProductoInputObjectSchema as ListaPvpDetCreateOrConnectWithoutProductoInputObjectSchema } from './ListaPvpDetCreateOrConnectWithoutProductoInput.schema';
import { ListaPvpDetCreateManyProductoInputEnvelopeObjectSchema as ListaPvpDetCreateManyProductoInputEnvelopeObjectSchema } from './ListaPvpDetCreateManyProductoInputEnvelope.schema';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './ListaPvpDetWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListaPvpDetCreateWithoutProductoInputObjectSchema), z.lazy(() => ListaPvpDetCreateWithoutProductoInputObjectSchema).array(), z.lazy(() => ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ListaPvpDetCreateOrConnectWithoutProductoInputObjectSchema), z.lazy(() => ListaPvpDetCreateOrConnectWithoutProductoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ListaPvpDetCreateManyProductoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ListaPvpDetCreateNestedManyWithoutProductoInputObjectSchema: z.ZodType<Prisma.ListaPvpDetCreateNestedManyWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetCreateNestedManyWithoutProductoInput>;
export const ListaPvpDetCreateNestedManyWithoutProductoInputObjectZodSchema = makeSchema();
