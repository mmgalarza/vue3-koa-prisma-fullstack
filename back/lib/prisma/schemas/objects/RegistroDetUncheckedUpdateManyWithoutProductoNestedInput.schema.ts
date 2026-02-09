import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetCreateWithoutProductoInputObjectSchema as RegistroDetCreateWithoutProductoInputObjectSchema } from './RegistroDetCreateWithoutProductoInput.schema';
import { RegistroDetUncheckedCreateWithoutProductoInputObjectSchema as RegistroDetUncheckedCreateWithoutProductoInputObjectSchema } from './RegistroDetUncheckedCreateWithoutProductoInput.schema';
import { RegistroDetCreateOrConnectWithoutProductoInputObjectSchema as RegistroDetCreateOrConnectWithoutProductoInputObjectSchema } from './RegistroDetCreateOrConnectWithoutProductoInput.schema';
import { RegistroDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema as RegistroDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema } from './RegistroDetUpsertWithWhereUniqueWithoutProductoInput.schema';
import { RegistroDetCreateManyProductoInputEnvelopeObjectSchema as RegistroDetCreateManyProductoInputEnvelopeObjectSchema } from './RegistroDetCreateManyProductoInputEnvelope.schema';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema';
import { RegistroDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema as RegistroDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema } from './RegistroDetUpdateWithWhereUniqueWithoutProductoInput.schema';
import { RegistroDetUpdateManyWithWhereWithoutProductoInputObjectSchema as RegistroDetUpdateManyWithWhereWithoutProductoInputObjectSchema } from './RegistroDetUpdateManyWithWhereWithoutProductoInput.schema';
import { RegistroDetScalarWhereInputObjectSchema as RegistroDetScalarWhereInputObjectSchema } from './RegistroDetScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroDetCreateWithoutProductoInputObjectSchema), z.lazy(() => RegistroDetCreateWithoutProductoInputObjectSchema).array(), z.lazy(() => RegistroDetUncheckedCreateWithoutProductoInputObjectSchema), z.lazy(() => RegistroDetUncheckedCreateWithoutProductoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistroDetCreateOrConnectWithoutProductoInputObjectSchema), z.lazy(() => RegistroDetCreateOrConnectWithoutProductoInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => RegistroDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema), z.lazy(() => RegistroDetUpsertWithWhereUniqueWithoutProductoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistroDetCreateManyProductoInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => RegistroDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema), z.lazy(() => RegistroDetUpdateWithWhereUniqueWithoutProductoInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => RegistroDetUpdateManyWithWhereWithoutProductoInputObjectSchema), z.lazy(() => RegistroDetUpdateManyWithWhereWithoutProductoInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => RegistroDetScalarWhereInputObjectSchema), z.lazy(() => RegistroDetScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const RegistroDetUncheckedUpdateManyWithoutProductoNestedInputObjectSchema: z.ZodType<Prisma.RegistroDetUncheckedUpdateManyWithoutProductoNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUncheckedUpdateManyWithoutProductoNestedInput>;
export const RegistroDetUncheckedUpdateManyWithoutProductoNestedInputObjectZodSchema = makeSchema();
