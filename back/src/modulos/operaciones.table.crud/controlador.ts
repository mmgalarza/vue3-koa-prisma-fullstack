import { Context } from 'koa';
import { OperacionService } from './service';
import {
  OperacionCreateDTO,
  OperacionDetalleCreateDTO,
  OperacionDetalleUpdateDTO,
  OperacionConfirmarDTO,
  OperacionCreateSchema,
  OperacionDetalleCreateSchema,
  OperacionDetalleUpdateSchema,
  OperacionConfirmarSchema,
} from './dto';

export class OperacionController {

  // =========================
  // OPERACIONES
  // =========================

  static async create(ctx: Context) {
    const data: OperacionCreateDTO = OperacionCreateSchema.parse(ctx.request.body);

    const operacion = await OperacionService.create(data);

    ctx.status = 201;
    ctx.body = operacion;
  }

  static async getById(ctx: Context) {
    const idOperacion = Number(ctx.params.id);

    ctx.body = await OperacionService.getById(idOperacion);
  }

  static async list(ctx: Context) {
    ctx.body = await OperacionService.list();
  }

  static async delete(ctx: Context) {
    const idOperacion = Number(ctx.params.id);

    const operacion = await OperacionService.delete(idOperacion);

    ctx.body = operacion;
  }

  // =========================
  // DETALLES
  // =========================

  static async addDetalle(ctx: Context) {
    const idOperacion = Number(ctx.params.id);
    const data: OperacionDetalleCreateDTO =
      OperacionDetalleCreateSchema.parse({ ...ctx.request.body, idOperacion });

    const detalle = await OperacionService.addDetalle(data);

    ctx.status = 201;
    ctx.body = detalle;
  }

  static async updateDetalle(ctx: Context) {
    const idDetalle = Number(ctx.params.idDetalle);
    const data: OperacionDetalleUpdateDTO =
      OperacionDetalleUpdateSchema.parse(ctx.request.body);

    const detalle = await OperacionService.updateDetalle(idDetalle, data);

    ctx.body = detalle;
  }

  static async removeDetalle(ctx: Context) {
    const idDetalle = Number(ctx.params.idDetalle);

    const result = await OperacionService.removeDetalle(idDetalle);

    ctx.body = result;
  }

  // =========================
  // CONFIRMAR
  // =========================

  static async confirmarOperacion(ctx: Context) {
    const idOperacion = Number(ctx.params.id);
    const data: OperacionConfirmarDTO =
      OperacionConfirmarSchema.parse(ctx.request.body);

    const operacion = await OperacionService.confirmarOperacion(idOperacion, data);

    ctx.body = operacion;
  }
}
