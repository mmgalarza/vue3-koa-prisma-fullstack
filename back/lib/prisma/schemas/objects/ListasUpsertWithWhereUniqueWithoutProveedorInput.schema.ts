import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './ListasWhereUniqueInput.schema';
import { ListasUpdateWithoutProveedorInputObjectSchema as ListasUpdateWithoutProveedorInputObjectSchema } from './ListasUpdateWithoutProveedorInput.schema';
import { ListasUncheckedUpdateWithoutProveedorInputObjectSchema as ListasUncheckedUpdateWithoutProveedorInputObjectSchema } from './ListasUncheckedUpdateWithoutProveedorInput.schema';
import { ListasCreateWithoutProveedorInputObjectSchema as ListasCreateWithoutProveedorInputObjectSchema } from './ListasCreateWithoutProveedorInput.schema';
import { ListasUncheckedCreateWithoutProveedorInputObjectSchema as ListasUncheckedCreateWithoutProveedorInputObjectSchema } from './ListasUncheckedCreateWithoutProveedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ListasUpdateWithoutProveedorInputObjectSchema), z.lazy(() => ListasUncheckedUpdateWithoutProveedorInputObjectSchema)]),
  create: z.union([z.lazy(() => ListasCreateWithoutProveedorInputObjectSchema), z.lazy(() => ListasUncheckedCreateWithoutProveedorInputObjectSchema)])
}).strict();
export const ListasUpsertWithWhereUniqueWithoutProveedorInputObjectSchema: z.ZodType<Prisma.ListasUpsertWithWhereUniqueWithoutProveedorInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUpsertWithWhereUniqueWithoutProveedorInput>;
export const ListasUpsertWithWhereUniqueWithoutProveedorInputObjectZodSchema = makeSchema();
