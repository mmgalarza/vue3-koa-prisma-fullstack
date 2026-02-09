import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroDetCreateWithoutAlmacenInputObjectSchema as RegistroDetCreateWithoutAlmacenInputObjectSchema } from './RegistroDetCreateWithoutAlmacenInput.schema';
import { RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema as RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema } from './RegistroDetUncheckedCreateWithoutAlmacenInput.schema';
import { RegistroDetCreateOrConnectWithoutAlmacenInputObjectSchema as RegistroDetCreateOrConnectWithoutAlmacenInputObjectSchema } from './RegistroDetCreateOrConnectWithoutAlmacenInput.schema';
import { RegistroDetCreateManyAlmacenInputEnvelopeObjectSchema as RegistroDetCreateManyAlmacenInputEnvelopeObjectSchema } from './RegistroDetCreateManyAlmacenInputEnvelope.schema';
import { RegistroDetWhereUniqueInputObjectSchema as RegistroDetWhereUniqueInputObjectSchema } from './RegistroDetWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroDetCreateWithoutAlmacenInputObjectSchema), z.lazy(() => RegistroDetCreateWithoutAlmacenInputObjectSchema).array(), z.lazy(() => RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema), z.lazy(() => RegistroDetUncheckedCreateWithoutAlmacenInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => RegistroDetCreateOrConnectWithoutAlmacenInputObjectSchema), z.lazy(() => RegistroDetCreateOrConnectWithoutAlmacenInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => RegistroDetCreateManyAlmacenInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => RegistroDetWhereUniqueInputObjectSchema), z.lazy(() => RegistroDetWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const RegistroDetUncheckedCreateNestedManyWithoutAlmacenInputObjectSchema: z.ZodType<Prisma.RegistroDetUncheckedCreateNestedManyWithoutAlmacenInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroDetUncheckedCreateNestedManyWithoutAlmacenInput>;
export const RegistroDetUncheckedCreateNestedManyWithoutAlmacenInputObjectZodSchema = makeSchema();
