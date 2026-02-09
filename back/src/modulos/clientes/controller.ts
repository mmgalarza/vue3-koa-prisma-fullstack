import { Context } from 'koa';
import * as clienteService from './service';
import { ClienteCreateSchema, ClienteUpdateSchema } from './dto';

export class ClientesController {
  static getClientes = async (ctx: Context) => {
    ctx.body = await clienteService.getClientes();
  };

  static getCliente = async (ctx: Context) => {
    const id = Number(ctx.params.id);
    ctx.body = await clienteService.getCliente(id);
  };

  static createCliente = async (ctx: Context) => {
    const data = ClienteCreateSchema.parse(ctx.request.body);
    ctx.body = await clienteService.createCliente(data);
  };

  static updateCliente = async (ctx: Context) => {
    const id = Number(ctx.params.id);
    const data = ClienteUpdateSchema.parse(ctx.request.body);
    ctx.body = await clienteService.updateCliente(id, data);
  };

  static deleteCliente = async (ctx: Context) => {
    const id = Number(ctx.params.id);
    ctx.body = await clienteService.deleteCliente(id);
  };
}
