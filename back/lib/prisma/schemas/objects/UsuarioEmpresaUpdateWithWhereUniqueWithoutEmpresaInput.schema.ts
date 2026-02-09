import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './UsuarioEmpresaWhereUniqueInput.schema';
import { UsuarioEmpresaUpdateWithoutEmpresaInputObjectSchema as UsuarioEmpresaUpdateWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaUpdateWithoutEmpresaInput.schema';
import { UsuarioEmpresaUncheckedUpdateWithoutEmpresaInputObjectSchema as UsuarioEmpresaUncheckedUpdateWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaUncheckedUpdateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UsuarioEmpresaUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedUpdateWithoutEmpresaInputObjectSchema)])
}).strict();
export const UsuarioEmpresaUpdateWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUpdateWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpdateWithWhereUniqueWithoutEmpresaInput>;
export const UsuarioEmpresaUpdateWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
