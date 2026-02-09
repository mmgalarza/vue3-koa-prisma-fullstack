import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { TiposPvpSchema } from '../enums/TiposPvp.schema';
import { EnumTiposPvpFieldUpdateOperationsInputObjectSchema as EnumTiposPvpFieldUpdateOperationsInputObjectSchema } from './EnumTiposPvpFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ListaPvpDetUncheckedUpdateManyWithoutListaPvpNestedInputObjectSchema as ListaPvpDetUncheckedUpdateManyWithoutListaPvpNestedInputObjectSchema } from './ListaPvpDetUncheckedUpdateManyWithoutListaPvpNestedInput.schema';
import { VentaUncheckedUpdateManyWithoutListaPvpNestedInputObjectSchema as VentaUncheckedUpdateManyWithoutListaPvpNestedInputObjectSchema } from './VentaUncheckedUpdateManyWithoutListaPvpNestedInput.schema'

const makeSchema = () => z.object({
  idListaPvp: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  criterio: z.union([TiposPvpSchema, z.lazy(() => EnumTiposPvpFieldUpdateOperationsInputObjectSchema)]).optional(),
  fechaGen: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  detalles: z.lazy(() => ListaPvpDetUncheckedUpdateManyWithoutListaPvpNestedInputObjectSchema).optional(),
  ventas: z.lazy(() => VentaUncheckedUpdateManyWithoutListaPvpNestedInputObjectSchema).optional()
}).strict();
export const ListaPvpUncheckedUpdateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ListaPvpUncheckedUpdateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpUncheckedUpdateWithoutEmpresaInput>;
export const ListaPvpUncheckedUpdateWithoutEmpresaInputObjectZodSchema = makeSchema();
