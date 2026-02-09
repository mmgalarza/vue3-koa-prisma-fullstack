import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './ListaPvpWhereInput.schema';
import { ListaPvpUpdateWithoutDetallesInputObjectSchema as ListaPvpUpdateWithoutDetallesInputObjectSchema } from './ListaPvpUpdateWithoutDetallesInput.schema';
import { ListaPvpUncheckedUpdateWithoutDetallesInputObjectSchema as ListaPvpUncheckedUpdateWithoutDetallesInputObjectSchema } from './ListaPvpUncheckedUpdateWithoutDetallesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ListaPvpUpdateWithoutDetallesInputObjectSchema), z.lazy(() => ListaPvpUncheckedUpdateWithoutDetallesInputObjectSchema)])
}).strict();
export const ListaPvpUpdateToOneWithWhereWithoutDetallesInputObjectSchema: z.ZodType<Prisma.ListaPvpUpdateToOneWithWhereWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUpdateToOneWithWhereWithoutDetallesInput>;
export const ListaPvpUpdateToOneWithWhereWithoutDetallesInputObjectZodSchema = makeSchema();
