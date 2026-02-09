import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpUpdateWithoutDetallesInputObjectSchema as ListaPvpUpdateWithoutDetallesInputObjectSchema } from './ListaPvpUpdateWithoutDetallesInput.schema';
import { ListaPvpUncheckedUpdateWithoutDetallesInputObjectSchema as ListaPvpUncheckedUpdateWithoutDetallesInputObjectSchema } from './ListaPvpUncheckedUpdateWithoutDetallesInput.schema';
import { ListaPvpCreateWithoutDetallesInputObjectSchema as ListaPvpCreateWithoutDetallesInputObjectSchema } from './ListaPvpCreateWithoutDetallesInput.schema';
import { ListaPvpUncheckedCreateWithoutDetallesInputObjectSchema as ListaPvpUncheckedCreateWithoutDetallesInputObjectSchema } from './ListaPvpUncheckedCreateWithoutDetallesInput.schema';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './ListaPvpWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ListaPvpUpdateWithoutDetallesInputObjectSchema), z.lazy(() => ListaPvpUncheckedUpdateWithoutDetallesInputObjectSchema)]),
  create: z.union([z.lazy(() => ListaPvpCreateWithoutDetallesInputObjectSchema), z.lazy(() => ListaPvpUncheckedCreateWithoutDetallesInputObjectSchema)]),
  where: z.lazy(() => ListaPvpWhereInputObjectSchema).optional()
}).strict();
export const ListaPvpUpsertWithoutDetallesInputObjectSchema: z.ZodType<Prisma.ListaPvpUpsertWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUpsertWithoutDetallesInput>;
export const ListaPvpUpsertWithoutDetallesInputObjectZodSchema = makeSchema();
