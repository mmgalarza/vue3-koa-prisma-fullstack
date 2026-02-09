import { Context } from 'koa';
import { EmpresaUpdateSchema } from './dto';
import * as empresaService from './service';

export const getEmpresa = async (ctx: Context) => {
  const empresa = await empresaService.getEmpresa();
  ctx.body = { empresa };
};

export const updateEmpresa = async (ctx: Context) => {
  const data = EmpresaUpdateSchema.parse(ctx.request.body);
  const empresa = await empresaService.updateEmpresa(data);
  ctx.body = { empresa, message: 'Empresa actualizada correctamente' };
};
