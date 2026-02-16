import { z } from 'zod';

// ==========================================
// 1. MÓDULO: IDENTIDAD Y AUTH
// ==========================================

export const UsuarioSchema = z.object({
  idUsuario: z.number(),
  username: z.string(),
  email: z.string().email(),
  nombre: z.string(),
  activo: z.boolean(),
  creadoEn: z.string().datetime().optional(),
  actualizadoEn: z.string().datetime().optional(),
  rol: z.enum(['ADMIN', 'REGISTRADO']),
});

export const AuthUserSchema = UsuarioSchema.extend({
  id: z.number(), 
  idCliente: z.number().nullable(),
});

export const LoginResponseSchema = z.object({
  message: z.string(),
  user: AuthUserSchema,
  token: z.string(),
  expiresIn: z.number().optional(),
});

export type Usuario = z.infer<typeof UsuarioSchema>;
export type AuthUser = z.infer<typeof AuthUserSchema>;
export type LoginResponse = z.infer<typeof LoginResponseSchema>;

// ==========================================
// 2. MÓDULO: CATEGORÍAS
// ==========================================

export const CategoriaSchema: z.ZodType<any> = z.lazy(() =>
  z.object({
    idCategoria: z.number(),
    nombre: z.string(),
    descripcion: z.string().nullable(),
    icono: z.string().nullable(),
    tipo: z.enum(['FAMILIA', 'MADRE', 'HIJA']),
    activo: z.boolean(),
    idCategoriaPadre: z.number().nullable(),
    subcategorias: z.array(CategoriaSchema).optional(),
  })
);

export type Categoria = z.infer<typeof CategoriaSchema>;

// ==========================================
// 3. MÓDULO: PRODUCTOS Y DESCUENTOS
// ==========================================

export const DescuentoSchema = z.object({
  codigo: z.string(),
  valor: z.number(),
  tipo: z.enum(['fijo', 'porcentaje']),
  categoriaId: z.string().optional(),
  cnt: z.number(),
});

export const ProductoImagenSchema = z.object({
  idImagen: z.number(),
  url: z.string().url(),
  orden: z.number(),
  activo: z.boolean(),
  alt: z.string().nullable().optional(), 
  principal: z.boolean().optional(),
});

export const ProductoSchema = z.object({
  idProducto: z.number(),
  nombre: z.string(),
  descripcion: z.string().nullable(),
  // Prisma Decimal viene como string/number, forzamos a number para el front
  precios: z.preprocess((val) => Number(val), z.number()), 
  stock: z.number().int(),
  activo: z.boolean(),
  categoria: z.object({
    idCategoria: z.number(),
    nombre: z.string(),
  }),
  imagenes: z.array(ProductoImagenSchema),
});

export type Producto = z.infer<typeof ProductoSchema>;
export type Descuento = z.infer<typeof DescuentoSchema>;

// ==========================================
// 4. MÓDULO: OPERACIONES Y CLIENTES (Ajustado)
// ==========================================

export const ClienteSchema = z.object({
  idCliente: z.number(),
  nombre: z.string(),
  email: z.string().email(),
  calle: z.string().nullable().optional(),
  ciudad: z.string().nullable().optional(),
  puntos: z.number().optional(),
});

export const OperacionDetalleSchema = z.object({
  idDetalle: z.number().optional(),
  idOperacion: z.number().optional(),
  idProducto: z.number(),
  // Coerción de tipos para evitar errores con Decimal de la DB
  cantidad: z.preprocess((val) => Number(val), z.number()),
  precioUnitario: z.preprocess((val) => Number(val), z.number()),
  subtotal: z.preprocess((val) => Number(val), z.number()),
});

export const OperacionSchema = z.object({
  idOperacion: z.number(),
  estado: z.enum(['BORRADOR', 'CONFIRMADA', 'ANULADA']),
  total: z.preprocess((val) => Number(val), z.number()),
  
  // ✅ Relación opcional para ventas anónimas
  idCliente: z.number().nullable().optional(),
  cliente: ClienteSchema.nullable().optional(),
  
  operacionesDetalle: z.array(OperacionDetalleSchema).default([]),
}).passthrough();

// ==========================================
// 5. MÓDULO: DTO DE CIERRE / CONFIRMACIÓN
// ==========================================

export const VentaDirectaSchema = z.object({
  // Puede ser null si es una venta rápida de Kiosko
  usuarioId: z.number().nullable().optional(),
  idCliente: z.number().nullable().optional(),
  cliente: ClienteSchema.nullable().optional(),
  items: z.array(OperacionDetalleSchema),
  total: z.preprocess((val) => Number(val), z.number()),
  puntosCanjeados: z.number().default(0),
});

export type VentaDirecta = z.infer<typeof VentaDirectaSchema>;
export type Cliente = z.infer<typeof ClienteSchema>; 
export type Operacion = z.infer<typeof OperacionSchema>;
export type OperacionDetalle = z.infer<typeof OperacionDetalleSchema>;