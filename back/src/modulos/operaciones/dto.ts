import { z } from "zod";

/**
 * ────────────────
 * Crear operación BORRADOR
 * ────────────────
 */
export const OperacionCreateSchema = z.object({
  // Identidad del comprador al iniciar (opcional para modo Guest)
  idCliente: z.number().int().positive().optional().nullable(),
});

export type OperacionCreateDTO = z.infer<typeof OperacionCreateSchema>;

/**
 * ────────────────
 * Confirmar operación
 * ────────────────
 */
export const ConfirmarOperacionSchema = z.object({
  // Mantenemos esto por si el backend requiere trackear 
  // qué cajero/terminal cerró la venta, pero es opcional.
  usuarioId: z.number().int().positive().optional().nullable(),
  
  // Datos finales del cliente. 
  // Si ya se envió el idCliente al crear, esto puede venir vacío o null.
  cliente: z.object({
    idCliente: z.number().int().positive().optional(),
    nombre: z.string().min(1).optional(),
    email: z.string().email().optional(),
    calle: z.string().optional(),
    numero: z.string().optional(),
    ciudad: z.string().optional(),
    provincia: z.string().optional(),
    codigoPostal: z.string().optional(),
    pais: z.string().optional(),
    contacto: z.string().optional(),
  }).nullable().optional(),
});

export type ConfirmarOperacionDTO = z.infer<typeof ConfirmarOperacionSchema>;

/**
 * ────────────────
 * Detalles de operación
 * ────────────────
 */
export const OperacionDetalleCreateSchema = z.object({
  idProducto: z.number().int().positive(),
  cantidad: z.number().min(0.01),
  precioUnitario: z.number().min(0),
});

export type OperacionDetalleCreateDTO = z.infer<typeof OperacionDetalleCreateSchema>;

export const OperacionDetalleUpdateSchema = z.object({
  cantidad: z.number().min(0.01),
  precioUnitario: z.number().min(0),
});

export type OperacionDetalleUpdateDTO = z.infer<typeof OperacionDetalleUpdateSchema>;

/**
 * ────────────────
 * Consultas
 * ────────────────
 */
export const ListByIdClienteSchema = z.object({
  idCliente: z.coerce.number().int().positive().optional(), 
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().default(9),
});

export type ListByIdClienteDTO = z.infer<typeof ListByIdClienteSchema>;
export const AjustarStockSchema = z.object({
  incrementar: z.boolean(),
});

export type AjustarStockDTO = z.infer<typeof AjustarStockSchema>;

/**
 * ────────────────
 * Operación Completa (Checkout Atómico)
 * ────────────────
 */
export const OperacionCheckoutSchema = z.object({
  // Quien opera la terminal (Cajero)
  idUsuario: z.number().int().positive(),
  
  // Identidad del cliente (opcional si es Guest)
  idCliente: z.number().int().positive().optional().nullable(),

  // Array de detalles (Obligatorio al menos uno)
  detalles: z.array(OperacionDetalleCreateSchema).min(1, "La operación debe tener al menos un producto"),

  // Metadatos adicionales opcionales
  metodoPago: z.enum(['EFECTIVO', 'TARJETA', 'PUNTOS']).default('EFECTIVO'),
  total: z.number().min(0),
});

export type OperacionCheckoutDTO = z.infer<typeof OperacionCheckoutSchema>;