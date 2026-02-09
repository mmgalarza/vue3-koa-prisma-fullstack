import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './ListaPvpDetWhereUniqueInput.schema';
import { ListaPvpDetUpdateWithoutListaPvpInputObjectSchema as ListaPvpDetUpdateWithoutListaPvpInputObjectSchema } from './ListaPvpDetUpdateWithoutListaPvpInput.schema';
import { ListaPvpDetUncheckedUpdateWithoutListaPvpInputObjectSchema as ListaPvpDetUncheckedUpdateWithoutListaPvpInputObjectSchema } from './ListaPvpDetUncheckedUpdateWithoutListaPvpInput.schema';
import { ListaPvpDetCreateWithoutListaPvpInputObjectSchema as ListaPvpDetCreateWithoutListaPvpInputObjectSchema } from './ListaPvpDetCreateWithoutListaPvpInput.schema';
import { ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema as ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema } from './ListaPvpDetUncheckedCreateWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ListaPvpDetUpdateWithoutListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedUpdateWithoutListaPvpInputObjectSchema)]),
  create: z.union([z.lazy(() => ListaPvpDetCreateWithoutListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedCreateWithoutListaPvpInputObjectSchema)])
}).strict();
export const ListaPvpDetUpsertWithWhereUniqueWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.ListaPvpDetUpsertWithWhereUniqueWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetUpsertWithWhereUniqueWithoutListaPvpInput>;
export const ListaPvpDetUpsertWithWhereUniqueWithoutListaPvpInputObjectZodSchema = makeSchema();
