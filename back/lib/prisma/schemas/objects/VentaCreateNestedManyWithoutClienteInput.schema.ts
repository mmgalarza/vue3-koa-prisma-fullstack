import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateWithoutClienteInputObjectSchema as VentaCreateWithoutClienteInputObjectSchema } from './VentaCreateWithoutClienteInput.schema';
import { VentaUncheckedCreateWithoutClienteInputObjectSchema as VentaUncheckedCreateWithoutClienteInputObjectSchema } from './VentaUncheckedCreateWithoutClienteInput.schema';
import { VentaCreateOrConnectWithoutClienteInputObjectSchema as VentaCreateOrConnectWithoutClienteInputObjectSchema } from './VentaCreateOrConnectWithoutClienteInput.schema';
import { VentaCreateManyClienteInputEnvelopeObjectSchema as VentaCreateManyClienteInputEnvelopeObjectSchema } from './VentaCreateManyClienteInputEnvelope.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaCreateWithoutClienteInputObjectSchema), z.lazy(() => VentaCreateWithoutClienteInputObjectSchema).array(), z.lazy(() => VentaUncheckedCreateWithoutClienteInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutClienteInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => VentaCreateOrConnectWithoutClienteInputObjectSchema), z.lazy(() => VentaCreateOrConnectWithoutClienteInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => VentaCreateManyClienteInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => VentaWhereUniqueInputObjectSchema), z.lazy(() => VentaWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const VentaCreateNestedManyWithoutClienteInputObjectSchema: z.ZodType<Prisma.VentaCreateNestedManyWithoutClienteInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateNestedManyWithoutClienteInput>;
export const VentaCreateNestedManyWithoutClienteInputObjectZodSchema = makeSchema();
