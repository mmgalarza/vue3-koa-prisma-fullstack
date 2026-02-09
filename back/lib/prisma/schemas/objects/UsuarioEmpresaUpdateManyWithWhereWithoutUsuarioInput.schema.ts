import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaScalarWhereInputObjectSchema as UsuarioEmpresaScalarWhereInputObjectSchema } from './UsuarioEmpresaScalarWhereInput.schema';
import { UsuarioEmpresaUpdateManyMutationInputObjectSchema as UsuarioEmpresaUpdateManyMutationInputObjectSchema } from './UsuarioEmpresaUpdateManyMutationInput.schema';
import { UsuarioEmpresaUncheckedUpdateManyWithoutUsuarioInputObjectSchema as UsuarioEmpresaUncheckedUpdateManyWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaUncheckedUpdateManyWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioEmpresaScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => UsuarioEmpresaUpdateManyMutationInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedUpdateManyWithoutUsuarioInputObjectSchema)])
}).strict();
export const UsuarioEmpresaUpdateManyWithWhereWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUpdateManyWithWhereWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpdateManyWithWhereWithoutUsuarioInput>;
export const UsuarioEmpresaUpdateManyWithWhereWithoutUsuarioInputObjectZodSchema = makeSchema();
