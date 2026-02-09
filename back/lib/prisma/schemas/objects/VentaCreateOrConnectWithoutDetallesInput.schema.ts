import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaCreateWithoutDetallesInputObjectSchema as VentaCreateWithoutDetallesInputObjectSchema } from './VentaCreateWithoutDetallesInput.schema';
import { VentaUncheckedCreateWithoutDetallesInputObjectSchema as VentaUncheckedCreateWithoutDetallesInputObjectSchema } from './VentaUncheckedCreateWithoutDetallesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VentaCreateWithoutDetallesInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutDetallesInputObjectSchema)])
}).strict();
export const VentaCreateOrConnectWithoutDetallesInputObjectSchema: z.ZodType<Prisma.VentaCreateOrConnectWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateOrConnectWithoutDetallesInput>;
export const VentaCreateOrConnectWithoutDetallesInputObjectZodSchema = makeSchema();
