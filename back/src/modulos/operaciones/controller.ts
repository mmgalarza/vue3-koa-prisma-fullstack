import { Context } from 'koa';
import { OperacionService } from './service';
import {
  OperacionCreateSchema,
  OperacionCreateDTO,
  ConfirmarOperacionSchema,
  ConfirmarOperacionDTO,
  OperacionDetalleCreateSchema,
  OperacionDetalleCreateDTO,
  OperacionDetalleUpdateSchema,
  OperacionDetalleUpdateDTO,
  AjustarStockSchema,
  AjustarStockDTO,
  ListByIdClienteSchema,
  ListByIdClienteDTO
} from './dto';

export class OperacionController {

  // =========================
  // CRUD BÁSICO
  // =========================

  static async create(ctx: Context) {
    const data: OperacionCreateDTO = OperacionCreateSchema.parse(ctx.request.body);
    const operacion = await OperacionService.create(data);
    ctx.status = 201;
    ctx.body = operacion;
  }

  static async getById(ctx: Context) {
    const idOperacion = Number(ctx.params.id);
    if (isNaN(idOperacion)) ctx.throw(400, 'Id inválido');

    ctx.body = await OperacionService.getById(idOperacion);
  }

  static async list(ctx: Context) {
    ctx.body = await OperacionService.list();
  }
  // Listar operaciones por idCliente
  // paginacion: page, limit
  static async listByIdCliente(ctx: Context) {
    const data: ListByIdClienteDTO = ListByIdClienteSchema.parse({
      idCliente: Number(ctx.params.idCliente),
      ...ctx.query
    });

    // Obtenemos los datos del servicio
    const { items, total } = await OperacionService.listByIdCliente(
      data.idCliente, 
      data.page, 
      data.limit
    );

    // Enviamos la estructura exacta que espera tu interfaz PagedResponse<T>
    ctx.body = {
      data: items,
      meta: {
        page: data.page,
        limit: data.limit,
        total: total
      }
    };
  }

  static async delete(ctx: Context) {
    const idOperacion = Number(ctx.params.id);
    if (isNaN(idOperacion)) ctx.throw(400, 'Id inválido');

    const operacion = await OperacionService.delete(idOperacion);
    ctx.body = operacion;
  }

  // =========================
  // DETALLES DE OPERACION
  // =========================

  static async addDetalle(ctx: Context) {
    const idOperacion = Number(ctx.params.id);
    if (isNaN(idOperacion)) ctx.throw(400, 'Id inválido');

    // Validar body con Zod
    const data: OperacionDetalleCreateDTO = OperacionDetalleCreateSchema.parse(ctx.request.body);

    const detalle = await OperacionService.agregarDetalle(
      idOperacion,
      data.idProducto,
      data.cantidad,
      data.precioUnitario
    );

    ctx.body = detalle;
  }

  static async updateDetalle(ctx: Context) {
    const idOperacion = Number(ctx.params.id);
    const idDetalle = Number(ctx.params.idDetalle);
    if (isNaN(idOperacion) || isNaN(idDetalle)) ctx.throw(400, 'Id inválido');

    const data: OperacionDetalleUpdateDTO = OperacionDetalleUpdateSchema.parse(ctx.request.body);

    const detalle = await OperacionService.updateDetalle(
      idOperacion,
      idDetalle,
      data
    );

    ctx.body = detalle;
  }

  static async removeDetalle(ctx: Context) {
    const idOperacion = Number(ctx.params.id);
    const idDetalle = Number(ctx.params.idDetalle);
    if (isNaN(idOperacion) || isNaN(idDetalle)) ctx.throw(400, 'Id inválido');

    await OperacionService.removeDetalle(idOperacion, idDetalle);
    ctx.body = { deleted: true };
  }

  // =========================
  // CONFIRMAR PEDIDO
  // =========================

  static async confirmarOperacion(ctx: Context) {
    const idOperacion = Number(ctx.params.id);
    if (isNaN(idOperacion)) ctx.throw(400, 'Id inválido');

    const data: ConfirmarOperacionDTO = ConfirmarOperacionSchema.parse(ctx.request.body);

    const operacion = await OperacionService.confirmarOperacion(idOperacion, data);
    ctx.body = operacion;
  }

  // =========================
  // AJUSTAR STOCK (entrada/salida)
  // =========================

  static async ajustarStock(ctx: Context) {
    const idOperacion = Number(ctx.params.id);
    if (isNaN(idOperacion)) ctx.throw(400, 'Id inválido');

    const data: AjustarStockDTO = AjustarStockSchema.parse(ctx.request.body);

    await OperacionService.ajustarStock(idOperacion, data.incrementar);

    ctx.body = { ok: true };
  }
}
