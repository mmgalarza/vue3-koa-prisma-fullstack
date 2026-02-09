import * as z from 'zod';
import type { Prisma } from '../../client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectSchema as TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectSchema } from './TiposDocUpdateOneRequiredWithoutRegistrosNestedInput.schema';
import { VentaUpdateOneWithoutRegistrosNestedInputObjectSchema as VentaUpdateOneWithoutRegistrosNestedInputObjectSchema } from './VentaUpdateOneWithoutRegistrosNestedInput.schema';
import { RegistroDetUpdateManyWithoutRegistroNestedInputObjectSchema as RegistroDetUpdateManyWithoutRegistroNestedInputObjectSchema } from './RegistroDetUpdateManyWithoutRegistroNestedInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  numero: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tipoDoc: z.lazy(() => TiposDocUpdateOneRequiredWithoutRegistrosNestedInputObjectSchema).optional(),
  venta: z.lazy(() => VentaUpdateOneWithoutRegistrosNestedInputObjectSchema).optional(),
  detalles: z.lazy(() => RegistroDetUpdateManyWithoutRegistroNestedInputObjectSchema).optional()
}).strict();
export const RegistroUpdateWithoutActividadInputObjectSchema: z.ZodType<Prisma.RegistroUpdateWithoutActividadInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateWithoutActividadInput>;
export const RegistroUpdateWithoutActividadInputObjectZodSchema = makeSchema();
