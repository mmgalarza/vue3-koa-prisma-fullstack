import { time } from 'node:console';
import { z } from 'zod';
import { id } from 'zod/v4/locales';

/**

// Cocineros y comandas

enum EstadoComanda {
  PENDIENTE    // Nadie ha reclamado ningún item
  SINCOCINA   // Comanda desatendida
  FINALIZADA   // Todos los items están en SERVIDO
  ENTREGADA    // El cliente ya recibió el pedido (Estado final manual)
}

// --- MODELOS ---

model Cocinero {
  idCocinero  Int    @id @default(autoincrement())
  nombre      String
  activo      Boolean   @default(true)
  
  comandasProductos  ComandaProductos[]

  createdAt DateTime  @default(now())
}

model Comanda {
  id           Int        @id @default(autoincrement())
  
  // Referencia al origen (Sistema de Ventas)
  idOperacion  Int           @unique
  operacion    Operaciones @relation(fields: [idOperacion], references: [idOperacion])
  
  // El estado es DERIVADO pero se persiste para consultas eficientes
  estado       EstadoComanda @default(PENDIENTE)

  productos        ComandaProductos[]
  
  createdAt    DateTime      @default(now())
  updatedAt    DateTime      @updatedAt

  @@index([estado])
}

model ComandaProductos {
  id           Int     @id @default(autoincrement())
  idComanda    Int

  idProducto   Int
  producto     Productos   @relation(fields: [idProducto], references: [idProducto])

  pedido     Int
  servido    Int @default(0)
  
  idCocinero   Int?       
  cocinero     Cocinero?     @relation(fields: [idCocinero], references: [idCocinero])
  
  comanda      Comanda    @relation(fields: [idComanda], references: [id], onDelete: Cascade)

  @@index([idProducto])
  @@index([idComanda])
  @@index([idCocinero])
}

 */
export const EstadoComandaEnum = z.enum(['PENDIENTE', 'SINCOCINA', 'FINALIZADA', 'ENTREGADA', 'ANULADA']);

export const ComandaProductosSchema = z.object({
  id: z.number().int(),
  idComanda: z.number(),
  idProducto: z.number(),
  pedido: z.number().int().min(0),
  servido: z.number().int().min(0),
  idCocinero: z.number().nullable(),
});

export const ComandaSchema = z.object({
  idOperacion: z.number(),
  estado: EstadoComandaEnum,
  productos: z.array(ComandaProductosSchema),
});

// Entradas

export const CrearComandaInput = z.object({
  idOperacion: z.number(),
  productos: z.array(z.object({
    idProducto: z.number(),
    pedido: z.number().int().min(1),
  })),
});

export const CocineroComandaProductoInput = z.object({
  idDetalleComanda: z.number(),
  idCocinero: z.number(),
});

export const ActualizarComandaProductoInput = z.object({
  idComanda: z.number().optional(),
  idDetalleComanda: z.number(),
  idProducto: z.number().optional(),
  pedido: z.number().int().min(0).optional(),
  servido: z.number().int().min(0).optional(),
  idCocinero: z.number().optional(),
});

export const CambiarEstadoComandaInput = z.object({
  idComanda: z.number(),
  nuevoEstado: EstadoComandaEnum,
});

// Salidas
export const ComandaProductoOutput = z.object({
  id: z.number().int(),
  idProducto: z.number(),
  pedido: z.number(),
  servido: z.number(),
  idCocinero: z.number().nullable(),
});

export const ComandaOutput = z.object({
  idComanda: z.number(),
  idOperacion: z.number().optional(), // Solo para eventos de actualización, no para creación
  stats: z.object({
    totalLineas: z.number(),
    lineasFinalizadas: z.number(),
    lineasPendientes: z.number(),
    lineasSinCocinero: z.number(),
    porcentaje: z.number().int().min(0).max(100),
  }),
  estado: EstadoComandaEnum,
  productos: z.array(ComandaProductoOutput),
});

// Eventos de notificación
export const TiposEventoComanda = z.enum([
  // --- Flujo Global de Comanda ---
  'NUEVA_COMANDA',        // Entrada desde ventas
  'COMANDA_ACTUALIZADA',  // Cambio genérico (fallback)
  'COMANDA_FINALIZADA',   // Todos los productos listos (pasa a columna verde)
  'COMANDA_ENTREGADA',    // Sale del monitor (entregada a cliente/mesero)
  'COMANDA_ELIMINADA',    // Anulada o borrada (limpia la UI)

  // --- Acciones de Interacción del Chef (Nuevas) ---
  'PRODUCTO_COGER',       // El chef reclama un ítem (botón SERVIR en rojo)
  'PRODUCTO_SOLTAR',      // El chef libera un ítem (botón SOLTAR)
  'PRODUCTO_SERVIDO',     // El chef incrementa la cantidad (barra de progreso)
  
  // --- Estados de Columna (Mantenidos) ---
  'COMANDA_SINCOCINA'     // Vuelve a estado crítico si se liberan todos los ítems
]);

export const EventoComandaPayload = z.object({
  tipo: TiposEventoComanda,
  data: ComandaOutput,
  timestamp: z.number().default(() => Date.now()),
});

// Inferencias de tipos
export type EstadoComanda = z.infer<typeof EstadoComandaEnum>;
export type ComandaProductos = z.infer<typeof ComandaProductosSchema>;
export type Comanda = z.infer<typeof ComandaSchema>;
export type CrearComandaInputType = z.infer<typeof CrearComandaInput>;
export type ActualizarComandaProductoInputType = z.infer<typeof ActualizarComandaProductoInput>;
export type CambiarEstadoComandaInputType = z.infer<typeof CambiarEstadoComandaInput>;
export type ComandaProductoOutputType = z.infer<typeof ComandaProductoOutput>;
export type ComandaOutputType = z.infer<typeof ComandaOutput>;
export type EventoComandaPayloadType = z.infer<typeof EventoComandaPayload>;
export type TiposEventoComandaType = z.infer<typeof TiposEventoComanda>;
export type CocineroComandaProductoInputType = z.infer<typeof CocineroComandaProductoInput>;




