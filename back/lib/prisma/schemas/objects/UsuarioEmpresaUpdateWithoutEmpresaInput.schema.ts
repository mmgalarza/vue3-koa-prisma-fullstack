import * as z from 'zod';
import type { Prisma } from '../../client';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { EnumRolUsuarioFieldUpdateOperationsInputObjectSchema as EnumRolUsuarioFieldUpdateOperationsInputObjectSchema } from './EnumRolUsuarioFieldUpdateOperationsInput.schema';
import { UsuariosUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema as UsuariosUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema } from './UsuariosUpdateOneRequiredWithoutUsuarioEmpresasNestedInput.schema'

const makeSchema = () => z.object({
  rol: z.union([RolUsuarioSchema, z.lazy(() => EnumRolUsuarioFieldUpdateOperationsInputObjectSchema)]).optional(),
  usuario: z.lazy(() => UsuariosUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema).optional()
}).strict();
export const UsuarioEmpresaUpdateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUpdateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpdateWithoutEmpresaInput>;
export const UsuarioEmpresaUpdateWithoutEmpresaInputObjectZodSchema = makeSchema();
