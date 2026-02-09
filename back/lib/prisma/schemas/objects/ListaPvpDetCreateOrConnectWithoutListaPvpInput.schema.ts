import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './ListaPvpDetWhereUniqueInput.schema';
import { ListaPvpDetCreateWithoutListaPvpInputObjectSchema as ListaPvpDetCreateWithoutListaPvpInputObjectSchema } from './ListaPvpDetCreateWithoutListaPvpInput.schema';
import { ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema as ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema } from './ListaPvpDetUncheckedCreateWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ListaPvpDetCreateWithoutListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema)])
}).strict();
export const ListaPvpDetCreateOrConnectWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.ListaPvpDetCreateOrConnectWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetCreateOrConnectWithoutListaPvpInput>;
export const ListaPvpDetCreateOrConnectWithoutListaPvpInputObjectZodSchema = makeSchema();
