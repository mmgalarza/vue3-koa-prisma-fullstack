import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetUncheckedCreateNestedManyWithoutListaInputObjectSchema as ListasDetUncheckedCreateNestedManyWithoutListaInputObjectSchema } from './ListasDetUncheckedCreateNestedManyWithoutListaInput.schema'

const makeSchema = () => z.object({
  idLista: z.number().int().optional(),
  idProveedor: z.number().int().optional(),
  refNo: z.string().max(50),
  fecha: z.coerce.date().optional(),
  observacion: z.string().max(150).optional().nullable(),
  detalles: z.lazy(() => ListasDetUncheckedCreateNestedManyWithoutListaInputObjectSchema).optional()
}).strict();
export const ListasUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ListasUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUncheckedCreateInput>;
export const ListasUncheckedCreateInputObjectZodSchema = makeSchema();
