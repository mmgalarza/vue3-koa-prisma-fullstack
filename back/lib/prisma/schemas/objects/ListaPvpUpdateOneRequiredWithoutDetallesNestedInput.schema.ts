import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpCreateWithoutDetallesInputObjectSchema as ListaPvpCreateWithoutDetallesInputObjectSchema } from './ListaPvpCreateWithoutDetallesInput.schema';
import { ListaPvpUncheckedCreateWithoutDetallesInputObjectSchema as ListaPvpUncheckedCreateWithoutDetallesInputObjectSchema } from './ListaPvpUncheckedCreateWithoutDetallesInput.schema';
import { ListaPvpCreateOrConnectWithoutDetallesInputObjectSchema as ListaPvpCreateOrConnectWithoutDetallesInputObjectSchema } from './ListaPvpCreateOrConnectWithoutDetallesInput.schema';
import { ListaPvpUpsertWithoutDetallesInputObjectSchema as ListaPvpUpsertWithoutDetallesInputObjectSchema } from './ListaPvpUpsertWithoutDetallesInput.schema';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './ListaPvpWhereUniqueInput.schema';
import { ListaPvpUpdateToOneWithWhereWithoutDetallesInputObjectSchema as ListaPvpUpdateToOneWithWhereWithoutDetallesInputObjectSchema } from './ListaPvpUpdateToOneWithWhereWithoutDetallesInput.schema';
import { ListaPvpUpdateWithoutDetallesInputObjectSchema as ListaPvpUpdateWithoutDetallesInputObjectSchema } from './ListaPvpUpdateWithoutDetallesInput.schema';
import { ListaPvpUncheckedUpdateWithoutDetallesInputObjectSchema as ListaPvpUncheckedUpdateWithoutDetallesInputObjectSchema } from './ListaPvpUncheckedUpdateWithoutDetallesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListaPvpCreateWithoutDetallesInputObjectSchema), z.lazy(() => ListaPvpUncheckedCreateWithoutDetallesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ListaPvpCreateOrConnectWithoutDetallesInputObjectSchema).optional(),
  upsert: z.lazy(() => ListaPvpUpsertWithoutDetallesInputObjectSchema).optional(),
  connect: z.lazy(() => ListaPvpWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ListaPvpUpdateToOneWithWhereWithoutDetallesInputObjectSchema), z.lazy(() => ListaPvpUpdateWithoutDetallesInputObjectSchema), z.lazy(() => ListaPvpUncheckedUpdateWithoutDetallesInputObjectSchema)]).optional()
}).strict();
export const ListaPvpUpdateOneRequiredWithoutDetallesNestedInputObjectSchema: z.ZodType<Prisma.ListaPvpUpdateOneRequiredWithoutDetallesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUpdateOneRequiredWithoutDetallesNestedInput>;
export const ListaPvpUpdateOneRequiredWithoutDetallesNestedInputObjectZodSchema = makeSchema();
