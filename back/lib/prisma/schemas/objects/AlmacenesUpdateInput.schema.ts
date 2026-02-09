import * as z from 'zod';
import type { Prisma } from '../../client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { EmpresasUpdateOneRequiredWithoutAlmacenesNestedInputObjectSchema as EmpresasUpdateOneRequiredWithoutAlmacenesNestedInputObjectSchema } from './EmpresasUpdateOneRequiredWithoutAlmacenesNestedInput.schema';
import { RegistroDetUpdateManyWithoutAlmacenNestedInputObjectSchema as RegistroDetUpdateManyWithoutAlmacenNestedInputObjectSchema } from './RegistroDetUpdateManyWithoutAlmacenNestedInput.schema'

const makeSchema = () => z.object({
  nombre: z.union([z.string().max(80), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  interno: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  calle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numero: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ciudad: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  provincia: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  codigoPostal: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  pais: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  responsable: z.union([z.string().max(80), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  activo: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  empresa: z.lazy(() => EmpresasUpdateOneRequiredWithoutAlmacenesNestedInputObjectSchema).optional(),
  registrosDet: z.lazy(() => RegistroDetUpdateManyWithoutAlmacenNestedInputObjectSchema).optional()
}).strict();
export const AlmacenesUpdateInputObjectSchema: z.ZodType<Prisma.AlmacenesUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesUpdateInput>;
export const AlmacenesUpdateInputObjectZodSchema = makeSchema();
