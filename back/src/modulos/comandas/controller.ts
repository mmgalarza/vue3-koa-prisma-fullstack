import { Context } from 'koa';
import * as ComandaService from './service';
import { 
  CrearComandaInput, 
  CocineroComandaProductoInput, 
  ActualizarComandaProductoInput,
  EstadoComandaEnum 
} from './schema.dto';
import { ComandasError } from './error';

/**
 * Controller: ComandasController
 * Maneja las peticiones HTTP y delega la lógica al Service.
 */

export const crear = async (ctx: Context) => {
  const body = CrearComandaInput.parse(ctx.request.body);
  const id = await ComandaService.crearComanda(body.idOperacion, body.productos);
  ctx.status = 201;
  ctx.body = { idOperacion: id };
};

export const obtenerTodas = async (ctx: Context) => {
  const comandas = await ComandaService.obtenerTodasComandas();
  ctx.body = comandas;
};

export const obtenerPorId = async (ctx: Context) => {
  const id = parseInt(ctx.params.id);
  if (isNaN(id)) throw new ComandasError(1); // ID Inválido
  const comanda = await ComandaService.obtenerComanda(id);
  ctx.body = comanda;
};

export const obtenerPorEstado = async (ctx: Context) => {
  const estado = EstadoComandaEnum.parse(ctx.params.estado);
  const comandas = await ComandaService.obtenerComandasPorEstado(estado);
  ctx.body = comandas;
};

export const anular = async (ctx: Context) => {
  const id = parseInt(ctx.params.id);
  if (isNaN(id)) throw new ComandasError(1);
  await ComandaService.anularComanda(id);
  ctx.status = 204;
};

// Acciones de flujo de cocina

export const coger = async (ctx: Context) => {
  const body = CocineroComandaProductoInput.parse(ctx.request.body);
  await ComandaService.cogerPedido(body);
  ctx.status = 200;
  ctx.body = { message: 'Producto asignado al cocinero' };
};

export const servir = async (ctx: Context) => {
  const body = ActualizarComandaProductoInput.parse(ctx.request.body);
  if (body.servido === undefined || body.idCocinero === undefined) {
    throw new ComandasError(2); // Datos insuficientes para servir
  }
  await ComandaService.servirPedido(body);
  ctx.status = 200;
  ctx.body = { message: 'Avance de producción registrado' };
};

export const liberar = async (ctx: Context) => {
  const body = CocineroComandaProductoInput.parse(ctx.request.body);
  await ComandaService.liberarPedido(body);
  ctx.status = 200;
  ctx.body = { message: 'Producto liberado de la estación' };
};