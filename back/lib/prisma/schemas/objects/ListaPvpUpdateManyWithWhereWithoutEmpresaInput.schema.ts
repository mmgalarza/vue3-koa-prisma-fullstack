import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListaPvpScalarWhereInputObjectSchema as ListaPvpScalarWhereInputObjectSchema } from './ListaPvpScalarWhereInput.schema';
import { ListaPvpUpdateManyMutationInputObjectSchema as ListaPvpUpdateManyMutationInputObjectSchema } from './ListaPvpUpdateManyMutationInput.schema';
import { ListaPvpUncheckedUpdateManyWithoutEmpresaInputObjectSchema as ListaPvpUncheckedUpdateManyWithoutEmpresaInputObjectSchema } from './ListaPvpUncheckedUpdateManyWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ListaPvpScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ListaPvpUpdateManyMutationInputObjectSchema), z.lazy(() => ListaPvpUncheckedUpdateManyWithoutEmpresaInputObjectSchema)])
}).strict();
export const ListaPvpUpdateManyWithWhereWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ListaPvpUpdateManyWithWhereWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUpdateManyWithWhereWithoutEmpresaInput>;
export const ListaPvpUpdateManyWithWhereWithoutEmpresaInputObjectZodSchema = makeSchema();
