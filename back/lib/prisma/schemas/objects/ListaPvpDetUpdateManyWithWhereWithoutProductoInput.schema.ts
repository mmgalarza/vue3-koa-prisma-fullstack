import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpDetScalarWhereInputObjectSchema as ListaPvpDetScalarWhereInputObjectSchema } from './ListaPvpDetScalarWhereInput.schema';
import { ListaPvpDetUpdateManyMutationInputObjectSchema as ListaPvpDetUpdateManyMutationInputObjectSchema } from './ListaPvpDetUpdateManyMutationInput.schema';
import { ListaPvpDetUncheckedUpdateManyWithoutProductoInputObjectSchema as ListaPvpDetUncheckedUpdateManyWithoutProductoInputObjectSchema } from './ListaPvpDetUncheckedUpdateManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpDetScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ListaPvpDetUpdateManyMutationInputObjectSchema), z.lazy(() => ListaPvpDetUncheckedUpdateManyWithoutProductoInputObjectSchema)])
}).strict();
export const ListaPvpDetUpdateManyWithWhereWithoutProductoInputObjectSchema: z.ZodType<Prisma.ListaPvpDetUpdateManyWithWhereWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpDetUpdateManyWithWhereWithoutProductoInput>;
export const ListaPvpDetUpdateManyWithWhereWithoutProductoInputObjectZodSchema = makeSchema();
