import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { VentaDetUncheckedUpdateManyWithoutVentaNestedInputObjectSchema as VentaDetUncheckedUpdateManyWithoutVentaNestedInputObjectSchema } from './VentaDetUncheckedUpdateManyWithoutVentaNestedInput.schema';
import { FacturaUncheckedUpdateOneWithoutVentaNestedInputObjectSchema as FacturaUncheckedUpdateOneWithoutVentaNestedInputObjectSchema } from './FacturaUncheckedUpdateOneWithoutVentaNestedInput.schema'

const makeSchema = () => z.object({
  idVenta: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  estado: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  idEmpresa: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  idCliente: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  idListaPvp: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  detalles: z.lazy(() => VentaDetUncheckedUpdateManyWithoutVentaNestedInputObjectSchema).optional(),
  factura: z.lazy(() => FacturaUncheckedUpdateOneWithoutVentaNestedInputObjectSchema).optional()
}).strict();
export const VentaUncheckedUpdateWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.VentaUncheckedUpdateWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUncheckedUpdateWithoutRegistrosInput>;
export const VentaUncheckedUpdateWithoutRegistrosInputObjectZodSchema = makeSchema();
