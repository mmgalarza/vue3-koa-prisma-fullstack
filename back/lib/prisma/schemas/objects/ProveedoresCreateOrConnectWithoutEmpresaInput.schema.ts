import * as z from 'zod';
import type { Prisma } from '../../client';
import { ProveedoresWhereUniqueInputObjectSchema as ProveedoresWhereUniqueInputObjectSchema } from './ProveedoresWhereUniqueInput.schema';
import { ProveedoresCreateWithoutEmpresaInputObjectSchema as ProveedoresCreateWithoutEmpresaInputObjectSchema } from './ProveedoresCreateWithoutEmpresaInput.schema';
import { ProveedoresUncheckedCreateWithoutEmpresaInputObjectSchema as ProveedoresUncheckedCreateWithoutEmpresaInputObjectSchema } from './ProveedoresUncheckedCreateWithoutEmpresaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProveedoresWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProveedoresCreateWithoutEmpresaInputObjectSchema), z.lazy(() => ProveedoresUncheckedCreateWithoutEmpresaInputObjectSchema)])
}).strict();
export const ProveedoresCreateOrConnectWithoutEmpresaInputObjectSchema: z.ZodType<Prisma.ProveedoresCreateOrConnectWithoutEmpresaInput> = makeSchema() as unknown as z.ZodType<Prisma.ProveedoresCreateOrConnectWithoutEmpresaInput>;
export const ProveedoresCreateOrConnectWithoutEmpresaInputObjectZodSchema = makeSchema();
