import { z } from "zod";

// ────────────────
// Crear operación BORRADOR
// ────────────────
export const OperacionCreateSchema = z.object({
  usuarioId: z.number().int().positive(), // ID positivo
});

export type OperacionCreateDTO = z.infer<typeof OperacionCreateSchema>;

// ────────────────
// Confirmar operación con datos de cliente
// ────────────────
export const ConfirmarOperacionSchema = z.object({
  usuarioId: z.number().int().positive(),
  cliente: z.object({
    nombre: z.string().min(1),
    email: z.string().email(),
    calle: z.string().min(1),
    numero: z.string().optional(),
    ciudad: z.string().min(1),
    provincia: z.string().min(1),
    codigoPostal: z.string().min(1),
    pais: z.string().min(1),
    contacto: z.string().optional(),
  }),
});

export type ConfirmarOperacionDTO = z.infer<typeof ConfirmarOperacionSchema>;

// DTO para agregar detalle a operación
export const OperacionDetalleCreateSchema = z.object({
  idProducto: z.number(),
  cantidad: z.number().min(1),
  precioUnitario: z.number().min(0),
});

export type OperacionDetalleCreateDTO = z.infer<typeof OperacionDetalleCreateSchema>;

// DTO para actualizar detalle
export const OperacionDetalleUpdateSchema = z.object({
  cantidad: z.number().min(1),
  precioUnitario: z.number().min(0),
});

export type OperacionDetalleUpdateDTO = z.infer<typeof OperacionDetalleUpdateSchema>;

// DTO para ajustar stock
export const AjustarStockSchema = z.object({
  incrementar: z.boolean(),
});

export type AjustarStockDTO = z.infer<typeof AjustarStockSchema>;


/* LISTAR OPERACIONES POR CLIENTE - PAGINACIÓN */
export const ListByIdClienteSchema = z.object({
  idCliente: z.coerce.number().int().positive(), 
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().default(9),
});
export type ListByIdClienteDTO = z.infer<typeof ListByIdClienteSchema>;