import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateWithoutFacturaInputObjectSchema as VentaCreateWithoutFacturaInputObjectSchema } from './VentaCreateWithoutFacturaInput.schema';
import { VentaUncheckedCreateWithoutFacturaInputObjectSchema as VentaUncheckedCreateWithoutFacturaInputObjectSchema } from './VentaUncheckedCreateWithoutFacturaInput.schema';
import { VentaCreateOrConnectWithoutFacturaInputObjectSchema as VentaCreateOrConnectWithoutFacturaInputObjectSchema } from './VentaCreateOrConnectWithoutFacturaInput.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaCreateWithoutFacturaInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutFacturaInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VentaCreateOrConnectWithoutFacturaInputObjectSchema).optional(),
  connect: z.lazy(() => VentaWhereUniqueInputObjectSchema).optional()
}).strict();
export const VentaCreateNestedOneWithoutFacturaInputObjectSchema: z.ZodType<Prisma.VentaCreateNestedOneWithoutFacturaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateNestedOneWithoutFacturaInput>;
export const VentaCreateNestedOneWithoutFacturaInputObjectZodSchema = makeSchema();
