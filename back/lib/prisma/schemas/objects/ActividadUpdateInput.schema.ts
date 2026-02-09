import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { EmpresasUpdateOneRequiredWithoutActividadesNestedInputObjectSchema as EmpresasUpdateOneRequiredWithoutActividadesNestedInputObjectSchema } from './EmpresasUpdateOneRequiredWithoutActividadesNestedInput.schema';
import { RegistroUpdateManyWithoutActividadNestedInputObjectSchema as RegistroUpdateManyWithoutActividadNestedInputObjectSchema } from './RegistroUpdateManyWithoutActividadNestedInput.schema'

const makeSchema = () => z.object({
  nombre: z.union([z.string().max(80), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  inicio: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  fin: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  estado: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  activa: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  empresa: z.lazy(() => EmpresasUpdateOneRequiredWithoutActividadesNestedInputObjectSchema).optional(),
  registros: z.lazy(() => RegistroUpdateManyWithoutActividadNestedInputObjectSchema).optional()
}).strict();
export const ActividadUpdateInputObjectSchema: z.ZodType<Prisma.ActividadUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadUpdateInput>;
export const ActividadUpdateInputObjectZodSchema = makeSchema();
