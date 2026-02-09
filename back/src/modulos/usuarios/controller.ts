import { Context } from 'koa';
import * as usuarioService from './service';
import { CrearUsuarioDto, CrearUsuarioSchema, ActualizarUsuarioDto, ActualizarUsuarioSchema, ListarUsuariosDto, ListarUsuariosSchema  } from './dto';

export const crearUsuario = async (ctx: Context) => {
  try {
    const data: CrearUsuarioDto = CrearUsuarioSchema.parse(ctx.request.body);
    const newUser = await usuarioService.crearUsuario(data);
    ctx.status = 201;
    ctx.body = { user: newUser };
  }
  catch (err: any) {
    ctx.status = 400;
    ctx.body = { message: err.message };
  }
};

export const actualizarUsuario = async (ctx: Context) => {
  const id = parseInt(ctx.params.id);
  const data: ActualizarUsuarioDto = ActualizarUsuarioSchema.parse(ctx.request.body);

  try {
    const updatedUser = await usuarioService.actualizarUsuario(id, data);
    ctx.body = { user: updatedUser };
  } catch (err: any) {
    if (err.code === 'P2025') { // Prisma error: registro no encontrado
      ctx.status = 404;
      ctx.body = { message: 'Usuario no encontrado' };
    } else {
      ctx.status = 400;
      ctx.body = { message: err.message };
    }
  }
};

export const listarUsuarios = async (ctx: Context) => {
  const query: ListarUsuariosDto = ListarUsuariosSchema.parse(ctx.request.query);
  const users = await usuarioService.obtenerUsuarios(query);
  //ctx.body = "Listado de usuarios... ✅";
  ctx.body = users;
};

export const obtenerUsuario = async (ctx: Context) => {
  const id = parseInt(ctx.params.id);
  const user = await usuarioService.obtenerUsuarioPorId(id);
  if (!user) {
    ctx.status = 404;
    ctx.body = { message: 'Usuario no encontrado' };
    return;
  }
  ctx.body = user;
};

export const eliminarUsuario = async (ctx: Context) => {
  const id = parseInt(ctx.params.id);
  try {
    await usuarioService.eliminarUsuario(id);
    ctx.status = 204; // No Content
  }
  catch (err: any) {
    if (err.code === 'P2025') { // Prisma error: registro no encontrado
      ctx.status = 404;
      ctx.body = { message: 'Usuario no encontrado' };
    } else {
      ctx.status = 400;
      ctx.body = { message: err.message };
    } 
  }
};  
