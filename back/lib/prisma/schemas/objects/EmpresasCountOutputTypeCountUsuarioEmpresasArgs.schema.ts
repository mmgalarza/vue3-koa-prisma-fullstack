import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaWhereInputObjectSchema as UsuarioEmpresaWhereInputObjectSchema } from './UsuarioEmpresaWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UsuarioEmpresaWhereInputObjectSchema).optional()
}).strict();
export const EmpresasCountOutputTypeCountUsuarioEmpresasArgsObjectSchema = makeSchema();
export const EmpresasCountOutputTypeCountUsuarioEmpresasArgsObjectZodSchema = makeSchema();
