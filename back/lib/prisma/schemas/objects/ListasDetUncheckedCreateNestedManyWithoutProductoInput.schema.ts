import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetCreateWithoutProductoInputObjectSchema as ListasDetCreateWithoutProductoInputObjectSchema } from './ListasDetCreateWithoutProductoInput.schema';
import { ListasDetUncheckedCreateWithoutProductoInputObjectSchema as ListasDetUncheckedCreateWithoutProductoInputObjectSchema } from './ListasDetUncheckedCreateWithoutProductoInput.schema';
import { ListasDetCreateOrConnectWithoutProductoInputObjectSchema as ListasDetCreateOrConnectWithoutProductoInputObjectSchema } from './ListasDetCreateOrConnectWithoutProductoInput.schema';
import { ListasDetCreateManyProductoInputEnvelopeObjectSchema as ListasDetCreateManyProductoInputEnvelopeObjectSchema } from './ListasDetCreateManyProductoInputEnvelope.schema';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './ListasDetWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListasDetCreateWithoutProductoInputObjectSchema), z.lazy(() => ListasDetCreateWithoutProductoInputObjectSchema).array(), z.lazy(() => ListasDetUncheckedCreateWithoutProductoInputObjectSchema), z.lazy(() => ListasDetUncheckedCreateWithoutProductoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ListasDetCreateOrConnectWithoutProductoInputObjectSchema), z.lazy(() => ListasDetCreateOrConnectWithoutProductoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ListasDetCreateManyProductoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ListasDetWhereUniqueInputObjectSchema), z.lazy(() => ListasDetWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ListasDetUncheckedCreateNestedManyWithoutProductoInputObjectSchema: z.ZodType<Prisma.ListasDetUncheckedCreateNestedManyWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetUncheckedCreateNestedManyWithoutProductoInput>;
export const ListasDetUncheckedCreateNestedManyWithoutProductoInputObjectZodSchema = makeSchema();
