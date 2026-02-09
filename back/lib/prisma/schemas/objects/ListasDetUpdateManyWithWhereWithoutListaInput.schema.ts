import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetScalarWhereInputObjectSchema as ListasDetScalarWhereInputObjectSchema } from './ListasDetScalarWhereInput.schema';
import { ListasDetUpdateManyMutationInputObjectSchema as ListasDetUpdateManyMutationInputObjectSchema } from './ListasDetUpdateManyMutationInput.schema';
import { ListasDetUncheckedUpdateManyWithoutListaInputObjectSchema as ListasDetUncheckedUpdateManyWithoutListaInputObjectSchema } from './ListasDetUncheckedUpdateManyWithoutListaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasDetScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ListasDetUpdateManyMutationInputObjectSchema), z.lazy(() => ListasDetUncheckedUpdateManyWithoutListaInputObjectSchema)])
}).strict();
export const ListasDetUpdateManyWithWhereWithoutListaInputObjectSchema: z.ZodType<Prisma.ListasDetUpdateManyWithWhereWithoutListaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetUpdateManyWithWhereWithoutListaInput>;
export const ListasDetUpdateManyWithWhereWithoutListaInputObjectZodSchema = makeSchema();
