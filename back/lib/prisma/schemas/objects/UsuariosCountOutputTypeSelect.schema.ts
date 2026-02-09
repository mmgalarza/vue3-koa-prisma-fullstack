import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuariosCountOutputTypeCountUsuarioEmpresasArgsObjectSchema as UsuariosCountOutputTypeCountUsuarioEmpresasArgsObjectSchema } from './UsuariosCountOutputTypeCountUsuarioEmpresasArgs.schema'

const makeSchema = () => z.object({
  UsuarioEmpresas: z.union([z.boolean(), z.lazy(() => UsuariosCountOutputTypeCountUsuarioEmpresasArgsObjectSchema)]).optional()
}).strict();
export const UsuariosCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UsuariosCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosCountOutputTypeSelect>;
export const UsuariosCountOutputTypeSelectObjectZodSchema = makeSchema();
