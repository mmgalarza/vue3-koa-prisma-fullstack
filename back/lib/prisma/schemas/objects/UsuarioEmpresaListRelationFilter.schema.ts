import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuarioEmpresaWhereInputObjectSchema as UsuarioEmpresaWhereInputObjectSchema } from './UsuarioEmpresaWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => UsuarioEmpresaWhereInputObjectSchema).optional(),
  some: z.lazy(() => UsuarioEmpresaWhereInputObjectSchema).optional(),
  none: z.lazy(() => UsuarioEmpresaWhereInputObjectSchema).optional()
}).strict();
export const UsuarioEmpresaListRelationFilterObjectSchema: z.ZodType<Prisma.UsuarioEmpresaListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaListRelationFilter>;
export const UsuarioEmpresaListRelationFilterObjectZodSchema = makeSchema();
