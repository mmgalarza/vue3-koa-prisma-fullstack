import * as z from 'zod';
import type { Prisma } from '../../client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectSchema as TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectSchema } from './TiposDocUpdateOneRequiredWithoutRegistrosNestedInput.schema';
import { VentaUpdateOneWithoutRegistrosNestedInputObjectSchema as VentaUpdateOneWithoutRegistrosNestedInputObjectSchema } from './VentaUpdateOneWithoutRegistrosNestedInput.schema';
import { ActividadUpdateOneWithoutRegistrosNestedInputObjectSchema as ActividadUpdateOneWithoutRegistrosNestedInputObjectSchema } from './ActividadUpdateOneWithoutRegistrosNestedInput.schema';
import { RegistroDetUpdateManyWithoutRegistroNestedInputObjectSchema as RegistroDetUpdateManyWithoutRegistroNestedInputObjectSchema } from './RegistroDetUpdateManyWithoutRegistroNestedInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  numero: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tipoDoc: z.lazy(() => TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectSchema).optional(),
  venta: z.lazy(() => VentaUpdateOneWithoutRegistrosNestedInputObjectSchema).optional(),
  actividad: z.lazy(() => ActividadUpdateOneWithoutRegistrosNestedInputObjectSchema).optional(),
  detalles: z.lazy(() => RegistroDetUpdateManyWithoutRegistroNestedInputObjectSchema).optional()
}).strict();
export const RegistroUpdateInputObjectSchema: z.ZodType<Prisma.RegistroUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateInput>;
export const RegistroUpdateInputObjectZodSchema = makeSchema();
