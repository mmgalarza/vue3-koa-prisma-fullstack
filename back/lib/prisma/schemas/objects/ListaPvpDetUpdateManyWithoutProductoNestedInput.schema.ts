import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetCreateWithoutProductoInputObjectSchema as ListaPvpDetCreateWithoutProductoInputObjectSchema } from './ListaPvpDetCreateWithoutProductoInput.schema';
import { ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema as ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema } from './ListaPvpDetUncheckedCreateWithoutProductoInput.schema';
import { ListaPvpDetCreateOrConnectWithoutProductoInputObjectSchema as ListaPvpDetCreateOrConnectWithoutProductoInputObjectSchema } from './ListaPvpDetCreateOrConnectWithoutProductoInput.schema';
import { ListaPvpDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema as ListaPvpDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema } from './ListaPvpDetUpsertWithWhereUniqueWithoutProductoInput.schema';
import { ListaPvpDetCreateManyProductoInputEnvelopeObjectSchema as ListaPvpDetCreateManyProductoInputEnvelopeObjectSchema } from './ListaPvpDetCreateManyProductoInputEnvelope.schema';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './ListaPvpDetWhereUniqueInput.schema';
import { ListaPvpDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema as ListaPvpDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema } from './ListaPvpDetUpdateWithWhereUniqueWithoutProductoInput.schema';
import { ListaPvpDetUpdateManyWithWhereWithoutProductoInputObjectSchema as ListaPvpDetUpdateManyWithWhereWithoutProductoInputObjectSchema } from './ListaPvpDetUpdateManyWithWhereWithoutProductoInput.schema';
import { ListaPvpDetScalarWhereInputObjectSchema as ListaPvpDetScalarWhereInputObjectSchema } from './ListaPvpDetScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListaPvpDetCreateWithoutProductoInputObjectSchema), z.lazy(() => ListaPvpDetCreateWithoutProductoInputObjectSchema).array(), z.lazy(() => ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedCreateWithoutProductoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ListaPvpDetCreateOrConnectWithoutProductoInputObjectSchema), z.lazy(() => ListaPvpDetCreateOrConnectWithoutProductoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ListaPvpDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema), z.lazy(() => ListaPvpDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ListaPvpDetCreateManyProductoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ListaPvpDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema), z.lazy(() => ListaPvpDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ListaPvpDetUpdateManyWithWhereWithoutProductoInputObjectSchema), z.lazy(() => ListaPvpDetUpdateManyWithWhereWithoutProductoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ListaPvpDetScalarWhereInputObjectSchema), z.lazy(() => ListaPvpDetScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ListaPvpDetUpdateManyWithoutProductoNestedInputObjectSchema: z.ZodType<Prisma.ListaPvpDetUpdateManyWithoutProductoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetUpdateManyWithoutProductoNestedInput>;
export const ListaPvpDetUpdateManyWithoutProductoNestedInputObjectZodSchema = makeSchema();
