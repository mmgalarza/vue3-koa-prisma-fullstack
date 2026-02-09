import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './UsuarioEmpresaWhereUniqueInput.schema';
import { UsuarioEmpresaUpdateWithoutUsuarioInputObjectSchema as UsuarioEmpresaUpdateWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaUpdateWithoutUsuarioInput.schema';
import { UsuarioEmpresaUncheckedUpdateWithoutUsuarioInputObjectSchema as UsuarioEmpresaUncheckedUpdateWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaUncheckedUpdateWithoutUsuarioInput.schema';
import { UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema as UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaCreateWithoutUsuarioInput.schema';
import { UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema as UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema } from './UsuarioEmpresaUncheckedCreateWithoutUsuarioInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UsuarioEmpresaUpdateWithoutUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedUpdateWithoutUsuarioInputObjectSchema)]),
  create: z.union([z.lazy(() => UsuarioEmpresaCreateWithoutUsuarioInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema)])
}).strict();
export const UsuarioEmpresaUpsertWithWhereUniqueWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUpsertWithWhereUniqueWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpsertWithWhereUniqueWithoutUsuarioInput>;
export const UsuarioEmpresaUpsertWithWhereUniqueWithoutUsuarioInputObjectZodSchema = makeSchema();
