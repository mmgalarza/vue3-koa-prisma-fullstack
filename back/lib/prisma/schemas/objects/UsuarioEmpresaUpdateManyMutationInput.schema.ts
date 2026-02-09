import * as z from 'zod';
import type { Prisma } from '../../client';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { EnumRolUsuarioFieldUpdateOperationsInputObjectSchema as EnumRolUsuarioFieldUpdateOperationsInputObjectSchema } from './EnumRolUsuarioFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  rol: z.union([RolUsuarioSchema, z.lazy(() => EnumRolUsuarioFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const UsuarioEmpresaUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpdateManyMutationInput>;
export const UsuarioEmpresaUpdateManyMutationInputObjectZodSchema = makeSchema();
