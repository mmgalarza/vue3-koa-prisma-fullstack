import * as z from 'zod';
import type { Prisma } from '../../client';
import { EmpresasCreateWithoutCategoriasInputObjectSchema as EmpresasCreateWithoutCategoriasInputObjectSchema } from './EmpresasCreateWithoutCategoriasInput.schema';
import { EmpresasUncheckedCreateWithoutCategoriasInputObjectSchema as EmpresasUncheckedCreateWithoutCategoriasInputObjectSchema } from './EmpresasUncheckedCreateWithoutCategoriasInput.schema';
import { EmpresasCreateOrConnectWithoutCategoriasInputObjectSchema as EmpresasCreateOrConnectWithoutCategoriasInputObjectSchema } from './EmpresasCreateOrConnectWithoutCategoriasInput.schema';
import { EmpresasUpsertWithoutCategoriasInputObjectSchema as EmpresasUpsertWithoutCategoriasInputObjectSchema } from './EmpresasUpsertWithoutCategoriasInput.schema';
import { EmpresasWhereUniqueInputObjectSchema as EmpresasWhereUniqueInputObjectSchema } from './EmpresasWhereUniqueInput.schema';
import { EmpresasUpdateToOneWithWhereWithoutCategoriasInputObjectSchema as EmpresasUpdateToOneWithWhereWithoutCategoriasInputObjectSchema } from './EmpresasUpdateToOneWithWhereWithoutCategoriasInput.schema';
import { EmpresasUpdateWithoutCategoriasInputObjectSchema as EmpresasUpdateWithoutCategoriasInputObjectSchema } from './EmpresasUpdateWithoutCategoriasInput.schema';
import { EmpresasUncheckedUpdateWithoutCategoriasInputObjectSchema as EmpresasUncheckedUpdateWithoutCategoriasInputObjectSchema } from './EmpresasUncheckedUpdateWithoutCategoriasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => EmpresasCreateWithoutCategoriasInputObjectSchema), z.lazy(() => EmpresasUncheckedCreateWithoutCategoriasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => EmpresasCreateOrConnectWithoutCategoriasInputObjectSchema).optional(),
  upsert: z.lazy(() => EmpresasUpsertWithoutCategoriasInputObjectSchema).optional(),
  connect: z.lazy(() => EmpresasWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => EmpresasUpdateToOneWithWhereWithoutCategoriasInputObjectSchema), z.lazy(() => EmpresasUpdateWithoutCategoriasInputObjectSchema), z.lazy(() => EmpresasUncheckedUpdateWithoutCategoriasInputObjectSchema)]).optional()
}).strict();
export const EmpresasUpdateOneRequiredWithoutCategoriasNestedInputObjectSchema: z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutCategoriasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.EmpresasUpdateOneRequiredWithoutCategoriasNestedInput>;
export const EmpresasUpdateOneRequiredWithoutCategoriasNestedInputObjectZodSchema = makeSchema();
