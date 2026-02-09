import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idLista: z.number().int().optional(),
  refNo: z.string().max(50),
  fecha: z.coerce.date().optional(),
  observacion: z.string().max(150).optional().nullable()
}).strict();
export const ListasCreateManyProveedorInputObjectSchema: z.ZodType<Prisma.ListasCreateManyProveedorInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasCreateManyProveedorInput>;
export const ListasCreateManyProveedorInputObjectZodSchema = makeSchema();
