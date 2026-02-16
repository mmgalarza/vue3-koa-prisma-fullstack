import { Context } from 'koa';
import { prisma } from '@prisma/prisma';
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
  ListByIdClienteDTO,
  // 🚀 Importamos el nuevo esquema atómico
  OperacionCheckoutSchema,
  OperacionCheckoutDTO
} from './dto';

export class OperacionController {

  // ==========================================
  // 🚀 CHECKOUT ATÓMICO (EL "ONE-SHOT")
  // ==========================================
  
  /**
   * Endpoint principal para el Kiosko.
   * Procesa toda la venta en una sola petición.
   */
  static async checkoutCompleto(ctx: Context) {
    // Validamos todo el paquete (detalles, cliente, total)
    const data: OperacionCheckoutDTO = OperacionCheckoutSchema.parse(ctx.request.body);
    
    // Llamada al servicio atómico
    const operacion = await OperacionService.createCompleta(data);
    
    ctx.status = 201;
    ctx.body = operacion;
  }

  // =========================
  // CRUD BÁSICO (Mantenidos)
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

    const operacion = await OperacionService.getById(idOperacion);
    if (!operacion) ctx.throw(404, 'Operación no encontrada');
    
    ctx.body = operacion;
  }

  static async list(ctx: Context) {
    ctx.body = await OperacionService.list();
  }

  static async listByIdCliente(ctx: Context) {
    const data: ListByIdClienteDTO = ListByIdClienteSchema.parse({
      idCliente: ctx.params.idCliente,
      ...ctx.query
    });

    if (!data.idCliente) ctx.throw(400, 'Es necesario el idCliente');

    const { items, total } = await OperacionService.listByIdCliente(
      data.idCliente, 
      data.page, 
      data.limit
    );

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

    ctx.body = await OperacionService.delete(idOperacion);
  }

  // =========================
  // DETALLES DE OPERACION
  // =========================

  static async addDetalle(ctx: Context) {
    const idOperacion = Number(ctx.params.id);
    if (isNaN(idOperacion)) ctx.throw(400, 'Id inválido');

    const data: OperacionDetalleCreateDTO = OperacionDetalleCreateSchema.parse(ctx.request.body);

    ctx.body = await OperacionService.agregarDetalle(
      idOperacion,
      data.idProducto,
      data.cantidad,
      data.precioUnitario
    );
  }

  static async updateDetalle(ctx: Context) {
    const idDetalle = Number(ctx.params.idDetalle);
    if (isNaN(idDetalle)) ctx.throw(400, 'Id detalle inválido');

    const data: OperacionDetalleUpdateDTO = OperacionDetalleUpdateSchema.parse(ctx.request.body);

    ctx.body = await OperacionService.updateDetalle(idDetalle, data);
  }

  static async removeDetalle(ctx: Context) {
    const idDetalle = Number(ctx.params.idDetalle);
    if (isNaN(idDetalle)) ctx.throw(400, 'Id detalle inválido');

    await OperacionService.removeDetalle(idDetalle);
    ctx.body = { deleted: true };
  }
  // =========================
  // ✅ CONFIRMAR PEDIDO (Faltaba este método)
  // =========================

  static async confirmarOperacion(ctx: Context) {
    const idOperacion = Number(ctx.params.id);
    if (isNaN(idOperacion)) ctx.throw(400, 'Id inválido');

    const data: ConfirmarOperacionDTO = ConfirmarOperacionSchema.parse(ctx.request.body);

    ctx.body = await OperacionService.confirmarOperacion(idOperacion, data);
  }

  // =========================
  // AJUSTAR STOCK (entrada/salida manual)
  // =========================

  static async ajustarStock(ctx: Context) {
    const idOperacion = Number(ctx.params.id);
    if (isNaN(idOperacion)) ctx.throw(400, 'Id inválido');

    const data: AjustarStockDTO = AjustarStockSchema.parse(ctx.request.body);
    
    // Pasamos null como tercer parámetro si el servicio espera un tx (Prisma)
    await OperacionService.ajustarStock(idOperacion, data.incrementar, prisma);

    ctx.body = { ok: true };
  }
}