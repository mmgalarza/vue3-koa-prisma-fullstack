import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaDetWhereUniqueInputObjectSchema as VentaDetWhereUniqueInputObjectSchema } from './VentaDetWhereUniqueInput.schema';
import { VentaDetCreateWithoutVentaInputObjectSchema as VentaDetCreateWithoutVentaInputObjectSchema } from './VentaDetCreateWithoutVentaInput.schema';
import { VentaDetUncheckedCreateWithoutVentaInputObjectSchema as VentaDetUncheckedCreateWithoutVentaInputObjectSchema } from './VentaDetUncheckedCreateWithoutVentaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaDetWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VentaDetCreateWithoutVentaInputObjectSchema), z.lazy(() => VentaDetUncheckedCreateWithoutVentaInputObjectSchema)])
}).strict();
export const VentaDetCreateOrConnectWithoutVentaInputObjectSchema: z.ZodType<Prisma.VentaDetCreateOrConnectWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaDetCreateOrConnectWithoutVentaInput>;
export const VentaDetCreateOrConnectWithoutVentaInputObjectZodSchema = makeSchema();
