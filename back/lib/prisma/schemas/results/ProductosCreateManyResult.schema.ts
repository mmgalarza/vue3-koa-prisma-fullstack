import * as z from 'zod';
export const ProductosCreateManyResultSchema = z.object({
  count: z.number()
});