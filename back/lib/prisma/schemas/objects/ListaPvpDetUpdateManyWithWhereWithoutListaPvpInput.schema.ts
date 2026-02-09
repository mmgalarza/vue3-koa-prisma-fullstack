import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetScalarWhereInputObjectSchema as ListaPvpDetScalarWhereInputObjectSchema } from './ListaPvpDetScalarWhereInput.schema';
import { ListaPvpDetUpdateManyMutationInputObjectSchema as ListaPvpDetUpdateManyMutationInputObjectSchema } from './ListaPvpDetUpdateManyMutationInput.schema';
import { ListaPvpDetUncheckedUpdateManyWithoutListaPvpInputObjectSchema as ListaPvpDetUncheckedUpdateManyWithoutListaPvpInputObjectSchema } from './ListaPvpDetUncheckedUpdateManyWithoutListaPvpInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpDetScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ListaPvpDetUpdateManyMutationInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedUpdateManyWithoutListaPvpInputObjectSchema)])
}).strict();
export const ListaPvpDetUpdateManyWithWhereWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.ListaPvpDetUpdateManyWithWhereWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetUpdateManyWithWhereWithoutListaPvpInput>;
export const ListaPvpDetUpdateManyWithWhereWithoutListaPvpInputObjectZodSchema = makeSchema();
