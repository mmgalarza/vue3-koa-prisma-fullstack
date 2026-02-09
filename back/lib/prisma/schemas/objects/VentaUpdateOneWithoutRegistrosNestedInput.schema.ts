import * as z from 'zod';
import type { Prisma } from '../../client';
import { VentaCreateWithoutRegistrosInputObjectSchema as VentaCreateWithoutRegistrosInputObjectSchema } from './VentaCreateWithoutRegistrosInput.schema';
import { VentaUncheckedCreateWithoutRegistrosInputObjectSchema as VentaUncheckedCreateWithoutRegistrosInputObjectSchema } from './VentaUncheckedCreateWithoutRegistrosInput.schema';
import { VentaCreateOrConnectWithoutRegistrosInputObjectSchema as VentaCreateOrConnectWithoutRegistrosInputObjectSchema } from './VentaCreateOrConnectWithoutRegistrosInput.schema';
import { VentaUpsertWithoutRegistrosInputObjectSchema as VentaUpsertWithoutRegistrosInputObjectSchema } from './VentaUpsertWithoutRegistrosInput.schema';
import { VentaWhereInputObjectSchema as VentaWhereInputObjectSchema } from './VentaWhereInput.schema';
import { VentaWhereUniqueInputObjectSchema as VentaWhereUniqueInputObjectSchema } from './VentaWhereUniqueInput.schema';
import { VentaUpdateToOneWithWhereWithoutRegistrosInputObjectSchema as VentaUpdateToOneWithWhereWithoutRegistrosInputObjectSchema } from './VentaUpdateToOneWithWhereWithoutRegistrosInput.schema';
import { VentaUpdateWithoutRegistrosInputObjectSchema as VentaUpdateWithoutRegistrosInputObjectSchema } from './VentaUpdateWithoutRegistrosInput.schema';
import { VentaUncheckedUpdateWithoutRegistrosInputObjectSchema as VentaUncheckedUpdateWithoutRegistrosInputObjectSchema } from './VentaUncheckedUpdateWithoutRegistrosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => VentaCreateWithoutRegistrosInputObjectSchema), z.lazy(() => VentaUncheckedCreateWithoutRegistrosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => VentaCreateOrConnectWithoutRegistrosInputObjectSchema).optional(),
  upsert: z.lazy(() => VentaUpsertWithoutRegistrosInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => VentaWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => VentaWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => VentaWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => VentaUpdateToOneWithWhereWithoutRegistrosInputObjectSchema), z.lazy(() => VentaUpdateWithoutRegistrosInputObjectSchema), z.lazy(() => VentaUncheckedUpdateWithoutRegistrosInputObjectSchema)]).optional()
}).strict();
export const VentaUpdateOneWithoutRegistrosNestedInputObjectSchema: z.ZodType<Prisma.VentaUpdateOneWithoutRegistrosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpdateOneWithoutRegistrosNestedInput>;
export const VentaUpdateOneWithoutRegistrosNestedInputObjectZodSchema = makeSchema();
