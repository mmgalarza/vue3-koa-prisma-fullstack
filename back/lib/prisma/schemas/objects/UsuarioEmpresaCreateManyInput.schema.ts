import * as z from 'zod';
import type { Prisma } from '../../client';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema'

const makeSchema = () => z.object({
  idUsuarioEmpresa: z.number().int().optional(),
  idUsuario: z.number().int(),
  idEmpresa: z.number().int(),
  rol: RolUsuarioSchema.optional()
}).strict();
export const UsuarioEmpresaCreateManyInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaCreateManyInput>;
export const UsuarioEmpresaCreateManyInputObjectZodSchema = makeSchema();
