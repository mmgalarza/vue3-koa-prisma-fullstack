import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idCategoria: z.number().int().optional(),
  nombre: z.string(),
  descripcion: z.string().optional().nullable(),
  icono: z.string().optional().nullable(),
  activo: z.boolean().optional(),
  idEmpresa: z.number().int().optional()
}).strict();
export const CategoriasUncheckedCreateWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriasUncheckedCreateWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasUncheckedCreateWithoutProductosInput>;
export const CategoriasUncheckedCreateWithoutProductosInputObjectZodSchema = makeSchema();
