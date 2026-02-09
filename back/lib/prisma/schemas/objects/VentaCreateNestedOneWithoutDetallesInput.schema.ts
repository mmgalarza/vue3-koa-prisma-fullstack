import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateWithoutDetallesInputObjectSchema as VentaCreateWithoutDetallesInputObjectSchema } from './VentaCreateWithoutDetallesInput.schema';
import { VentaUncheckedCreateWithoutDetallesInputObjectSchema as VentaUncheckedCreateWithoutDetallesInputObjectSchema } from './VentaUncheckedCreateWithoutDetallesInput.schema';
import { VentaCreateOrConnectWithoutDetallesInputObjectSchema as VentaCreateOrConnectWithoutDetallesInputObjectSchema } from './VentaCreateOrConnectWithoutDetallesInput.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaCreateWithoutDetallesInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutDetallesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VentaCreateOrConnectWithoutDetallesInputObjectSchema).optional(),
  connect: z.lazy(() => VentaWhereUniqueInputObjectSchema).optional()
}).strict();
export const VentaCreateNestedOneWithoutDetallesInputObjectSchema: z.ZodType<Prisma.VentaCreateNestedOneWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaCreateNestedOneWithoutDetallesInput>;
export const VentaCreateNestedOneWithoutDetallesInputObjectZodSchema = makeSchema();
