import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresCreateWithoutListasInputObjectSchema as ProveedoresCreateWithoutListasInputObjectSchema } from './ProveedoresCreateWithoutListasInput.schema';
import { ProveedoresUncheckedCreateWithoutListasInputObjectSchema as ProveedoresUncheckedCreateWithoutListasInputObjectSchema } from './ProveedoresUncheckedCreateWithoutListasInput.schema';
import { ProveedoresCreateOrConnectWithoutListasInputObjectSchema as ProveedoresCreateOrConnectWithoutListasInputObjectSchema } from './ProveedoresCreateOrConnectWithoutListasInput.schema';
import { ProveedoresWhereUniqueInputObjectSchema as ProveedoresWhereUniqueInputObjectSchema } from './ProveedoresWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProveedoresCreateWithoutListasInputObjectSchema), z.lazy(() => ProveedoresUncheckedCreateWithoutListasInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProveedoresCreateOrConnectWithoutListasInputObjectSchema).optional(),
  connect: z.lazy(() => ProveedoresWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProveedoresCreateNestedOneWithoutListasInputObjectSchema: z.ZodType<Prisma.ProveedoresCreateNestedOneWithoutListasInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresCreateNestedOneWithoutListasInput>;
export const ProveedoresCreateNestedOneWithoutListasInputObjectZodSchema = makeSchema();
