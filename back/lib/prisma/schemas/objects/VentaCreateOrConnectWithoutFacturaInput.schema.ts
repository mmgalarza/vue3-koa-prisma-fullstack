import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaCreateWithoutFacturaInputObjectSchema as VentaCreateWithoutFacturaInputObjectSchema } from './VentaCreateWithoutFacturaInput.schema';
import { VentaUncheckedCreateWithoutFacturaInputObjectSchema as VentaUncheckedCreateWithoutFacturaInputObjectSchema } from './VentaUncheckedCreateWithoutFacturaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VentaCreateWithoutFacturaInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutFacturaInputObjectSchema)])
}).strict();
export const VentaCreateOrConnectWithoutFacturaInputObjectSchema: z.ZodType<Prisma.VentaCreateOrConnectWithoutFacturaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateOrConnectWithoutFacturaInput>;
export const VentaCreateOrConnectWithoutFacturaInputObjectZodSchema = makeSchema();
