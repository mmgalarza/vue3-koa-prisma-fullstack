import * as z from 'zod';
import type { Prisma } from '../../client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectSchema as TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectSchema } from './TiposDocUpdateOneRequiredWithoutRegistrosNestedInput.schema';
import { ActividadUpdateOneWithoutRegistrosNestedInputObjectSchema as ActividadUpdateOneWithoutRegistrosNestedInputObjectSchema } from './ActividadUpdateOneWithoutRegistrosNestedInput.schema';
import { RegistroDetUpdateManyWithoutRegistroNestedInputObjectSchema as RegistroDetUpdateManyWithoutRegistroNestedInputObjectSchema } from './RegistroDetUpdateManyWithoutRegistroNestedInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  numero: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tipoDoc: z.lazy(() => TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectSchema).optional(),
  actividad: z.lazy(() => ActividadUpdateOneWithoutRegistrosNestedInputObjectSchema).optional(),
  detalles: z.lazy(() => RegistroDetUpdateManyWithoutRegistroNestedInputObjectSchema).optional()
}).strict();
export const RegistroUpdateWithoutVentaInputObjectSchema: z.ZodType<Prisma.RegistroUpdateWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateWithoutVentaInput>;
export const RegistroUpdateWithoutVentaInputObjectZodSchema = makeSchema();
