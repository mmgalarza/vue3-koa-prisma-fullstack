import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaIdUsuarioIdEmpresaCompoundUniqueInputObjectSchema as UsuarioEmpresaIdUsuarioIdEmpresaCompoundUniqueInputObjectSchema } from './UsuarioEmpresaIdUsuarioIdEmpresaCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  idUsuarioEmpresa: z.number().int().optional(),
  idUsuario_idEmpresa: z.lazy(() => UsuarioEmpresaIdUsuarioIdEmpresaCompoundUniqueInputObjectSchema).optional()
}).strict();
export const UsuarioEmpresaWhereUniqueInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaWhereUniqueInput>;
export const UsuarioEmpresaWhereUniqueInputObjectZodSchema = makeSchema();
