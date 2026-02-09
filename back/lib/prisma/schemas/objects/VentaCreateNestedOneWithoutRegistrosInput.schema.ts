import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateWithoutRegistrosInputObjectSchema as VentaCreateWithoutRegistrosInputObjectSchema } from './VentaCreateWithoutRegistrosInput.schema';
import { VentaUncheckedCreateWithoutRegistrosInputObjectSchema as VentaUncheckedCreateWithoutRegistrosInputObjectSchema } from './VentaUncheckedCreateWithoutRegistrosInput.schema';
import { VentaCreateOrConnectWithoutRegistrosInputObjectSchema as VentaCreateOrConnectWithoutRegistrosInputObjectSchema } from './VentaCreateOrConnectWithoutRegistrosInput.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaCreateWithoutRegistrosInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutRegistrosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VentaCreateOrConnectWithoutRegistrosInputObjectSchema).optional(),
  connect: z.lazy(() => VentaWhereUniqueInputObjectSchema).optional()
}).strict();
export const VentaCreateNestedOneWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.VentaCreateNestedOneWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateNestedOneWithoutRegistrosInput>;
export const VentaCreateNestedOneWithoutRegistrosInputObjectZodSchema = makeSchema();
