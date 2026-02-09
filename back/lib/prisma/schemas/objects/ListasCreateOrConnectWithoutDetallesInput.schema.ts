import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasWhereUniqueInputObjectSchema as ListasWhereUniqueInputObjectSchema } from './ListasWhereUniqueInput.schema';
import { ListasCreateWithoutDetallesInputObjectSchema as ListasCreateWithoutDetallesInputObjectSchema } from './ListasCreateWithoutDetallesInput.schema';
import { ListasUncheckedCreateWithoutDetallesInputObjectSchema as ListasUncheckedCreateWithoutDetallesInputObjectSchema } from './ListasUncheckedCreateWithoutDetallesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ListasCreateWithoutDetallesInputObjectSchema), z.lazy(() => ListasUncheckedCreateWithoutDetallesInputObjectSchema)])
}).strict();
export const ListasCreateOrConnectWithoutDetallesInputObjectSchema: z.ZodType<Prisma.ListasCreateOrConnectWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasCreateOrConnectWithoutDetallesInput>;
export const ListasCreateOrConnectWithoutDetallesInputObjectZodSchema = makeSchema();
