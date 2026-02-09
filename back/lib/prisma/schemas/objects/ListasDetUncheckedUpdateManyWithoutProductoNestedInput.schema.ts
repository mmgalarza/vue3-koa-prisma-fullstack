import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetCreateWithoutProductoInputObjectSchema as ListasDetCreateWithoutProductoInputObjectSchema } from './ListasDetCreateWithoutProductoInput.schema';
import { ListasDetUncheckedCreateWithoutProductoInputObjectSchema as ListasDetUncheckedCreateWithoutProductoInputObjectSchema } from './ListasDetUncheckedCreateWithoutProductoInput.schema';
import { ListasDetCreateOrConnectWithoutProductoInputObjectSchema as ListasDetCreateOrConnectWithoutProductoInputObjectSchema } from './ListasDetCreateOrConnectWithoutProductoInput.schema';
import { ListasDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema as ListasDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema } from './ListasDetUpsertWithWhereUniqueWithoutProductoInput.schema';
import { ListasDetCreateManyProductoInputEnvelopeObjectSchema as ListasDetCreateManyProductoInputEnvelopeObjectSchema } from './ListasDetCreateManyProductoInputEnvelope.schema';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './ListasDetWhereUniqueInput.schema';
import { ListasDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema as ListasDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema } from './ListasDetUpdateWithWhereUniqueWithoutProductoInput.schema';
import { ListasDetUpdateManyWithWhereWithoutProductoInputObjectSchema as ListasDetUpdateManyWithWhereWithoutProductoInputObjectSchema } from './ListasDetUpdateManyWithWhereWithoutProductoInput.schema';
import { ListasDetScalarWhereInputObjectSchema as ListasDetScalarWhereInputObjectSchema } from './ListasDetScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListasDetCreateWithoutProductoInputObjectSchema), z.lazy(() => ListasDetCreateWithoutProductoInputObjectSchema).array(), z.lazy(() => ListasDetUncheckedCreateWithoutProductoInputObjectSchema), z.lazy(() => ListasDetUncheckedCreateWithoutProductoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ListasDetCreateOrConnectWithoutProductoInputObjectSchema), z.lazy(() => ListasDetCreateOrConnectWithoutProductoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ListasDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema), z.lazy(() => ListasDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ListasDetCreateManyProductoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ListasDetWhereUniqueInputObjectSchema), z.lazy(() => ListasDetWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ListasDetWhereUniqueInputObjectSchema), z.lazy(() => ListasDetWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ListasDetWhereUniqueInputObjectSchema), z.lazy(() => ListasDetWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ListasDetWhereUniqueInputObjectSchema), z.lazy(() => ListasDetWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ListasDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema), z.lazy(() => ListasDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ListasDetUpdateManyWithWhereWithoutProductoInputObjectSchema), z.lazy(() => ListasDetUpdateManyWithWhereWithoutProductoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ListasDetScalarWhereInputObjectSchema), z.lazy(() => ListasDetScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ListasDetUncheckedUpdateManyWithoutProductoNestedInputObjectSchema: z.ZodType<Prisma.ListasDetUncheckedUpdateManyWithoutProductoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetUncheckedUpdateManyWithoutProductoNestedInput>;
export const ListasDetUncheckedUpdateManyWithoutProductoNestedInputObjectZodSchema = makeSchema();
