import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateNestedOneWithoutActividadesInputObjectSchema as EmpresasCreateNestedOneWithoutActividadesInputObjectSchema } from './EmpresasCreateNestedOneWithoutActividadesInput.schema'

const makeSchema = () => z.object({
  nombre: z.string().max(80),
  inicio: z.coerce.date().optional(),
  fin: z.coerce.date().optional(),
  estado: z.string().max(20).optional(),
  activa: z.boolean().optional(),
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutActividadesInputObjectSchema).optional()
}).strict();
export const ActividadCreateWithoutRegistrosInputObjectSchema: z.ZodType<Prisma.ActividadCreateWithoutRegistrosInput> = makeSchema() as unknown as z.ZodType<Prisma.ActividadCreateWithoutRegistrosInput>;
export const ActividadCreateWithoutRegistrosInputObjectZodSchema = makeSchema();
