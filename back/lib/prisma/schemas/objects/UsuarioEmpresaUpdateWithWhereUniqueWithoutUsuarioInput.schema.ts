import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './UsuarioEmpresaWhereUniqueInput.schema';
import { UsuarioEmpresaUpdateWithoutUsuarioInputObjectSchema as UsuarioEmpresaUpdateWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaUpdateWithoutUsuarioInput.schema';
import { UsuarioEmpresaUncheckedUpdateWithoutUsuarioInputObjectSchema as UsuarioEmpresaUncheckedUpdateWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaUncheckedUpdateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => UsuarioEmpresaUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedUpdateWithoutUsuarioInputObjectSchema)])
}).strict();
export const UsuarioEmpresaUpdateWithWhereUniqueWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUpdateWithWhereUniqueWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpdateWithWhereUniqueWithoutUsuarioInput>;
export const UsuarioEmpresaUpdateWithWhereUniqueWithoutUsuarioInputObjectZodSchema = makeSchema();
