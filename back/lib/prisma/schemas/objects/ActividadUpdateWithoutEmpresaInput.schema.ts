import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { RegistroUpdateManyWithoutActividadNestedInputObjectSchema as RegistroUpdateManyWithoutActividadNestedInputObjectSchema } from './RegistroUpdateManyWithoutActividadNestedInput.schema'

const makeSchema = () => z.object({
  nombre: z.union([z.string().max(80), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inicio: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  fin: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  estado: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  activa: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  registros: z.lazy(() => RegistroUpdateManyWithoutActividadNestedInputObjectSchema).optional()
}).strict();
export const ActividadUpdateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ActividadUpdateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadUpdateWithoutEmpresaInput>;
export const ActividadUpdateWithoutEmpresaInputObjectZodSchema = makeSchema();
