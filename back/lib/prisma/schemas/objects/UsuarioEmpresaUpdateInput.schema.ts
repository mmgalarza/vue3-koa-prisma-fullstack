import * as z from 'zod';
import type { Prisma } from '../../client';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { EnumRolUsuarioFieldUpdateOperationsInputObjectSchema as EnumRolUsuarioFieldUpdateOperationsInputObjectSchema } from './EnumRolUsuarioFieldUpdateOperationsInput.schema';
import { UsuariosUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema as UsuariosUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema } from './UsuariosUpdateOneRequiredWithoutUsuarioEmpresasNestedInput.schema';
import { EmpresasUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema as EmpresasUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema } from './EmpresasUpdateOneRequiredWithoutUsuarioEmpresasNestedInput.schema'

const makeSchema = () => z.object({
  rol: z.union([RolUsuarioSchema, z.lazy(() => EnumRolUsuarioFieldUpdateOperationsInputObjectSchema)]).optional(),
  usuario: z.lazy(() => UsuariosUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema).optional(),
  empresa: z.lazy(() => EmpresasUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema).optional()
}).strict();
export const UsuarioEmpresaUpdateInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpdateInput>;
export const UsuarioEmpresaUpdateInputObjectZodSchema = makeSchema();
