import * as z from 'zod';
import type { Prisma } from '../../client';
import { RegistroCreateWithoutDetallesInputObjectSchema as RegistroCreateWithoutDetallesInputObjectSchema } from './RegistroCreateWithoutDetallesInput.schema';
import { RegistroUncheckedCreateWithoutDetallesInputObjectSchema as RegistroUncheckedCreateWithoutDetallesInputObjectSchema } from './RegistroUncheckedCreateWithoutDetallesInput.schema';
import { RegistroCreateOrConnectWithoutDetallesInputObjectSchema as RegistroCreateOrConnectWithoutDetallesInputObjectSchema } from './RegistroCreateOrConnectWithoutDetallesInput.schema';
import { RegistroUpsertWithoutDetallesInputObjectSchema as RegistroUpsertWithoutDetallesInputObjectSchema } from './RegistroUpsertWithoutDetallesInput.schema';
import { RegistroWhereUniqueInputObjectSchema as RegistroWhereUniqueInputObjectSchema } from './RegistroWhereUniqueInput.schema';
import { RegistroUpdateToOneWithWhereWithoutDetallesInputObjectSchema as RegistroUpdateToOneWithWhereWithoutDetallesInputObjectSchema } from './RegistroUpdateToOneWithWhereWithoutDetallesInput.schema';
import { RegistroUpdateWithoutDetallesInputObjectSchema as RegistroUpdateWithoutDetallesInputObjectSchema } from './RegistroUpdateWithoutDetallesInput.schema';
import { RegistroUncheckedUpdateWithoutDetallesInputObjectSchema as RegistroUncheckedUpdateWithoutDetallesInputObjectSchema } from './RegistroUncheckedUpdateWithoutDetallesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => RegistroCreateWithoutDetallesInputObjectSchema), z.lazy(() => RegistroUncheckedCreateWithoutDetallesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => RegistroCreateOrConnectWithoutDetallesInputObjectSchema).optional(),
  upsert: z.lazy(() => RegistroUpsertWithoutDetallesInputObjectSchema).optional(),
  connect: z.lazy(() => RegistroWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => RegistroUpdateToOneWithWhereWithoutDetallesInputObjectSchema), z.lazy(() => RegistroUpdateWithoutDetallesInputObjectSchema), z.lazy(() => RegistroUncheckedUpdateWithoutDetallesInputObjectSchema)]).optional()
}).strict();
export const RegistroUpdateOneRequiredWithoutDetallesNestedInputObjectSchema: z.ZodType<Prisma.RegistroUpdateOneRequiredWithoutDetallesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.RegistroUpdateOneRequiredWithoutDetallesNestedInput>;
export const RegistroUpdateOneRequiredWithoutDetallesNestedInputObjectZodSchema = makeSchema();
