import * as z from 'zod';
import type { Prisma } from '../../client';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema'

const nestedenumrolusuariofilterSchema = z.object({
  equals: RolUsuarioSchema.optional(),
  in: RolUsuarioSchema.array().optional(),
  notIn: RolUsuarioSchema.array().optional(),
  not: z.union([RolUsuarioSchema, z.lazy(() => NestedEnumRolUsuarioFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumRolUsuarioFilterObjectSchema: z.ZodType<Prisma.NestedEnumRolUsuarioFilter> = nestedenumrolusuariofilterSchema as unknown as z.ZodType<Prisma.NestedEnumRolUsuarioFilter>;
export const NestedEnumRolUsuarioFilterObjectZodSchema = nestedenumrolusuariofilterSchema;
