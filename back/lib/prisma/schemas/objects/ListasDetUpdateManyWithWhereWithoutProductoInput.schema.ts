import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetScalarWhereInputObjectSchema as ListasDetScalarWhereInputObjectSchema } from './ListasDetScalarWhereInput.schema';
import { ListasDetUpdateManyMutationInputObjectSchema as ListasDetUpdateManyMutationInputObjectSchema } from './ListasDetUpdateManyMutationInput.schema';
import { ListasDetUncheckedUpdateManyWithoutProductoInputObjectSchema as ListasDetUncheckedUpdateManyWithoutProductoInputObjectSchema } from './ListasDetUncheckedUpdateManyWithoutProductoInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasDetScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ListasDetUpdateManyMutationInputObjectSchema), z.lazy(() => ListasDetUncheckedUpdateManyWithoutProductoInputObjectSchema)])
}).strict();
export const ListasDetUpdateManyWithWhereWithoutProductoInputObjectSchema: z.ZodType<Prisma.ListasDetUpdateManyWithWhereWithoutProductoInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasDetUpdateManyWithWhereWithoutProductoInput>;
export const ListasDetUpdateManyWithWhereWithoutProductoInputObjectZodSchema = makeSchema();
