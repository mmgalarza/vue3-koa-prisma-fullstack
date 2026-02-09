import * as z from 'zod';
import type { Prisma } from '../../client';
import { RolUsuarioSchema } from '../enums/RolUsuario.schema'

const makeSchema = () => z.object({
  set: RolUsuarioSchema.optional()
}).strict();
export const EnumRolUsuarioFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumRolUsuarioFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumRolUsuarioFieldUpdateOperationsInput>;
export const EnumRolUsuarioFieldUpdateOperationsInputObjectZodSchema = makeSchema();
