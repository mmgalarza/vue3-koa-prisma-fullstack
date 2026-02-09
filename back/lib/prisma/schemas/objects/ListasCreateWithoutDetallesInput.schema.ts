import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresCreateNestedOneWithoutListasInputObjectSchema as ProveedoresCreateNestedOneWithoutListasInputObjectSchema } from './ProveedoresCreateNestedOneWithoutListasInput.schema'

const makeSchema = () => z.object({
  refNo: z.string().max(50),
  fecha: z.coerce.date().optional(),
  observacion: z.string().max(150).optional().nullable(),
  proveedor: z.lazy(() => ProveedoresCreateNestedOneWithoutListasInputObjectSchema).optional()
}).strict();
export const ListasCreateWithoutDetallesInputObjectSchema: z.ZodType<Prisma.ListasCreateWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasCreateWithoutDetallesInput>;
export const ListasCreateWithoutDetallesInputObjectZodSchema = makeSchema();
