import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpWhereInputObjectSchema as ListaPvpWhereInputObjectSchema } from './ListaPvpWhereInput.schema';
import { ListaPvpUpdateWithoutVentasInputObjectSchema as ListaPvpUpdateWithoutVentasInputObjectSchema } from './ListaPvpUpdateWithoutVentasInput.schema';
import { ListaPvpUncheckedUpdateWithoutVentasInputObjectSchema as ListaPvpUncheckedUpdateWithoutVentasInputObjectSchema } from './ListaPvpUncheckedUpdateWithoutVentasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ListaPvpUpdateWithoutVentasInputObjectSchema), z.lazy(() => ListaPvpUncheckedUpdateWithoutVentasInputObjectSchema)])
}).strict();
export const ListaPvpUpdateToOneWithWhereWithoutVentasInputObjectSchema: z.ZodType<Prisma.ListaPvpUpdateToOneWithWhereWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUpdateToOneWithWhereWithoutVentasInput>;
export const ListaPvpUpdateToOneWithWhereWithoutVentasInputObjectZodSchema = makeSchema();
