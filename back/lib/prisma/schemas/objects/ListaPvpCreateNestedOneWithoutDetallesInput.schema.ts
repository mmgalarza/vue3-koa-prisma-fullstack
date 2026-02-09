import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpCreateWithoutDetallesInputObjectSchema as ListaPvpCreateWithoutDetallesInputObjectSchema } from './ListaPvpCreateWithoutDetallesInput.schema';
import { ListaPvpUncheckedCreateWithoutDetallesInputObjectSchema as ListaPvpUncheckedCreateWithoutDetallesInputObjectSchema } from './ListaPvpUncheckedCreateWithoutDetallesInput.schema';
import { ListaPvpCreateOrConnectWithoutDetallesInputObjectSchema as ListaPvpCreateOrConnectWithoutDetallesInputObjectSchema } from './ListaPvpCreateOrConnectWithoutDetallesInput.schema';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './ListaPvpWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ListaPvpCreateWithoutDetallesInputObjectSchema), z.lazy(() => ListaPvpUncheckedCreateWithoutDetallesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ListaPvpCreateOrConnectWithoutDetallesInputObjectSchema).optional(),
  connect: z.lazy(() => ListaPvpWhereUniqueInputObjectSchema).optional()
}).strict();
export const ListaPvpCreateNestedOneWithoutDetallesInputObjectSchema: z.ZodType<Prisma.ListaPvpCreateNestedOneWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCreateNestedOneWithoutDetallesInput>;
export const ListaPvpCreateNestedOneWithoutDetallesInputObjectZodSchema = makeSchema();
