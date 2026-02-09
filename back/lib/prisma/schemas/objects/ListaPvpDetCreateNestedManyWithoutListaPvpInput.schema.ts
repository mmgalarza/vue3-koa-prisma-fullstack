import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetCreateWithoutListaPvpInputObjectSchema as ListaPvpDetCreateWithoutListaPvpInputObjectSchema } from './ListaPvpDetCreateWithoutListaPvpInput.schema';
import { ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema as ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema } from './ListaPvpDetUncheckedCreateWithoutListaPvpInput.schema';
import { ListaPvpDetCreateOrConnectWithoutListaPvpInputObjectSchema as ListaPvpDetCreateOrConnectWithoutListaPvpInputObjectSchema } from './ListaPvpDetCreateOrConnectWithoutListaPvpInput.schema';
import { ListaPvpDetCreateManyListaPvpInputEnvelopeObjectSchema as ListaPvpDetCreateManyListaPvpInputEnvelopeObjectSchema } from './ListaPvpDetCreateManyListaPvpInputEnvelope.schema';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './ListaPvpDetWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListaPvpDetCreateWithoutListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetCreateWithoutListaPvpInputObjectSchema).array(), z.lazy(() => ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ListaPvpDetCreateOrConnectWithoutListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetCreateOrConnectWithoutListaPvpInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ListaPvpDetCreateManyListaPvpInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema), z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ListaPvpDetCreateNestedManyWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.ListaPvpDetCreateNestedManyWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetCreateNestedManyWithoutListaPvpInput>;
export const ListaPvpDetCreateNestedManyWithoutListaPvpInputObjectZodSchema = makeSchema();
