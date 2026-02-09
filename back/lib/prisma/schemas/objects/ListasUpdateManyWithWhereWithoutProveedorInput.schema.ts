import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasScalarWhereInputObjectSchema as ListasScalarWhereInputObjectSchema } from './ListasScalarWhereInput.schema';
import { ListasUpdateManyMutationInputObjectSchema as ListasUpdateManyMutationInputObjectSchema } from './ListasUpdateManyMutationInput.schema';
import { ListasUncheckedUpdateManyWithoutProveedorInputObjectSchema as ListasUncheckedUpdateManyWithoutProveedorInputObjectSchema } from './ListasUncheckedUpdateManyWithoutProveedorInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListasScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ListasUpdateManyMutationInputObjectSchema), z.lazy(() => ListasUncheckedUpdateManyWithoutProveedorInputObjectSchema)])
}).strict();
export const ListasUpdateManyWithWhereWithoutProveedorInputObjectSchema: z.ZodType<Prisma.ListasUpdateManyWithWhereWithoutProveedorInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUpdateManyWithWhereWithoutProveedorInput>;
export const ListasUpdateManyWithWhereWithoutProveedorInputObjectZodSchema = makeSchema();
