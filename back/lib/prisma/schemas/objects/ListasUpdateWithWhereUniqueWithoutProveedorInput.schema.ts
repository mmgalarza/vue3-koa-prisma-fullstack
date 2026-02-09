import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './ListasWhereUniqueInput.schema';
import { ListasUpdateWithoutProveedorInputObjectSchema as ListasUpdateWithoutProveedorInputObjectSchema } from './ListasUpdateWithoutProveedorInput.schema';
import { ListasUncheckedUpdateWithoutProveedorInputObjectSchema as ListasUncheckedUpdateWithoutProveedorInputObjectSchema } from './ListasUncheckedUpdateWithoutProveedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ListasUpdateWithoutProveedorInputObjectSchema), z.lazy(() => ListasUncheckedUpdateWithoutProveedorInputObjectSchema)])
}).strict();
export const ListasUpdateWithWhereUniqueWithoutProveedorInputObjectSchema: z.ZodType<Prisma.ListasUpdateWithWhereUniqueWithoutProveedorInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUpdateWithWhereUniqueWithoutProveedorInput>;
export const ListasUpdateWithWhereUniqueWithoutProveedorInputObjectZodSchema = makeSchema();
