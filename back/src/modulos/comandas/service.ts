import { prisma } from '@prisma/prisma';
import { ComandaAggregate } from './aggregate';
import { ComandasError } from './error';
import * as Supervisor from './super';
import type { CocineroComandaProductoInputType, ActualizarComandaProductoInputType } from './schema.dto';

/**
 * Función auxiliar para despachar eventos acumulados en el Agregado.
 * Esto asegura que el Supervisor emita el tipo de evento correcto 
 * (NUEVA_COMANDA, SINCOCINA, FINALIZADA, etc.) según el estado del dominio.
 */
function despacharEventos(aggregate: ComandaAggregate) {
  const eventos = aggregate.pullEvents();
  eventos.forEach(evento => {
    Supervisor.notificar(evento);
  });
}

// --- CONSULTAS ---

export async function obtenerComanda(idOperacion: number) {
  const comandaDB = await prisma.comanda.findUnique({
    where: { idOperacion },
    include: { productos: true },
  });
  if (!comandaDB) throw new ComandasError(3);

  const aggregate = new ComandaAggregate(comandaDB.id, comandaDB.idOperacion, comandaDB.productos);

  return {
    idComanda: aggregate.getIdComanda(),
    idOperacion: aggregate.getIdOperacion(),
    estado: aggregate.getEstado(),
    stats: aggregate.getResumenItems(),
    productos: aggregate.getProductos(),
  };
}

export async function obtenerTodasComandas() {
  const comandasDB = await prisma.comanda.findMany({
    include: { productos: true },
  });

  return comandasDB.map(c => {
    const aggregate = new ComandaAggregate(c.id, c.idOperacion, c.productos);
    return {
      idComanda: aggregate.getIdComanda(),
      idOperacion: aggregate.getIdOperacion(),
      estado: aggregate.getEstado(),
      stats: aggregate.getResumenItems(),
      productos: aggregate.getProductos(),
    };
  });
}

export async function obtenerComandasPorEstado(estado: string) {
  const comandasDB = await prisma.comanda.findMany({
    include: { productos: true },
  });

  return comandasDB
    .map(c => {
      const aggregate = new ComandaAggregate(c.id, c.idOperacion, c.productos);
      return {
        idComanda: aggregate.getIdComanda(),
        idOperacion: aggregate.getIdOperacion(),
        estado: aggregate.getEstado(),
        stats: aggregate.getResumenItems(),
        productos: aggregate.getProductos(),
      };
    })
    .filter(c => c.estado === estado);
}

// --- ACCIONES (ESCRITURA) ---

export async function crearComanda(idOperacion: number, productos: { idProducto: number; pedido: number }[]) {
  const productosIniciales = productos.map(p => ({ ...p, idCocinero: null, servido: 0 }));

  const comandaDB = await prisma.comanda.create({
    data: {
      idOperacion,
      productos: { create: productosIniciales },
    },
    include: { productos: true },
  });
// Asegúrate de pasar: 1. ID DB, 2. ID Operación, 3. Array de productos
  const comanda = new ComandaAggregate(comandaDB.id, comandaDB.idOperacion, comandaDB.productos);
  
  // Al crearla, el Agregado detectará que está 'SINCOCINA' y registrará el evento
  despacharEventos(comanda);
  
  return comanda.getIdComanda();
}

export async function anularComanda(idComanda: number) {
  const res = await prisma.comanda.delete({
    where: { id: idComanda },
  });

  // Notificación directa de infraestructura por eliminación física
  Supervisor.notificar({
    tipo: 'COMANDA_ELIMINADA',
    data: { idComanda, estado: 'ANULADA', stats: { totalLineas: 0, lineasFinalizadas: 0, lineasPendientes: 0, lineasSinCocinero: 0, porcentaje: 0 }, productos: [] },
  });
}

export async function cogerPedido(input: CocineroComandaProductoInputType) {
  const comandaDB = await prisma.comanda.findFirst({
    where: { productos: { some: { id: input.idDetalleComanda } } },
    include: { productos: true },
  });

  if (!comandaDB) throw new ComandasError(3);

  const aggregate = new ComandaAggregate(comandaDB.id, comandaDB.idOperacion, comandaDB.productos);

  // El Agregado cambia el estado de SINCOCINA a PENDIENTE si es el primer cocinero
  aggregate.asignarCocinero(input.idDetalleComanda, input.idCocinero);

  await prisma.comandaProductos.updateMany({
    where: { id: input.idDetalleComanda },
    data: { idCocinero: input.idCocinero },
  });

  despacharEventos(aggregate);
}

export async function servirPedido(input: ActualizarComandaProductoInputType) {
  const comandaDB = await prisma.comanda.findFirst({
    where: { productos: { some: { id: input.idDetalleComanda } } },
    include: { productos: { orderBy: { id: 'asc' } } },
  });

  if (!comandaDB) throw new ComandasError(3);

  const aggregate = new ComandaAggregate(comandaDB.id, comandaDB.idOperacion, comandaDB.productos);

  // El Agregado valida cantidades y emite PRODUCTO_SERVIDO o COMANDA_FINALIZADA
  aggregate.servirProducto(input.idDetalleComanda, input.idCocinero!, input.servido!);

  const res = await prisma.comandaProductos.updateMany({
    where: { id: input.idDetalleComanda },
    data: { servido: input.servido, idCocinero: input.idCocinero },
  });
  console.log(`✅ Registros actualizados en Postgres: ${res.count}`);
    
  if (res.count === 0) {
      console.error("🚨 Ojo: No se encontró ningún producto con ID:", input.idProducto, "en la comanda:", input.idComanda);
  }

  despacharEventos(aggregate);
}

export async function liberarPedido(input: CocineroComandaProductoInputType) {
  const comandaDB = await prisma.comanda.findFirst({
    where: { productos: { some: { id: input.idDetalleComanda } } },
    include: { productos: true },
  });

  if (!comandaDB) throw new ComandasError(3);

  const aggregate = new ComandaAggregate(comandaDB.id, comandaDB.idOperacion, comandaDB.productos);

  aggregate.liberarProducto(input.idDetalleComanda, input.idCocinero);

  await prisma.comandaProductos.updateMany({
    where: { id: input.idDetalleComanda, idCocinero: input.idCocinero },
    data: { idCocinero: null },
  });

  despacharEventos(aggregate);
}