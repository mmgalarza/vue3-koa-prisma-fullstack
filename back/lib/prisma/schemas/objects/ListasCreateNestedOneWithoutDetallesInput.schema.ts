import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasCreateWithoutDetallesInputObjectSchema as ListasCreateWithoutDetallesInputObjectSchema } from './ListasCreateWithoutDetallesInput.schema';
import { ListasUncheckedCreateWithoutDetallesInputObjectSchema as ListasUncheckedCreateWithoutDetallesInputObjectSchema } from './ListasUncheckedCreateWithoutDetallesInput.schema';
import { ListasCreateOrConnectWithoutDetallesInputObjectSchema as ListasCreateOrConnectWithoutDetallesInputObjectSchema } from './ListasCreateOrConnectWithoutDetallesInput.schema';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './ListasWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListasCreateWithoutDetallesInputObjectSchema), z.lazy(() => ListasUncheckedCreateWithoutDetallesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ListasCreateOrConnectWithoutDetallesInputObjectSchema).optional(),
  connect: z.lazy(() => ListasWhereUniqueInputObjectSchema).optional()
}).strict();
export const ListasCreateNestedOneWithoutDetallesInputObjectSchema: z.ZodType<Prisma.ListasCreateNestedOneWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasCreateNestedOneWithoutDetallesInput>;
export const ListasCreateNestedOneWithoutDetallesInputObjectZodSchema = makeSchema();
