import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasWhereInputObjectSchema as ListasWhereInputObjectSchema } from './ListasWhereInput.schema';
import { ListasUpdateWithoutDetallesInputObjectSchema as ListasUpdateWithoutDetallesInputObjectSchema } from './ListasUpdateWithoutDetallesInput.schema';
import { ListasUncheckedUpdateWithoutDetallesInputObjectSchema as ListasUncheckedUpdateWithoutDetallesInputObjectSchema } from './ListasUncheckedUpdateWithoutDetallesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ListasUpdateWithoutDetallesInputObjectSchema), z.lazy(() => ListasUncheckedUpdateWithoutDetallesInputObjectSchema)])
}).strict();
export const ListasUpdateToOneWithWhereWithoutDetallesInputObjectSchema: z.ZodType<Prisma.ListasUpdateToOneWithWhereWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUpdateToOneWithWhereWithoutDetallesInput>;
export const ListasUpdateToOneWithWhereWithoutDetallesInputObjectZodSchema = makeSchema();
