import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaWhereUniqueInputObjectSchema as UsuarioEmpresaWhereUniqueInputObjectSchema } from './UsuarioEmpresaWhereUniqueInput.schema';
import { UsuarioEmpresaUpdateWithoutEmpresaInputObjectSchema as UsuarioEmpresaUpdateWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaUpdateWithoutEmpresaInput.schema';
import { UsuarioEmpresaUncheckedUpdateWithoutEmpresaInputObjectSchema as UsuarioEmpresaUncheckedUpdateWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaUncheckedUpdateWithoutEmpresaInput.schema';
import { UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema as UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaCreateWithoutEmpresaInput.schema';
import { UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema as UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema } from './UsuarioEmpresaUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioEmpresaWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => UsuarioEmpresaUpdateWithoutEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedUpdateWithoutEmpresaInputObjectSchema)]),
  create: z.union([z.lazy(() => UsuarioEmpresaCreateWithoutEmpresaInputObjectSchema), z.lazy(() => UsuarioEmpresaUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const UsuarioEmpresaUpsertWithWhereUniqueWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUpsertWithWhereUniqueWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpsertWithWhereUniqueWithoutEmpresaInput>;
export const UsuarioEmpresaUpsertWithWhereUniqueWithoutEmpresaInputObjectZodSchema = makeSchema();
