import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './ListaPvpWhereUniqueInput.schema';
import { ListaPvpCreateWithoutVentasInputObjectSchema as ListaPvpCreateWithoutVentasInputObjectSchema } from './ListaPvpCreateWithoutVentasInput.schema';
import { ListaPvpUncheckedCreateWithoutVentasInputObjectSchema as ListaPvpUncheckedCreateWithoutVentasInputObjectSchema } from './ListaPvpUncheckedCreateWithoutVentasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ListaPvpCreateWithoutVentasInputObjectSchema), z.lazy(() => ListaPvpUncheckedCreateWithoutVentasInputObjectSchema)])
}).strict();
export const ListaPvpCreateOrConnectWithoutVentasInputObjectSchema: z.ZodType<Prisma.ListaPvpCreateOrConnectWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCreateOrConnectWithoutVentasInput>;
export const ListaPvpCreateOrConnectWithoutVentasInputObjectZodSchema = makeSchema();
