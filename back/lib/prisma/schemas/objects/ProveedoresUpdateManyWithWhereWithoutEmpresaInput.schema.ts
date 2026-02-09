import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresScalarWhereInputObjectSchema as ProveedoresScalarWhereInputObjectSchema } from './ProveedoresScalarWhereInput.schema';
import { ProveedoresUpdateManyMutationInputObjectSchema as ProveedoresUpdateManyMutationInputObjectSchema } from './ProveedoresUpdateManyMutationInput.schema';
import { ProveedoresUncheckedUpdateManyWithoutEmpresaInputObjectSchema as ProveedoresUncheckedUpdateManyWithoutEmpresaInputObjectSchema } from './ProveedoresUncheckedUpdateManyWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProveedoresScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProveedoresUpdateManyMutationInputObjectSchema), z.lazy(() => ProveedoresUncheckedUpdateManyWithoutEmpresaInputObjectSchema)])
}).strict();
export const ProveedoresUpdateManyWithWhereWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ProveedoresUpdateManyWithWhereWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresUpdateManyWithWhereWithoutEmpresaInput>;
export const ProveedoresUpdateManyWithWhereWithoutEmpresaInputObjectZodSchema = makeSchema();
