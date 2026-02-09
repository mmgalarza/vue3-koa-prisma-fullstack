import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idLista: z.number().int().optional(),
  idProveedor: z.number().int().optional(),
  refNo: z.string(),
  fecha: z.coerce.date().optional(),
  observacion: z.string().optional().nullable()
}).strict();
export const ListasUncheckedCreateWithoutDetallesInputObjectSchema: z.ZodType<Prisma.ListasUncheckedCreateWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.ListasUncheckedCreateWithoutDetallesInput>;
export const ListasUncheckedCreateWithoutDetallesInputObjectZodSchema = makeSchema();
