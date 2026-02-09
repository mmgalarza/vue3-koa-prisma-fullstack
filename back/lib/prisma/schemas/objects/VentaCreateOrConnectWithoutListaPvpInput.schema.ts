import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaCreateWithoutListaPvpInputObjectSchema as VentaCreateWithoutListaPvpInputObjectSchema } from './VentaCreateWithoutListaPvpInput.schema';
import { VentaUncheckedCreateWithoutListaPvpInputObjectSchema as VentaUncheckedCreateWithoutListaPvpInputObjectSchema } from './VentaUncheckedCreateWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VentaCreateWithoutListaPvpInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutListaPvpInputObjectSchema)])
}).strict();
export const VentaCreateOrConnectWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.VentaCreateOrConnectWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateOrConnectWithoutListaPvpInput>;
export const VentaCreateOrConnectWithoutListaPvpInputObjectZodSchema = makeSchema();
