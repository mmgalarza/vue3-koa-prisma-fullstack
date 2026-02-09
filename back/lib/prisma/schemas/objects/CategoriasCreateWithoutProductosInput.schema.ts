import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateNestedOneWithoutCategoriasInputObjectSchema as EmpresasCreateNestedOneWithoutCategoriasInputObjectSchema } from './EmpresasCreateNestedOneWithoutCategoriasInput.schema'

const makeSchema = () => z.object({
  nombre: z.string().max(80),
  descripcion: z.string().max(150).optional().nullable(),
  icono: z.string().max(50).optional().nullable(),
  activo: z.boolean().optional(),
  empresa: z.lazy(() => EmpresasCreateNestedOneWithoutCategoriasInputObjectSchema).optional()
}).strict();
export const CategoriasCreateWithoutProductosInputObjectSchema: z.ZodType<Prisma.CategoriasCreateWithoutProductosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoriasCreateWithoutProductosInput>;
export const CategoriasCreateWithoutProductosInputObjectZodSchema = makeSchema();
