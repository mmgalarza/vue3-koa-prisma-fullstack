import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './ListasWhereUniqueInput.schema';
import { ListasCreateWithoutProveedorInputObjectSchema as ListasCreateWithoutProveedorInputObjectSchema } from './ListasCreateWithoutProveedorInput.schema';
import { ListasUncheckedCreateWithoutProveedorInputObjectSchema as ListasUncheckedCreateWithoutProveedorInputObjectSchema } from './ListasUncheckedCreateWithoutProveedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ListasCreateWithoutProveedorInputObjectSchema), z.lazy(() => ListasUncheckedCreateWithoutProveedorInputObjectSchema)])
}).strict();
export const ListasCreateOrConnectWithoutProveedorInputObjectSchema: z.ZodType<Prisma.ListasCreateOrConnectWithoutProveedorInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasCreateOrConnectWithoutProveedorInput>;
export const ListasCreateOrConnectWithoutProveedorInputObjectZodSchema = makeSchema();
