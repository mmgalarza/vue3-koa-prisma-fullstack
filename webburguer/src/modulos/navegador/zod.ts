import { z } from 'zod';

// Definimos un tipo recursivo primero
export interface ItemBrowserType {
  id: string;
  nombre: string;
  slug: string;
  imagenUrl: string;
  nivel: 'familia' | 'madre' | 'hija' | 'producto';
  precio?: number;
  hijos: ItemBrowserType[];
}

// Ahora sí podemos usar ZodType<ItemBrowserType>
export const ItemBrowserSchema: z.ZodType<ItemBrowserType> = z.lazy(() =>
  z.object({
    id: z.string().min(1),
    nombre: z.string().min(1),
    slug: z.string().min(1),
    imagenUrl: z.string().url(),
    nivel: z.enum(['familia', 'madre', 'hija', 'producto']),
    precio: z.number().positive().optional(),
    hijos: z.array(ItemBrowserSchema)
  }).superRefine((item, ctx) => {
    if (item.nivel === 'producto' && item.precio === undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Los productos deben tener precio"
      });
    }
    if (item.nivel !== 'producto' && item.precio !== undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Solo los productos pueden tener precio"
      });
    }
  })
);

// Array de items
export const ItemBrowserArraySchema = z.array(ItemBrowserSchema);
