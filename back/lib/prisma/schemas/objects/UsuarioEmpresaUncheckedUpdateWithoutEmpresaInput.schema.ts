import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema';
import { EnumRolUsuarioFieldUpdateOperationsInputObjectSchema as EnumRolUsuarioFieldUpdateOperationsInputObjectSchema } from './EnumRolUsuarioFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  idUsuarioEmpresa: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  idUsuario: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  rol: z.union([RolUsuarioSchema, z.lazy(() => EnumRolUsuarioFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const UsuarioEmpresaUncheckedUpdateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.UsuarioEmpresaUncheckedUpdateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuarioEmpresaUncheckedUpdateWithoutEmpresaInput>;
export const UsuarioEmpresaUncheckedUpdateWithoutEmpresaInputObjectZodSchema = makeSchema();
