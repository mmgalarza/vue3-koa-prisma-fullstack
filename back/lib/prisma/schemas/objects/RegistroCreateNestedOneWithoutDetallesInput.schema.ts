import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCreateWithoutDetallesInputObjectSchema as RegistroCreateWithoutDetallesInputObjectSchema } from './RegistroCreateWithoutDetallesInput.schema';
import { RegistroUncheckedCreateWithoutDetallesInputObjectSchema as RegistroUncheckedCreateWithoutDetallesInputObjectSchema } from './RegistroUncheckedCreateWithoutDetallesInput.schema';
import { RegistroCreateOrConnectWithoutDetallesInputObjectSchema as RegistroCreateOrConnectWithoutDetallesInputObjectSchema } from './RegistroCreateOrConnectWithoutDetallesInput.schema';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroCreateWithoutDetallesInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutDetallesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RegistroCreateOrConnectWithoutDetallesInputObjectSchema).optional(),
  connect: z.lazy(() => RegistroWhereUniqueInputObjectSchema).optional()
}).strict();
export const RegistroCreateNestedOneWithoutDetallesInputObjectSchema: z.ZodType<Prisma.RegistroCreateNestedOneWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroCreateNestedOneWithoutDetallesInput>;
export const RegistroCreateNestedOneWithoutDetallesInputObjectZodSchema = makeSchema();
