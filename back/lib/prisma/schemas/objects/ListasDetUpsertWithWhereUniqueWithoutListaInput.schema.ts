import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './ListasDetWhereUniqueInput.schema';
import { ListasDetUpdateWithoutListaInputObjectSchema as ListasDetUpdateWithoutListaInputObjectSchema } from './ListasDetUpdateWithoutListaInput.schema';
import { ListasDetUncheckedUpdateWithoutListaInputObjectSchema as ListasDetUncheckedUpdateWithoutListaInputObjectSchema } from './ListasDetUncheckedUpdateWithoutListaInput.schema';
import { ListasDetCreateWithoutListaInputObjectSchema as ListasDetCreateWithoutListaInputObjectSchema } from './ListasDetCreateWithoutListaInput.schema';
import { ListasDetUncheckedCreateWithoutListaInputObjectSchema as ListasDetUncheckedCreateWithoutListaInputObjectSchema } from './ListasDetUncheckedCreateWithoutListaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasDetWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ListasDetUpdateWithoutListaInputObjectSchema), z.lazy(() => ListasDetUncheckedUpdateWithoutListaInputObjectSchema)]),
  create: z.union([z.lazy(() => ListasDetCreateWithoutListaInputObjectSchema), z.lazy(() => ListasDetUncheckedCreateWithoutListaInputObjectSchema)])
}).strict();
export const ListasDetUpsertWithWhereUniqueWithoutListaInputObjectSchema: z.ZodType<Prisma.ListasDetUpsertWithWhereUniqueWithoutListaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetUpsertWithWhereUniqueWithoutListaInput>;
export const ListasDetUpsertWithWhereUniqueWithoutListaInputObjectZodSchema = makeSchema();
