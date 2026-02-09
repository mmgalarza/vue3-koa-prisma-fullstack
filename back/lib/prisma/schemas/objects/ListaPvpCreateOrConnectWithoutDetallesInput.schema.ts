import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpWhereUniqueInputObjectSchema as ListaPvpWhereUniqueInputObjectSchema } from './ListaPvpWhereUniqueInput.schema';
import { ListaPvpCreateWithoutDetallesInputObjectSchema as ListaPvpCreateWithoutDetallesInputObjectSchema } from './ListaPvpCreateWithoutDetallesInput.schema';
import { ListaPvpUncheckedCreateWithoutDetallesInputObjectSchema as ListaPvpUncheckedCreateWithoutDetallesInputObjectSchema } from './ListaPvpUncheckedCreateWithoutDetallesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ListaPvpCreateWithoutDetallesInputObjectSchema), z.lazy(() => ListaPvpUncheckedCreateWithoutDetallesInputObjectSchema)])
}).strict();
export const ListaPvpCreateOrConnectWithoutDetallesInputObjectSchema: z.ZodType<Prisma.ListaPvpCreateOrConnectWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCreateOrConnectWithoutDetallesInput>;
export const ListaPvpCreateOrConnectWithoutDetallesInputObjectZodSchema = makeSchema();
