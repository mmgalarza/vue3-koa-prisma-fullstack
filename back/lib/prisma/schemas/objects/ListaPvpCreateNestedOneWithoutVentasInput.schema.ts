import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpCreateWithoutVentasInputObjectSchema as ListaPvpCreateWithoutVentasInputObjectSchema } from './ListaPvpCreateWithoutVentasInput.schema';
import { ListaPvpUncheckedCreateWithoutVentasInputObjectSchema as ListaPvpUncheckedCreateWithoutVentasInputObjectSchema } from './ListaPvpUncheckedCreateWithoutVentasInput.schema';
import { ListaPvpCreateOrConnectWithoutVentasInputObjectSchema as ListaPvpCreateOrConnectWithoutVentasInputObjectSchema } from './ListaPvpCreateOrConnectWithoutVentasInput.schema';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './ListaPvpWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListaPvpCreateWithoutVentasInputObjectSchema), z.lazy(() => ListaPvpUncheckedCreateWithoutVentasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ListaPvpCreateOrConnectWithoutVentasInputObjectSchema).optional(),
  connect: z.lazy(() => ListaPvpWhereUniqueInputObjectSchema).optional()
}).strict();
export const ListaPvpCreateNestedOneWithoutVentasInputObjectSchema: z.ZodType<Prisma.ListaPvpCreateNestedOneWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCreateNestedOneWithoutVentasInput>;
export const ListaPvpCreateNestedOneWithoutVentasInputObjectZodSchema = makeSchema();
