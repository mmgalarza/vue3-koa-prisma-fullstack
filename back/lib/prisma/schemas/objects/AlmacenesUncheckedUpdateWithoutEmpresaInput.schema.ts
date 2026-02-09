import * as z from 'zod';
import type { Prisma } from '../../client';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { RegistroDetUncheckedUpdateManyWithoutAlmacenNestedInputObjectSchema as RegistroDetUncheckedUpdateManyWithoutAlmacenNestedInputObjectSchema } from './RegistroDetUncheckedUpdateManyWithoutAlmacenNestedInput.schema'

const makeSchema = () => z.object({
  idAlmacen: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  nombre: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  interno: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  calle: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  numero: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  ciudad: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  provincia: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  codigoPostal: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  pais: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  responsable: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  activo: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  registrosDet: z.lazy(() => RegistroDetUncheckedUpdateManyWithoutAlmacenNestedInputObjectSchema).optional()
}).strict();
export const AlmacenesUncheckedUpdateWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.AlmacenesUncheckedUpdateWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.AlmacenesUncheckedUpdateWithoutEmpresaInput>;
export const AlmacenesUncheckedUpdateWithoutEmpresaInputObjectZodSchema = makeSchema();
