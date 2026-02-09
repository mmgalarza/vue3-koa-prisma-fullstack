import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresCreateWithoutListasInputObjectSchema as ProveedoresCreateWithoutListasInputObjectSchema } from './ProveedoresCreateWithoutListasInput.schema';
import { ProveedoresUncheckedCreateWithoutListasInputObjectSchema as ProveedoresUncheckedCreateWithoutListasInputObjectSchema } from './ProveedoresUncheckedCreateWithoutListasInput.schema';
import { ProveedoresCreateOrConnectWithoutListasInputObjectSchema as ProveedoresCreateOrConnectWithoutListasInputObjectSchema } from './ProveedoresCreateOrConnectWithoutListasInput.schema';
import { ProveedoresUpsertWithoutListasInputObjectSchema as ProveedoresUpsertWithoutListasInputObjectSchema } from './ProveedoresUpsertWithoutListasInput.schema';
import { ProveedoresWhereUniqueInputObjectSchema as ProveedoresWhereUniqueInputObjectSchema } from './ProveedoresWhereUniqueInput.schema';
import { ProveedoresUpdateToOneWithWhereWithoutListasInputObjectSchema as ProveedoresUpdateToOneWithWhereWithoutListasInputObjectSchema } from './ProveedoresUpdateToOneWithWhereWithoutListasInput.schema';
import { ProveedoresUpdateWithoutListasInputObjectSchema as ProveedoresUpdateWithoutListasInputObjectSchema } from './ProveedoresUpdateWithoutListasInput.schema';
import { ProveedoresUncheckedUpdateWithoutListasInputObjectSchema as ProveedoresUncheckedUpdateWithoutListasInputObjectSchema } from './ProveedoresUncheckedUpdateWithoutListasInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProveedoresCreateWithoutListasInputObjectSchema), z.lazy(() => ProveedoresUncheckedCreateWithoutListasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProveedoresCreateOrConnectWithoutListasInputObjectSchema).optional(),
  upsert: z.lazy(() => ProveedoresUpsertWithoutListasInputObjectSchema).optional(),
  connect: z.lazy(() => ProveedoresWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProveedoresUpdateToOneWithWhereWithoutListasInputObjectSchema), z.lazy(() => ProveedoresUpdateWithoutListasInputObjectSchema), z.lazy(() => ProveedoresUncheckedUpdateWithoutListasInputObjectSchema)]).optional()
}).strict();
export const ProveedoresUpdateOneRequiredWithoutListasNestedInputObjectSchema: z.ZodType<Prisma.ProveedoresUpdateOneRequiredWithoutListasNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresUpdateOneRequiredWithoutListasNestedInput>;
export const ProveedoresUpdateOneRequiredWithoutListasNestedInputObjectZodSchema = makeSchema();
