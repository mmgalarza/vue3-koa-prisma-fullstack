import * as z from 'zod';
import type { Prisma } from '../../client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectSchema as TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectSchema } from './TiposDocUpdateOneRequiredWithoutRegistrosNestedInput.schema';
import { VentaUpdateOneWithoutRegistrosNestedInputObjectSchema as VentaUpdateOneWithoutRegistrosNestedInputObjectSchema } from './VentaUpdateOneWithoutRegistrosNestedInput.schema';
import { ActividadUpdateOneWithoutRegistrosNestedInputObjectSchema as ActividadUpdateOneWithoutRegistrosNestedInputObjectSchema } from './ActividadUpdateOneWithoutRegistrosNestedInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  numero: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tipoDoc: z.lazy(() => TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectSchema).optional(),
  venta: z.lazy(() => VentaUpdateOneWithoutRegistrosNestedInputObjectSchema).optional(),
  actividad: z.lazy(() => ActividadUpdateOneWithoutRegistrosNestedInputObjectSchema).optional()
}).strict();
export const RegistroUpdateWithoutDetallesInputObjectSchema: z.ZodType<Prisma.RegistroUpdateWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateWithoutDetallesInput>;
export const RegistroUpdateWithoutDetallesInputObjectZodSchema = makeSchema();
