import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { VentaDetUncheckedUpdateManyWithoutVentaNestedInputObjectSchema as VentaDetUncheckedUpdateManyWithoutVentaNestedInputObjectSchema } from './VentaDetUncheckedUpdateManyWithoutVentaNestedInput.schema';
import { FacturaUncheckedUpdateOneWithoutVentaNestedInputObjectSchema as FacturaUncheckedUpdateOneWithoutVentaNestedInputObjectSchema } from './FacturaUncheckedUpdateOneWithoutVentaNestedInput.schema';
import { RegistroUncheckedUpdateManyWithoutVentaNestedInputObjectSchema as RegistroUncheckedUpdateManyWithoutVentaNestedInputObjectSchema } from './RegistroUncheckedUpdateManyWithoutVentaNestedInput.schema'

const makeSchema = () => z.object({
  idVenta: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  estado: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  idEmpresa: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  idCliente: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  detalles: z.lazy(() => VentaDetUncheckedUpdateManyWithoutVentaNestedInputObjectSchema).optional(),
  factura: z.lazy(() => FacturaUncheckedUpdateOneWithoutVentaNestedInputObjectSchema).optional(),
  registros: z.lazy(() => RegistroUncheckedUpdateManyWithoutVentaNestedInputObjectSchema).optional()
}).strict();
export const VentaUncheckedUpdateWithoutListaPvpInputObjectSchema: z.ZodType<Prisma.VentaUncheckedUpdateWithoutListaPvpInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUncheckedUpdateWithoutListaPvpInput>;
export const VentaUncheckedUpdateWithoutListaPvpInputObjectZodSchema = makeSchema();
