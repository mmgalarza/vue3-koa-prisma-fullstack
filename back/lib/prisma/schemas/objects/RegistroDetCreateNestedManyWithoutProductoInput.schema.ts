import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetCreateWithoutProductoInputObjectSchema as RegistroDetCreateWithoutProductoInputObjectSchema } from './RegistroDetCreateWithoutProductoInput.schema';
import { RegistroDetUncheckedCreateWithoutProductoInputObjectSchema as RegistroDetUncheckedCreateWithoutProductoInputObjectSchema } from './RegistroDetUncheckedCreateWithoutProductoInput.schema';
import { RegistroDetCreateOrConnectWithoutProductoInputObjectSchema as RegistroDetCreateOrConnectWithoutProductoInputObjectSchema } from './RegistroDetCreateOrConnectWithoutProductoInput.schema';
import { RegistroDetCreateManyProductoInputEnvelopeObjectSchema as RegistroDetCreateManyProductoInputEnvelopeObjectSchema } from './RegistroDetCreateManyProductoInputEnvelope.schema';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroDetCreateWithoutProductoInputObjectSchema), z.lazy(() => RegistroDetCreateWithoutProductoInputObjectSchema).array(), z.lazy(() => RegistroDetUncheckedCreateWithoutProductoInputObjectSchema), z.lazy(() => RegistroDetUncheckedCreateWithoutProductoInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistroDetCreateOrConnectWithoutProductoInputObjectSchema), z.lazy(() => RegistroDetCreateOrConnectWithoutProductoInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistroDetCreateManyProductoInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RegistroDetCreateNestedManyWithoutProductoInputObjectSchema: z.ZodType<Prisma.RegistroDetCreateNestedManyWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetCreateNestedManyWithoutProductoInput>;
export const RegistroDetCreateNestedManyWithoutProductoInputObjectZodSchema = makeSchema();
