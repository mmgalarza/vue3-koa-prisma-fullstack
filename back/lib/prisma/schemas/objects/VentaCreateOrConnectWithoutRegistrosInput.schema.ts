import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaCreateWithoutRegistrosInputObjectSchema as VentaCreateWithoutRegistrosInputObjectSchema } from './VentaCreateWithoutRegistrosInput.schema';
import { VentaUncheckedCreateWithoutRegistrosInputObjectSchema as VentaUncheckedCreateWithoutRegistrosInputObjectSchema } from './VentaUncheckedCreateWithoutRegistrosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => VentaWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => VentaCreateWithoutRegistrosInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutRegistrosInputObjectSchema)])
}).strict();
export const VentaCreateOrConnectWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.VentaCreateOrConnectWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateOrConnectWithoutRegistrosInput>;
export const VentaCreateOrConnectWithoutRegistrosInputObjectZodSchema = makeSchema();
