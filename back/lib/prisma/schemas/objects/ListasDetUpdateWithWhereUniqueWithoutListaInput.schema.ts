import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetWhereUniqueInputObjectSchema as ListasDetWhereUniqueInputObjectSchema } from './ListasDetWhereUniqueInput.schema';
import { ListasDetUpdateWithoutListaInputObjectSchema as ListasDetUpdateWithoutListaInputObjectSchema } from './ListasDetUpdateWithoutListaInput.schema';
import { ListasDetUncheckedUpdateWithoutListaInputObjectSchema as ListasDetUncheckedUpdateWithoutListaInputObjectSchema } from './ListasDetUncheckedUpdateWithoutListaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasDetWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ListasDetUpdateWithoutListaInputObjectSchema), z.lazy(() => ListasDetUncheckedUpdateWithoutListaInputObjectSchema)])
}).strict();
export const ListasDetUpdateWithWhereUniqueWithoutListaInputObjectSchema: z.ZodType<Prisma.ListasDetUpdateWithWhereUniqueWithoutListaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetUpdateWithWhereUniqueWithoutListaInput>;
export const ListasDetUpdateWithWhereUniqueWithoutListaInputObjectZodSchema = makeSchema();
