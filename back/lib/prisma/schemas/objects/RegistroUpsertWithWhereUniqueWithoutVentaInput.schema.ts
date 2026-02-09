import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroUpdateWithoutVentaInputObjectSchema as RegistroUpdateWithoutVentaInputObjectSchema } from './RegistroUpdateWithoutVentaInput.schema';
import { RegistroUncheckedUpdateWithoutVentaInputObjectSchema as RegistroUncheckedUpdateWithoutVentaInputObjectSchema } from './RegistroUncheckedUpdateWithoutVentaInput.schema';
import { RegistroCreateWithoutVentaInputObjectSchema as RegistroCreateWithoutVentaInputObjectSchema } from './RegistroCreateWithoutVentaInput.schema';
import { RegistroUncheckedCreateWithoutVentaInputObjectSchema as RegistroUncheckedCreateWithoutVentaInputObjectSchema } from './RegistroUncheckedCreateWithoutVentaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => RegistroUpdateWithoutVentaInputObjectSchema), z.lazy(() => RegistroUncheckedUpdateWithoutVentaInputObjectSchema)]),
  create: z.union([z.lazy(() => RegistroCreateWithoutVentaInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutVentaInputObjectSchema)])
}).strict();
export const RegistroUpsertWithWhereUniqueWithoutVentaInputObjectSchema: z.ZodType<Prisma.RegistroUpsertWithWhereUniqueWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpsertWithWhereUniqueWithoutVentaInput>;
export const RegistroUpsertWithWhereUniqueWithoutVentaInputObjectZodSchema = makeSchema();
