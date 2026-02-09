import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { EnumTiposPvpFieldUpdateOperationsInputObjectSchema as EnumTiposPvpFieldUpdateOperationsInputObjectSchema } from './EnumTiposPvpFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EmpresasUpdateOneRequiredWithoutListasPvpNestedInputObjectSchema as EmpresasUpdateOneRequiredWithoutListasPvpNestedInputObjectSchema } from './EmpresasUpdateOneRequiredWithoutListasPvpNestedInput.schema';
import { ListaPvpDetUpdateManyWithoutListaPvpNestedInputObjectSchema as ListaPvpDetUpdateManyWithoutListaPvpNestedInputObjectSchema } from './ListaPvpDetUpdateManyWithoutListaPvpNestedInput.schema'

const makeSchema = () => z.object({
  nombre: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  criterio: z.union([TiposPvpSchema, z.lazy(() => EnumTiposPvpFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaGen: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  empresa: z.lazy(() => EmpresasUpdateOneRequiredWithoutListasPvpNestedInputObjectSchema).optional(),
  detalles: z.lazy(() => ListaPvpDetUpdateManyWithoutListaPvpNestedInputObjectSchema).optional()
}).strict();
export const ListaPvpUpdateWithoutVentasInputObjectSchema: z.ZodType<Prisma.ListaPvpUpdateWithoutVentasInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUpdateWithoutVentasInput>;
export const ListaPvpUpdateWithoutVentasInputObjectZodSchema = makeSchema();
