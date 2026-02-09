import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema'

const makeSchema = () => z.object({
  idListaPvp: z.number().int().optional(),
  nombre: z.string(),
  criterio: TiposPvpSchema,
  fechaGen: z.coerce.date().optional(),
  idEmpresa: z.number().int()
}).strict();
export const ListaPvpCreateManyInputObjectSchema: z.ZodType<Prisma.ListaPvpCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCreateManyInput>;
export const ListaPvpCreateManyInputObjectZodSchema = makeSchema();
