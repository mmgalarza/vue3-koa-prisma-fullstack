import * as z from 'zod';
import type { Prisma } from '../../client';
import { ListasDetCreateNestedManyWithoutListaInputObjectSchema as ListasDetCreateNestedManyWithoutListaInputObjectSchema } from './ListasDetCreateNestedManyWithoutListaInput.schema'

const makeSchema = () => z.object({
  refNo: z.string().max(50),
  fecha: z.coerce.date().optional(),
  observacion: z.string().max(150).optional().nullable(),
  detalles: z.lazy(() => ListasDetCreateNestedManyWithoutListaInputObjectSchema).optional()
}).strict();
export const ListasCreateWithoutProveedorInputObjectSchema: z.ZodType<Prisma.ListasCreateWithoutProveedorInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasCreateWithoutProveedorInput>;
export const ListasCreateWithoutProveedorInputObjectZodSchema = makeSchema();
