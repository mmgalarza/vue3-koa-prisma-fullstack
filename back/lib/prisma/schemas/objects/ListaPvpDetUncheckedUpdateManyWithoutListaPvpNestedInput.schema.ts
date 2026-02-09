import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetCreateWithoutListaPvpInputObjectSchema as ListaPvpDetCreateWithoutListaPvpInputObjectSchema } from './ListaPvpDetCreateWithoutListaPvpInput.schema';
import { ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema as ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema } from './ListaPvpDetUncheckedCreateWithoutListaPvpInput.schema';
import { ListaPvpDetCreateOrConnectWithoutListaPvpInputObjectSchema as ListaPvpDetCreateOrConnectWithoutListaPvpInputObjectSchema } from './ListaPvpDetCreateOrConnectWithoutListaPvpInput.schema';
import { ListaPvpDetUpsertWithWhereUniqueWithoutListaPvpInputObjectSchema as ListaPvpDetUpsertWithWhereUniqueWithoutListaPvpInputObjectSchema } from './ListaPvpDetUpsertWithWhereUniqueWithoutListaPvpInput.schema';
import { ListaPvpDetCreateManyListaPvpInputEnvelopeObjectSchema as ListaPvpDetCreateManyListaPvpInputEnvelopeObjectSchema } from './ListaPvpDetCreateManyListaPvpInputEnvelope.schema';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './ListaPvpDetWhereUniqueInput.schema';
import { ListaPvpDetUpdateWithWhereUniqueWithoutListaPvpInputObjectSchema as ListaPvpDetUpdateWithWhereUniqueWithoutListaPvpInputObjectSchema } from './ListaPvpDetUpdateWithWhereUniqueWithoutListaPvpInput.schema';
import { ListaPvpDetUpdateManyWithWhereWithoutListaPvpInputObjectSchema as ListaPvpDetUpdateManyWithWhereWithoutListaPvpInputObjectSchema } from './ListaPvpDetUpdateManyWithWhereWithoutListaPvpInput.schema';
import { ListaPvpDetScalarWhereInputObjectSchema as ListaPvpDetScalarWhereInputObjectSchema } from './ListaPvpDetScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListaPvpDetCreateWithoutListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetCreateWithoutListaPvpInputObjectSchema).array(), z.lazy(() => ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ListaPvpDetCreateOrConnectWithoutListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetCreateOrConnectWithoutListaPvpInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ListaPvpDetUpsertWithWhereUniqueWithoutListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetUpsertWithWhereUniqueWithoutListaPvpInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ListaPvpDetCreateManyListaPvpInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ListaPvpDetUpdateWithWhereUniqueWithoutListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetUpdateWithWhereUniqueWithoutListaPvpInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ListaPvpDetUpdateManyWithWhereWithoutListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetUpdateManyWithWhereWithoutListaPvpInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ListaPvpDetScalarWhereInputObjectSchema), z.lazy(() => ListaPvpDetScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ListaPvpDetUncheckedUpdateManyWithoutListaPvpNestedInputObjectSchema: z.ZodType<Prisma.ListaPvpDetUncheckedUpdateManyWithoutListaPvpNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetUncheckedUpdateManyWithoutListaPvpNestedInput>;
export const ListaPvpDetUncheckedUpdateManyWithoutListaPvpNestedInputObjectZodSchema = makeSchema();
