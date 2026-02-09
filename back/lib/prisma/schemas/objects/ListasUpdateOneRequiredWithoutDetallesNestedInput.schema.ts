import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasCreateWithoutDetallesInputObjectSchema as ListasCreateWithoutDetallesInputObjectSchema } from './ListasCreateWithoutDetallesInput.schema';
import { ListasUncheckedCreateWithoutDetallesInputObjectSchema as ListasUncheckedCreateWithoutDetallesInputObjectSchema } from './ListasUncheckedCreateWithoutDetallesInput.schema';
import { ListasCreateOrConnectWithoutDetallesInputObjectSchema as ListasCreateOrConnectWithoutDetallesInputObjectSchema } from './ListasCreateOrConnectWithoutDetallesInput.schema';
import { ListasUpsertWithoutDetallesInputObjectSchema as ListasUpsertWithoutDetallesInputObjectSchema } from './ListasUpsertWithoutDetallesInput.schema';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './ListasWhereUniqueInput.schema';
import { ListasUpdateToOneWithWhereWithoutDetallesInputObjectSchema as ListasUpdateToOneWithWhereWithoutDetallesInputObjectSchema } from './ListasUpdateToOneWithWhereWithoutDetallesInput.schema';
import { ListasUpdateWithoutDetallesInputObjectSchema as ListasUpdateWithoutDetallesInputObjectSchema } from './ListasUpdateWithoutDetallesInput.schema';
import { ListasUncheckedUpdateWithoutDetallesInputObjectSchema as ListasUncheckedUpdateWithoutDetallesInputObjectSchema } from './ListasUncheckedUpdateWithoutDetallesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListasCreateWithoutDetallesInputObjectSchema), z.lazy(() => ListasUncheckedCreateWithoutDetallesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ListasCreateOrConnectWithoutDetallesInputObjectSchema).optional(),
  upsert: z.lazy(() => ListasUpsertWithoutDetallesInputObjectSchema).optional(),
  connect: z.lazy(() => ListasWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ListasUpdateToOneWithWhereWithoutDetallesInputObjectSchema), z.lazy(() => ListasUpdateWithoutDetallesInputObjectSchema), z.lazy(() => ListasUncheckedUpdateWithoutDetallesInputObjectSchema)]).optional()
}).strict();
export const ListasUpdateOneRequiredWithoutDetallesNestedInputObjectSchema: z.ZodType<Prisma.ListasUpdateOneRequiredWithoutDetallesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUpdateOneRequiredWithoutDetallesNestedInput>;
export const ListasUpdateOneRequiredWithoutDetallesNestedInputObjectZodSchema = makeSchema();
