import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetUncheckedCreateNestedManyWithoutListaInputObjectSchema as ListasDetUncheckedCreateNestedManyWithoutListaInputObjectSchema } from './ListasDetUncheckedCreateNestedManyWithoutListaInput.schema'

const makeSchema = () => z.object({
  idLista: z.number().int().optional(),
  refNo: z.string(),
  fecha: z.coerce.date().optional(),
  observacion: z.string().optional().nullable(),
  detalles: z.lazy(() => ListasDetUncheckedCreateNestedManyWithoutListaInputObjectSchema).optional()
}).strict();
export const ListasUncheckedCreateWithoutProveedorInputObjectSchema: z.ZodType<Prisma.ListasUncheckedCreateWithoutProveedorInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUncheckedCreateWithoutProveedorInput>;
export const ListasUncheckedCreateWithoutProveedorInputObjectZodSchema = makeSchema();
