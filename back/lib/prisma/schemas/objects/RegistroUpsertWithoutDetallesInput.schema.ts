import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroUpdateWithoutDetallesInputObjectSchema as RegistroUpdateWithoutDetallesInputObjectSchema } from './RegistroUpdateWithoutDetallesInput.schema';
import { RegistroUncheckedUpdateWithoutDetallesInputObjectSchema as RegistroUncheckedUpdateWithoutDetallesInputObjectSchema } from './RegistroUncheckedUpdateWithoutDetallesInput.schema';
import { RegistroCreateWithoutDetallesInputObjectSchema as RegistroCreateWithoutDetallesInputObjectSchema } from './RegistroCreateWithoutDetallesInput.schema';
import { RegistroUncheckedCreateWithoutDetallesInputObjectSchema as RegistroUncheckedCreateWithoutDetallesInputObjectSchema } from './RegistroUncheckedCreateWithoutDetallesInput.schema';
import { RegistroWhereInputObjectSchema as RegistroWhereInputObjectSchema } from './RegistroWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => RegistroUpdateWithoutDetallesInputObjectSchema), z.lazy(() => RegistroUncheckedUpdateWithoutDetallesInputObjectSchema)]),
  create: z.union([z.lazy(() => RegistroCreateWithoutDetallesInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutDetallesInputObjectSchema)]),
  where: z.lazy(() => RegistroWhereInputObjectSchema).optional()
}).strict();
export const RegistroUpsertWithoutDetallesInputObjectSchema: z.ZodType<Prisma.RegistroUpsertWithoutDetallesInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpsertWithoutDetallesInput>;
export const RegistroUpsertWithoutDetallesInputObjectZodSchema = makeSchema();
