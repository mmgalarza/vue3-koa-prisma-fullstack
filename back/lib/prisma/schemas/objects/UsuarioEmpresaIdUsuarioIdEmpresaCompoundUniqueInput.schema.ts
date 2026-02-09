import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idUsuario: z.number().int(),
  idEmpresa: z.number().int()
}).strict();
export const UsuarioEmpresaIdUsuarioIdEmpresaCompoundUniqueInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaIdUsuarioIdEmpresaCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaIdUsuarioIdEmpresaCompoundUniqueInput>;
export const UsuarioEmpresaIdUsuarioIdEmpresaCompoundUniqueInputObjectZodSchema = makeSchema();
