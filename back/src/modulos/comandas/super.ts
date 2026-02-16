import { Server } from 'socket.io';
import { EventoComandaPayload, EventoComandaPayloadType } from './schema.dto';

/**
 * El Supervisor
 * Responsabilidad: Validar y emitir eventos de dominio a la red basados en el 
 * flujo de estados de ítem y estados derivados de Comanda.
 */

let io: Server;

export const initSupervisor = (socketServer: Server) => {
  io = socketServer;
  console.log('📢 Supervisor de cocina listo y escuchando eventos...');
};

/**
 * Notificar: Emite eventos confirmados (NUEVA_COMANDA, PRODUCTO_SERVIDO, etc.)
 * a todas las estaciones de cocina.
 */
export const notificar = (evento: Partial<EventoComandaPayloadType>) => {
  try {
    // Validar y completar timestamp
    const eventoValidado = EventoComandaPayload.parse({
      ...evento,
      timestamp: evento.timestamp ?? Date.now(), // Zod espera number
    });

    if (io) {
      // Emitimos a todos los clientes de cocina
      // Aquí puedes emitir a WebSocket, Kafka, email, etc.
      io.emit('cocina_update', eventoValidado);
      console.log(`✅ Supervisor emitió: ${eventoValidado.tipo}`);
    } else {
      console.warn('⚠️ Supervisor sin megáfono (io no inicializado)');
    }
  } catch (error) {
    console.error('❌ Supervisor bloqueó un evento corrupto o fuera de esquema:', error);
  }
};

/**
 * Susurrar: Enviar actualización específica a una sesión de cocinero.
 */
export const susurrarACocinero = (cocineroId: string, evento: Partial<EventoComandaPayloadType>) => {
  if (!io) {
    console.warn('⚠️ Supervisor sin megáfono (io no inicializado)');
    return;
  }

  try {
    const eventoValidado = EventoComandaPayload.parse({
      ...evento,
      timestamp: evento.timestamp ?? Date.now(),
    });
    io.to(cocineroId).emit('cocina_privado', eventoValidado);
    console.log(`🗣 Supervisor susurró a cocinero ${cocineroId}: ${eventoValidado.tipo}`);
  } catch (error) {
    console.error('❌ Error al susurrar evento:', error);
  }
};
