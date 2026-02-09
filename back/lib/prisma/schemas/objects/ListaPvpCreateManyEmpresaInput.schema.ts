import * as z from 'zod';
import type { Prisma } from '../../client';
import { TiposPvpSchema } from '../enums/TiposPvp.schema'

const makeSchema = () => z.object({
  idListaPvp: z.number().int().optional(),
  nombre: z.string(),
  criterio: TiposPvpSchema,
  fechaGen: z.coerce.date().optional()
}).strict();
export const ListaPvpCreateManyEmpresaInputObjectSchema: z.ZodType<Prisma.ListaPvpCreateManyEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ListaPvpCreateManyEmpresaInput>;
export const ListaPvpCreateManyEmpresaInputObjectZodSchema = makeSchema();
