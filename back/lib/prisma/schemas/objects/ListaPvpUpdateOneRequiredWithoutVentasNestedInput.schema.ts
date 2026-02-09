import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpCreateWithoutVentasInputObjectSchema as ListaPvpCreateWithoutVentasInputObjectSchema } from './ListaPvpCreateWithoutVentasInput.schema';
import { ListaPvpUncheckedCreateWithoutVentasInputObjectSchema as ListaPvpUncheckedCreateWithoutVentasInputObjectSchema } from './ListaPvpUncheckedCreateWithoutVentasInput.schema';
import { ListaPvpCreateOrConnectWithoutVentasInputObjectSchema as ListaPvpCreateOrConnectWithoutVentasInputObjectSchema } from './ListaPvpCreateOrConnectWithoutVentasInput.schema';
import { ListaPvpUpsertWithoutVentasInputObjectSchema as ListaPvpUpsertWithoutVentasInputObjectSchema } from './ListaPvpUpsertWithoutVentasInput.schema';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './ListaPvpWhereUniqueInput.schema';
import { ListaPvpUpdateToOneWithWhereWithoutVentasInputObjectSchema as ListaPvpUpdateToOneWithWhereWithoutVentasInputObjectSchema } from './ListaPvpUpdateToOneWithWhereWithoutVentasInput.schema';
import { ListaPvpUpdateWithoutVentasInputObjectSchema as ListaPvpUpdateWithoutVentasInputObjectSchema } from './ListaPvpUpdateWithoutVentasInput.schema';
import { ListaPvpUncheckedUpdateWithoutVentasInputObjectSchema as ListaPvpUncheckedUpdateWithoutVentasInputObjectSchema } from './ListaPvpUncheckedUpdateWithoutVentasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListaPvpCreateWithoutVentasInputObjectSchema), z.lazy(() => ListaPvpUncheckedCreateWithoutVentasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ListaPvpCreateOrConnectWithoutVentasInputObjectSchema).optional(),
  upsert: z.lazy(() => ListaPvpUpsertWithoutVentasInputObjectSchema).optional(),
  connect: z.lazy(() => ListaPvpWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ListaPvpUpdateToOneWithWhereWithoutVentasInputObjectSchema), z.lazy(() => ListaPvpUpdateWithoutVentasInputObjectSchema), z.lazy(() => ListaPvpUncheckedUpdateWithoutVentasInputObjectSchema)]).optional()
}).strict();
export const ListaPvpUpdateOneRequiredWithoutVentasNestedInputObjectSchema: z.ZodType<Prisma.ListaPvpUpdateOneRequiredWithoutVentasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUpdateOneRequiredWithoutVentasNestedInput>;
export const ListaPvpUpdateOneRequiredWithoutVentasNestedInputObjectZodSchema = makeSchema();
