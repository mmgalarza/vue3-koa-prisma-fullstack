import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateWithoutListaPvpInputObjectSchema as VentaCreateWithoutListaPvpInputObjectSchema } from './VentaCreateWithoutListaPvpInput.schema';
import { VentaUncheckedCreateWithoutListaPvpInputObjectSchema as VentaUncheckedCreateWithoutListaPvpInputObjectSchema } from './VentaUncheckedCreateWithoutListaPvpInput.schema';
import { VentaCreateOrConnectWithoutListaPvpInputObjectSchema as VentaCreateOrConnectWithoutListaPvpInputObjectSchema } from './VentaCreateOrConnectWithoutListaPvpInput.schema';
import { VentaCreateManyListaPvpInputEnvelopeObjectSchema as VentaCreateManyListaPvpInputEnvelopeObjectSchema } from './VentaCreateManyListaPvpInputEnvelope.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaCreateWithoutListaPvpInputObjectSchema), z.lazy(() => VentaCreateWithoutListaPvpInputObjectSchema).array(), z.lazy(() => VentaUncheckedCreateWithoutListaPvpInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutListaPvpInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VentaCreateOrConnectWithoutListaPvpInputObjectSchema), z.lazy(() => VentaCreateOrConnectWithoutListaPvpInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VentaCreateManyListaPvpInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VentaCreateNestedManyWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.VentaCreateNestedManyWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateNestedManyWithoutListaPvpInput>;
export const VentaCreateNestedManyWithoutListaPvpInputObjectZodSchema = makeSchema();
