import * as z from 'zod';
import type { Prisma } from '../../client';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { NestedEnumRolUsuarioFilterObjectSchema as NestedEnumRolUsuarioFilterObjectSchema } from './NestedEnumRolUsuarioFilter.schema'

const makeSchema = () => z.object({
  equals: RolUsuarioSchema.optional(),
  in: RolUsuarioSchema.array().optional(),
  notIn: RolUsuarioSchema.array().optional(),
  not: z.union([RolUsuarioSchema, z.lazy(() => NestedEnumRolUsuarioFilterObjectSchema)]).optional()
}).strict();
export const EnumRolUsuarioFilterObjectSchema: z.ZodType<Prisma.EnumRolUsuarioFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumRolUsuarioFilter>;
export const EnumRolUsuarioFilterObjectZodSchema = makeSchema();
