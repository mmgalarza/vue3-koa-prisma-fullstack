import * as z from 'zod';
import type { Prisma } from '../../client';
import { CategoriasScalarWhereInputObjectSchema as CategoriasScalarWhereInputObjectSchema } from './CategoriasScalarWhereInput.schema';
import { CategoriasUpdateManyMutationInputObjectSchema as CategoriasUpdateManyMutationInputObjectSchema } from './CategoriasUpdateManyMutationInput.schema';
import { CategoriasUncheckedUpdateManyWithoutEmpresaInputObjectSchema as CategoriasUncheckedUpdateManyWithoutEmpresaInputObjectSchema } from './CategoriasUncheckedUpdateManyWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoriasScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CategoriasUpdateManyMutationInputObjectSchema), z.lazy(() => CategoriasUncheckedUpdateManyWithoutEmpresaInputObjectSchema)])
}).strict();
export const CategoriasUpdateManyWithWhereWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.CategoriasUpdateManyWithWhereWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasUpdateManyWithWhereWithoutEmpresaInput>;
export const CategoriasUpdateManyWithWhereWithoutEmpresaInputObjectZodSchema = makeSchema();
