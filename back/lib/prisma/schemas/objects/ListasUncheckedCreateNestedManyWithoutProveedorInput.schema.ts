import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasCreateWithoutProveedorInputObjectSchema as ListasCreateWithoutProveedorInputObjectSchema } from './ListasCreateWithoutProveedorInput.schema';
import { ListasUncheckedCreateWithoutProveedorInputObjectSchema as ListasUncheckedCreateWithoutProveedorInputObjectSchema } from './ListasUncheckedCreateWithoutProveedorInput.schema';
import { ListasCreateOrConnectWithoutProveedorInputObjectSchema as ListasCreateOrConnectWithoutProveedorInputObjectSchema } from './ListasCreateOrConnectWithoutProveedorInput.schema';
import { ListasCreateManyProveedorInputEnvelopeObjectSchema as ListasCreateManyProveedorInputEnvelopeObjectSchema } from './ListasCreateManyProveedorInputEnvelope.schema';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './ListasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListasCreateWithoutProveedorInputObjectSchema), z.lazy(() => ListasCreateWithoutProveedorInputObjectSchema).array(), z.lazy(() => ListasUncheckedCreateWithoutProveedorInputObjectSchema), z.lazy(() => ListasUncheckedCreateWithoutProveedorInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ListasCreateOrConnectWithoutProveedorInputObjectSchema), z.lazy(() => ListasCreateOrConnectWithoutProveedorInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ListasCreateManyProveedorInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ListasWhereUniqueInputObjectSchema), z.lazy(() => ListasWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ListasUncheckedCreateNestedManyWithoutProveedorInputObjectSchema: z.ZodType<Prisma.ListasUncheckedCreateNestedManyWithoutProveedorInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUncheckedCreateNestedManyWithoutProveedorInput>;
export const ListasUncheckedCreateNestedManyWithoutProveedorInputObjectZodSchema = makeSchema();
