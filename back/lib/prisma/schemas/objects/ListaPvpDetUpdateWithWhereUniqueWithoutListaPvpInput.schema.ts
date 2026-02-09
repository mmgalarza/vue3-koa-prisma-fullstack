import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetWhereUniqueInputObjectSchema as ListaPvpDetWhereUniqueInputObjectSchema } from './ListaPvpDetWhereUniqueInput.schema';
import { ListaPvpDetUpdateWithoutListaPvpInputObjectSchema as ListaPvpDetUpdateWithoutListaPvpInputObjectSchema } from './ListaPvpDetUpdateWithoutListaPvpInput.schema';
import { ListaPvpDetUncheckedUpdateWithoutListaPvpInputObjectSchema as ListaPvpDetUncheckedUpdateWithoutListaPvpInputObjectSchema } from './ListaPvpDetUncheckedUpdateWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpDetWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ListaPvpDetUpdateWithoutListaPvpInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedUpdateWithoutListaPvpInputObjectSchema)])
}).strict();
export const ListaPvpDetUpdateWithWhereUniqueWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.ListaPvpDetUpdateWithWhereUniqueWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetUpdateWithWhereUniqueWithoutListaPvpInput>;
export const ListaPvpDetUpdateWithWhereUniqueWithoutListaPvpInputObjectZodSchema = makeSchema();
