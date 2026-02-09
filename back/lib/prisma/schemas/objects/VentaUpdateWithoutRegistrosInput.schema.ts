import * as z from 'zod';
import type { Prisma } from '../../client';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { EmpresasUpdateOneRequiredWithoutVentasNestedInputObjectSchema as EmpresasUpdateOneRequiredWithoutVentasNestedInputObjectSchema } from './EmpresasUpdateOneRequiredWithoutVentasNestedInput.schema';
import { ClientesUpdateOneRequiredWithoutVentasNestedInputObjectSchema as ClientesUpdateOneRequiredWithoutVentasNestedInputObjectSchema } from './ClientesUpdateOneRequiredWithoutVentasNestedInput.schema';
import { ListaPvpUpdateOneRequiredWithoutVentasNestedInputObjectSchema as ListaPvpUpdateOneRequiredWithoutVentasNestedInputObjectSchema } from './ListaPvpUpdateOneRequiredWithoutVentasNestedInput.schema';
import { VentaDetUpdateManyWithoutVentaNestedInputObjectSchema as VentaDetUpdateManyWithoutVentaNestedInputObjectSchema } from './VentaDetUpdateManyWithoutVentaNestedInput.schema';
import { FacturaUpdateOneWithoutVentaNestedInputObjectSchema as FacturaUpdateOneWithoutVentaNestedInputObjectSchema } from './FacturaUpdateOneWithoutVentaNestedInput.schema'

const makeSchema = () => z.object({
  fecha: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  estado: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  empresa: z.lazy(() => EmpresasUpdateOneRequiredWithoutVentasNestedInputObjectSchema).optional(),
  cliente: z.lazy(() => ClientesUpdateOneRequiredWithoutVentasNestedInputObjectSchema).optional(),
  listaPvp: z.lazy(() => ListaPvpUpdateOneRequiredWithoutVentasNestedInputObjectSchema).optional(),
  detalles: z.lazy(() => VentaDetUpdateManyWithoutVentaNestedInputObjectSchema).optional(),
  factura: z.lazy(() => FacturaUpdateOneWithoutVentaNestedInputObjectSchema).optional()
}).strict();
export const VentaUpdateWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.VentaUpdateWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.VentaUpdateWithoutRegistrosInput>;
export const VentaUpdateWithoutRegistrosInputObjectZodSchema = makeSchema();
