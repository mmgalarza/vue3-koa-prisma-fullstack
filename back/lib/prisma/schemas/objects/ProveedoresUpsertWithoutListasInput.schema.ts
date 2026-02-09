import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresUpdateWithoutListasInputObjectSchema as ProveedoresUpdateWithoutListasInputObjectSchema } from './ProveedoresUpdateWithoutListasInput.schema';
import { ProveedoresUncheckedUpdateWithoutListasInputObjectSchema as ProveedoresUncheckedUpdateWithoutListasInputObjectSchema } from './ProveedoresUncheckedUpdateWithoutListasInput.schema';
import { ProveedoresCreateWithoutListasInputObjectSchema as ProveedoresCreateWithoutListasInputObjectSchema } from './ProveedoresCreateWithoutListasInput.schema';
import { ProveedoresUncheckedCreateWithoutListasInputObjectSchema as ProveedoresUncheckedCreateWithoutListasInputObjectSchema } from './ProveedoresUncheckedCreateWithoutListasInput.schema';
import { ProveedoresWhereInputObjectSchema as ProveedoresWhereInputObjectSchema } from './ProveedoresWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProveedoresUpdateWithoutListasInputObjectSchema), z.lazy(() => ProveedoresUncheckedUpdateWithoutListasInputObjectSchema)]),
  create: z.union([z.lazy(() => ProveedoresCreateWithoutListasInputObjectSchema), z.lazy(() => ProveedoresUncheckedCreateWithoutListasInputObjectSchema)]),
  where: z.lazy(() => ProveedoresWhereInputObjectSchema).optional()
}).strict();
export const ProveedoresUpsertWithoutListasInputObjectSchema: z.ZodType<Prisma.ProveedoresUpsertWithoutListasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresUpsertWithoutListasInput>;
export const ProveedoresUpsertWithoutListasInputObjectZodSchema = makeSchema();
