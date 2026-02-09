import * as z from 'zod';
import type { Prisma } from '../../client';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema'

const makeSchema = () => z.object({
  idUsuarioEmpresa: z.number().int().optional(),
  idEmpresa: z.number().int(),
  rol: RolUsuarioSchema.optional()
}).strict();
export const UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUncheckedCreateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUncheckedCreateWithoutUsuarioInput>;
export const UsuarioEmpresaUncheckedCreateWithoutUsuarioInputObjectZodSchema = makeSchema();
