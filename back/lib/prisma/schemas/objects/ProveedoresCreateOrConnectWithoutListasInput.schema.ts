import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresWhereUniqueInputObjectSchema as ProveedoresWhereUniqueInputObjectSchema } from './ProveedoresWhereUniqueInput.schema';
import { ProveedoresCreateWithoutListasInputObjectSchema as ProveedoresCreateWithoutListasInputObjectSchema } from './ProveedoresCreateWithoutListasInput.schema';
import { ProveedoresUncheckedCreateWithoutListasInputObjectSchema as ProveedoresUncheckedCreateWithoutListasInputObjectSchema } from './ProveedoresUncheckedCreateWithoutListasInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProveedoresWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProveedoresCreateWithoutListasInputObjectSchema), z.lazy(() => ProveedoresUncheckedCreateWithoutListasInputObjectSchema)])
}).strict();
export const ProveedoresCreateOrConnectWithoutListasInputObjectSchema: z.ZodType<Prisma.ProveedoresCreateOrConnectWithoutListasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresCreateOrConnectWithoutListasInput>;
export const ProveedoresCreateOrConnectWithoutListasInputObjectZodSchema = makeSchema();
