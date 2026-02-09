import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroUpdateWithoutVentaInputObjectSchema as RegistroUpdateWithoutVentaInputObjectSchema } from './RegistroUpdateWithoutVentaInput.schema';
import { RegistroUncheckedUpdateWithoutVentaInputObjectSchema as RegistroUncheckedUpdateWithoutVentaInputObjectSchema } from './RegistroUncheckedUpdateWithoutVentaInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => RegistroWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => RegistroUpdateWithoutVentaInputObjectSchema), z.lazy(() => RegistroUncheckedUpdateWithoutVentaInputObjectSchema)])
}).strict();
export const RegistroUpdateWithWhereUniqueWithoutVentaInputObjectSchema: z.ZodType<Prisma.RegistroUpdateWithWhereUniqueWithoutVentaInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateWithWhereUniqueWithoutVentaInput>;
export const RegistroUpdateWithWhereUniqueWithoutVentaInputObjectZodSchema = makeSchema();
