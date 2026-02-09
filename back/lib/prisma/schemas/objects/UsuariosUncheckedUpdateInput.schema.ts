import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UsuarioEmpresaUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema as UsuarioEmpresaUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema } from './UsuarioEmpresaUncheckedUpdateManyWithoutUsuarioNestedInput.schema'

const makeSchema = () => z.object({
  idUsuario: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  username: z.union([z.string().max(50), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string().max(100), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string().max(255), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string().max(80), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  activo: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  creadoEn: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  actualizadoEn: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  UsuarioEmpresas: z.lazy(() => UsuarioEmpresaUncheckedUpdateManyWithoutUsuarioNestedInputObjectSchema).optional()
}).strict();
export const UsuariosUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.UsuariosUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.UsuariosUncheckedUpdateInput>;
export const UsuariosUncheckedUpdateInputObjectZodSchema = makeSchema();
