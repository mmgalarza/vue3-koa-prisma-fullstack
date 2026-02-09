import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresCreateNestedOneWithoutListasInputObjectSchema as ProveedoresCreateNestedOneWithoutListasInputObjectSchema } from './ProveedoresCreateNestedOneWithoutListasInput.schema';
import { ListasDetCreateNestedManyWithoutListaInputObjectSchema as ListasDetCreateNestedManyWithoutListaInputObjectSchema } from './ListasDetCreateNestedManyWithoutListaInput.schema'

const makeSchema = () => z.object({
  refNo: z.string().max(50),
  fecha: z.coerce.date().optional(),
  observacion: z.string().max(150).optional().nullable(),
  proveedor: z.lazy(() => ProveedoresCreateNestedOneWithoutListasInputObjectSchema),
  detalles: z.lazy(() => ListasDetCreateNestedManyWithoutListaInputObjectSchema).optional()
}).strict();
export const ListasCreateInputObjectSchema: z.ZodType<Prisma.ListasCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasCreateInput>;
export const ListasCreateInputObjectZodSchema = makeSchema();
