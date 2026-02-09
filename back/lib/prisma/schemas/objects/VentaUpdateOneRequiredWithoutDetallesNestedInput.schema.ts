import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateWithoutDetallesInputObjectSchema as VentaCreateWithoutDetallesInputObjectSchema } from './VentaCreateWithoutDetallesInput.schema';
import { VentaUncheckedCreateWithoutDetallesInputObjectSchema as VentaUncheckedCreateWithoutDetallesInputObjectSchema } from './VentaUncheckedCreateWithoutDetallesInput.schema';
import { VentaCreateOrConnectWithoutDetallesInputObjectSchema as VentaCreateOrConnectWithoutDetallesInputObjectSchema } from './VentaCreateOrConnectWithoutDetallesInput.schema';
import { VentaUpsertWithoutDetallesInputObjectSchema as VentaUpsertWithoutDetallesInputObjectSchema } from './VentaUpsertWithoutDetallesInput.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaUpdateToOneWithWhereWithoutDetallesInputObjectSchema as VentaUpdateToOneWithWhereWithoutDetallesInputObjectSchema } from './VentaUpdateToOneWithWhereWithoutDetallesInput.schema';
import { VentaUpdateWithoutDetallesInputObjectSchema as VentaUpdateWithoutDetallesInputObjectSchema } from './VentaUpdateWithoutDetallesInput.schema';
import { VentaUncheckedUpdateWithoutDetallesInputObjectSchema as VentaUncheckedUpdateWithoutDetallesInputObjectSchema } from './VentaUncheckedUpdateWithoutDetallesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaCreateWithoutDetallesInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutDetallesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VentaCreateOrConnectWithoutDetallesInputObjectSchema).optional(),
  upsert: z.lazy(() => VentaUpsertWithoutDetallesInputObjectSchema).optional(),
  connect: z.lazy(() => VentaWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => VentaUpdateToOneWithWhereWithoutDetallesInputObjectSchema), z.lazy(() => VentaUpdateWithoutDetallesInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutDetallesInputObjectSchema)]).optional()
}).strict();
export const VentaUpdateOneRequiredWithoutDetallesNestedInputObjectSchema: z.ZodType<Prisma.VentaUpdateOneRequiredWithoutDetallesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpdateOneRequiredWithoutDetallesNestedInput>;
export const VentaUpdateOneRequiredWithoutDetallesNestedInputObjectZodSchema = makeSchema();
