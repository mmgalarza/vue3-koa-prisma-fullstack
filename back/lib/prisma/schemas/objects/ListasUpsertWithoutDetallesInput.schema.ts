import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasUpdateWithoutDetallesInputObjectSchema as ListasUpdateWithoutDetallesInputObjectSchema } from './ListasUpdateWithoutDetallesInput.schema';
import { ListasUncheckedUpdateWithoutDetallesInputObjectSchema as ListasUncheckedUpdateWithoutDetallesInputObjectSchema } from './ListasUncheckedUpdateWithoutDetallesInput.schema';
import { ListasCreateWithoutDetallesInputObjectSchema as ListasCreateWithoutDetallesInputObjectSchema } from './ListasCreateWithoutDetallesInput.schema';
import { ListasUncheckedCreateWithoutDetallesInputObjectSchema as ListasUncheckedCreateWithoutDetallesInputObjectSchema } from './ListasUncheckedCreateWithoutDetallesInput.schema';
import { ListasWhereInputObjectSchema as ListasWhereInputObjectSchema } from './ListasWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ListasUpdateWithoutDetallesInputObjectSchema), z.lazy(() => ListasUncheckedUpdateWithoutDetallesInputObjectSchema)]),
  create: z.union([z.lazy(() => ListasCreateWithoutDetallesInputObjectSchema), z.lazy(() => ListasUncheckedCreateWithoutDetallesInputObjectSchema)]),
  where: z.lazy(() => ListasWhereInputObjectSchema).optional()
}).strict();
export const ListasUpsertWithoutDetallesInputObjectSchema: z.ZodType<Prisma.ListasUpsertWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUpsertWithoutDetallesInput>;
export const ListasUpsertWithoutDetallesInputObjectZodSchema = makeSchema();
