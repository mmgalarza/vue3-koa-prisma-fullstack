import * as z from 'zod';
import type { Prisma } from '../../client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { VentaUpdateOneWithoutRegistrosNestedInputObjectSchema as VentaUpdateOneWithoutRegistrosNestedInputObjectSchema } from './VentaUpdateOneWithoutRegistrosNestedInput.schema';
import { ActividadUpdateOneWithoutRegistrosNestedInputObjectSchema as ActividadUpdateOneWithoutRegistrosNestedInputObjectSchema } from './ActividadUpdateOneWithoutRegistrosNestedInput.schema';
import { RegistroDetUpdateManyWithoutRegistroNestedInputObjectSchema as RegistroDetUpdateManyWithoutRegistroNestedInputObjectSchema } from './RegistroDetUpdateManyWithoutRegistroNestedInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  numero: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  venta: z.lazy(() => VentaUpdateOneWithoutRegistrosNestedInputObjectSchema).optional(),
  actividad: z.lazy(() => ActividadUpdateOneWithoutRegistrosNestedInputObjectSchema).optional(),
  detalles: z.lazy(() => RegistroDetUpdateManyWithoutRegistroNestedInputObjectSchema).optional()
}).strict();
export const RegistroUpdateWithoutTipoDocInputObjectSchema: z.ZodType<Prisma.RegistroUpdateWithoutTipoDocInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateWithoutTipoDocInput>;
export const RegistroUpdateWithoutTipoDocInputObjectZodSchema = makeSchema();
