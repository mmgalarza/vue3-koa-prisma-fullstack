import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasCreateWithoutProveedorInputObjectSchema as ListasCreateWithoutProveedorInputObjectSchema } from './ListasCreateWithoutProveedorInput.schema';
import { ListasUncheckedCreateWithoutProveedorInputObjectSchema as ListasUncheckedCreateWithoutProveedorInputObjectSchema } from './ListasUncheckedCreateWithoutProveedorInput.schema';
import { ListasCreateOrConnectWithoutProveedorInputObjectSchema as ListasCreateOrConnectWithoutProveedorInputObjectSchema } from './ListasCreateOrConnectWithoutProveedorInput.schema';
import { ListasUpsertWithWhereUniqueWithoutProveedorInputObjectSchema as ListasUpsertWithWhereUniqueWithoutProveedorInputObjectSchema } from './ListasUpsertWithWhereUniqueWithoutProveedorInput.schema';
import { ListasCreateManyProveedorInputEnvelopeObjectSchema as ListasCreateManyProveedorInputEnvelopeObjectSchema } from './ListasCreateManyProveedorInputEnvelope.schema';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './ListasWhereUniqueInput.schema';
import { ListasUpdateWithWhereUniqueWithoutProveedorInputObjectSchema as ListasUpdateWithWhereUniqueWithoutProveedorInputObjectSchema } from './ListasUpdateWithWhereUniqueWithoutProveedorInput.schema';
import { ListasUpdateManyWithWhereWithoutProveedorInputObjectSchema as ListasUpdateManyWithWhereWithoutProveedorInputObjectSchema } from './ListasUpdateManyWithWhereWithoutProveedorInput.schema';
import { ListasScalarWhereInputObjectSchema as ListasScalarWhereInputObjectSchema } from './ListasScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListasCreateWithoutProveedorInputObjectSchema), z.lazy(() => ListasCreateWithoutProveedorInputObjectSchema).array(), z.lazy(() => ListasUncheckedCreateWithoutProveedorInputObjectSchema), z.lazy(() => ListasUncheckedCreateWithoutProveedorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ListasCreateOrConnectWithoutProveedorInputObjectSchema), z.lazy(() => ListasCreateOrConnectWithoutProveedorInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ListasUpsertWithWhereUniqueWithoutProveedorInputObjectSchema), z.lazy(() => ListasUpsertWithWhereUniqueWithoutProveedorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ListasCreateManyProveedorInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ListasWhereUniqueInputObjectSchema), z.lazy(() => ListasWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ListasWhereUniqueInputObjectSchema), z.lazy(() => ListasWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ListasWhereUniqueInputObjectSchema), z.lazy(() => ListasWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ListasWhereUniqueInputObjectSchema), z.lazy(() => ListasWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ListasUpdateWithWhereUniqueWithoutProveedorInputObjectSchema), z.lazy(() => ListasUpdateWithWhereUniqueWithoutProveedorInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ListasUpdateManyWithWhereWithoutProveedorInputObjectSchema), z.lazy(() => ListasUpdateManyWithWhereWithoutProveedorInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ListasScalarWhereInputObjectSchema), z.lazy(() => ListasScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ListasUpdateManyWithoutProveedorNestedInputObjectSchema: z.ZodType<Prisma.ListasUpdateManyWithoutProveedorNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUpdateManyWithoutProveedorNestedInput>;
export const ListasUpdateManyWithoutProveedorNestedInputObjectZodSchema = makeSchema();
