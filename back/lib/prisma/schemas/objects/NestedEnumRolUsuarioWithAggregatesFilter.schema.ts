import * as z from 'zod';
import type { Prisma } from '../../client';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRolUsuarioFilterObjectSchema as NestedEnumRolUsuarioFilterObjectSchema } from './NestedEnumRolUsuarioFilter.schema'

const nestedenumrolusuariowithaggregatesfilterSchema = z.object({
  equals: RolUsuarioSchema.optional(),
  in: RolUsuarioSchema.array().optional(),
  notIn: RolUsuarioSchema.array().optional(),
  not: z.union([RolUsuarioSchema, z.lazy(() => NestedEnumRolUsuarioWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumRolUsuarioFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumRolUsuarioFilterObjectSchema).optional()
}).strict();
export const NestedEnumRolUsuarioWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumRolUsuarioWithAggregatesFilter> = nestedenumrolusuariowithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumRolUsuarioWithAggregatesFilter>;
export const NestedEnumRolUsuarioWithAggregatesFilterObjectZodSchema = nestedenumrolusuariowithaggregatesfilterSchema;
