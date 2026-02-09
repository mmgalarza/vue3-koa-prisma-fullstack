import * as z from 'zod';
import type { Prisma } from '../../client';


const makeSchema = () => z.object({
  idCategoria: z.number().int().optional(),
  nombre: z.string().max(80),
  descripcion: z.string().max(150).optional().nullable(),
  icono: z.string().max(50).optional().nullable(),
  activo: z.boolean().optional(),
  idEmpresa: z.number().int().optional()
}).strict();
export const CategoriasCreateManyInputObjectSchema: z.ZodType<Prisma.CategoriasCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasCreateManyInput>;
export const CategoriasCreateManyInputObjectZodSchema = makeSchema();
