import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaScalarWhereInputObjectSchema as UsuarioEmpresaScalarWhereInputObjectSchema } from './UsuarioEmpresaScalarWhereInput.schema';
import { UsuarioEmpresaUpdateManyMutationInputObjectSchema as UsuarioEmpresaUpdateManyMutationInputObjectSchema } from './UsuarioEmpresaUpdateManyMutationInput.schema';
import { UsuarioEmpresaUncheckedUpdateManyWithoutEmpresaInputObjectSchema as UsuarioEmpresaUncheckedUpdateManyWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaUncheckedUpdateManyWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioEmpresaScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UsuarioEmpresaUpdateManyMutationInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedUpdateManyWithoutEmpresaInputObjectSchema)])
}).strict();
export const UsuarioEmpresaUpdateManyWithWhereWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUpdateManyWithWhereWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpdateManyWithWhereWithoutEmpresaInput>;
export const UsuarioEmpresaUpdateManyWithWhereWithoutEmpresaInputObjectZodSchema = makeSchema();
