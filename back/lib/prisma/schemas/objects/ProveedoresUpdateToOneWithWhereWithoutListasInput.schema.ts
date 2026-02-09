import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresWhereInputObjectSchema as ProveedoresWhereInputObjectSchema } from './ProveedoresWhereInput.schema';
import { ProveedoresUpdateWithoutListasInputObjectSchema as ProveedoresUpdateWithoutListasInputObjectSchema } from './ProveedoresUpdateWithoutListasInput.schema';
import { ProveedoresUncheckedUpdateWithoutListasInputObjectSchema as ProveedoresUncheckedUpdateWithoutListasInputObjectSchema } from './ProveedoresUncheckedUpdateWithoutListasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProveedoresWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProveedoresUpdateWithoutListasInputObjectSchema), z.lazy(() => ProveedoresUncheckedUpdateWithoutListasInputObjectSchema)])
}).strict();
export const ProveedoresUpdateToOneWithWhereWithoutListasInputObjectSchema: z.ZodType<Prisma.ProveedoresUpdateToOneWithWhereWithoutListasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresUpdateToOneWithWhereWithoutListasInput>;
export const ProveedoresUpdateToOneWithWhereWithoutListasInputObjectZodSchema = makeSchema();
