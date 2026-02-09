import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateWithoutFacturaInputObjectSchema as VentaCreateWithoutFacturaInputObjectSchema } from './VentaCreateWithoutFacturaInput.schema';
import { VentaUncheckedCreateWithoutFacturaInputObjectSchema as VentaUncheckedCreateWithoutFacturaInputObjectSchema } from './VentaUncheckedCreateWithoutFacturaInput.schema';
import { VentaCreateOrConnectWithoutFacturaInputObjectSchema as VentaCreateOrConnectWithoutFacturaInputObjectSchema } from './VentaCreateOrConnectWithoutFacturaInput.schema';
import { VentaUpsertWithoutFacturaInputObjectSchema as VentaUpsertWithoutFacturaInputObjectSchema } from './VentaUpsertWithoutFacturaInput.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaUpdateToOneWithWhereWithoutFacturaInputObjectSchema as VentaUpdateToOneWithWhereWithoutFacturaInputObjectSchema } from './VentaUpdateToOneWithWhereWithoutFacturaInput.schema';
import { VentaUpdateWithoutFacturaInputObjectSchema as VentaUpdateWithoutFacturaInputObjectSchema } from './VentaUpdateWithoutFacturaInput.schema';
import { VentaUncheckedUpdateWithoutFacturaInputObjectSchema as VentaUncheckedUpdateWithoutFacturaInputObjectSchema } from './VentaUncheckedUpdateWithoutFacturaInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaCreateWithoutFacturaInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutFacturaInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VentaCreateOrConnectWithoutFacturaInputObjectSchema).optional(),
  upsert: z.lazy(() => VentaUpsertWithoutFacturaInputObjectSchema).optional(),
  connect: z.lazy(() => VentaWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => VentaUpdateToOneWithWhereWithoutFacturaInputObjectSchema), z.lazy(() => VentaUpdateWithoutFacturaInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutFacturaInputObjectSchema)]).optional()
}).strict();
export const VentaUpdateOneRequiredWithoutFacturaNestedInputObjectSchema: z.ZodType<Prisma.VentaUpdateOneRequiredWithoutFacturaNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpdateOneRequiredWithoutFacturaNestedInput>;
export const VentaUpdateOneRequiredWithoutFacturaNestedInputObjectZodSchema = makeSchema();
