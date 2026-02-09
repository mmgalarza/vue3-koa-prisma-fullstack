import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpUpdateWithoutVentasInputObjectSchema as ListaPvpUpdateWithoutVentasInputObjectSchema } from './ListaPvpUpdateWithoutVentasInput.schema';
import { ListaPvpUncheckedUpdateWithoutVentasInputObjectSchema as ListaPvpUncheckedUpdateWithoutVentasInputObjectSchema } from './ListaPvpUncheckedUpdateWithoutVentasInput.schema';
import { ListaPvpCreateWithoutVentasInputObjectSchema as ListaPvpCreateWithoutVentasInputObjectSchema } from './ListaPvpCreateWithoutVentasInput.schema';
import { ListaPvpUncheckedCreateWithoutVentasInputObjectSchema as ListaPvpUncheckedCreateWithoutVentasInputObjectSchema } from './ListaPvpUncheckedCreateWithoutVentasInput.schema';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './ListaPvpWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ListaPvpUpdateWithoutVentasInputObjectSchema), z.lazy(() => ListaPvpUncheckedUpdateWithoutVentasInputObjectSchema)]),
  create: z.union([z.lazy(() => ListaPvpCreateWithoutVentasInputObjectSchema), z.lazy(() => ListaPvpUncheckedCreateWithoutVentasInputObjectSchema)]),
  where: z.lazy(() => ListaPvpWhereInputObjectSchema).optional()
}).strict();
export const ListaPvpUpsertWithoutVentasInputObjectSchema: z.ZodType<Prisma.ListaPvpUpsertWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUpsertWithoutVentasInput>;
export const ListaPvpUpsertWithoutVentasInputObjectZodSchema = makeSchema();
