import * as z from 'zod';
import type { Prisma } from '../../client';
import { UsuariosCountOutputTypeSelectObjectSchema as UsuariosCountOutputTypeSelectObjectSchema } from './UsuariosCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UsuariosCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const UsuariosCountOutputTypeArgsObjectSchema = makeSchema();
export const UsuariosCountOutputTypeArgsObjectZodSchema = makeSchema();
