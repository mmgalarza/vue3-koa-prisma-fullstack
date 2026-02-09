import * as z from 'zod';
import type { Prisma } from '../../client';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { EnumRolUsuarioFieldUpdateOperationsInputObjectSchema as EnumRolUsuarioFieldUpdateOperationsInputObjectSchema } from './EnumRolUsuarioFieldUpdateOperationsInput.schema';
import { EmpresasUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema as EmpresasUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema } from './EmpresasUpdateOneRequiredWithoutUsuarioEmpresasNestedInput.schema'

const makeSchema = () => z.object({
  rol: z.union([RolUsuarioSchema, z.lazy(() => EnumRolUsuarioFieldUpdateOperationsInputObjectSchema)]).optional(),
  empresa: z.lazy(() => EmpresasUpdateOneRequiredWithoutUsuarioEmpresasNestedInputObjectSchema).optional()
}).strict();
export const UsuarioEmpresaUpdateWithoutUsuarioInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUpdateWithoutUsuarioInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUpdateWithoutUsuarioInput>;
export const UsuarioEmpresaUpdateWithoutUsuarioInputObjectZodSchema = makeSchema();
