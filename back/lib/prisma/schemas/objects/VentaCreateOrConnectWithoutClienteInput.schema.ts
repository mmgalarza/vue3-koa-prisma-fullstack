import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaCreateWithoutClienteInputObjectSchema as VentaCreateWithoutClienteInputObjectSchema } from './VentaCreateWithoutClienteInput.schema';
import { VentaUncheckedCreateWithoutClienteInputObjectSchema as VentaUncheckedCreateWithoutClienteInputObjectSchema } from './VentaUncheckedCreateWithoutClienteInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VentaCreateWithoutClienteInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutClienteInputObjectSchema)])
}).strict();
export const VentaCreateOrConnectWithoutClienteInputObjectSchema: z.ZodType<Prisma.VentaCreateOrConnectWithoutClienteInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateOrConnectWithoutClienteInput>;
export const VentaCreateOrConnectWithoutClienteInputObjectZodSchema = makeSchema();
