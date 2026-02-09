import { Context } from 'koa';
import { perfilService } from './service';
import { updatePerfilSchema } from './dto';
import { ZodError } from 'zod';

export const obtenerPerfil = async (ctx: Context) => {
  try {
    // Unificamos: usamos 'user' y el atributo 'id' que viene del JWT
    const usuarioId = ctx.state.user.id; 
    
    const perfil = await perfilService.obtenerPerfil(usuarioId);
    
    // No es necesario el if(!perfil) aquí si el servicio ya lanza 
    // un error cuando no lo encuentra, pero lo mantenemos por seguridad.
    if (!perfil) {
      ctx.status = 404;
      ctx.body = { message: 'Perfil no encontrado' };
      return;
    }

    ctx.status = 200;
    ctx.body = perfil;
  } catch (err: any) {
    ctx.status = err.message.includes('encontrado') ? 404 : 500;
    ctx.body = { message: err.message || 'Error al obtener el perfil' };
  }
};

export const actualizarPerfil = async (ctx: Context) => {
  try {
    const usuarioId = ctx.state.user.id; 

    // 1. Validar esquema (Zod lanza error si falla)
    const data = updatePerfilSchema.parse(ctx.request.body);

    // 2. Llamar al servicio
    const perfilActualizado = await perfilService.actualizarPerfil(usuarioId, data);

    ctx.status = 200;
    ctx.body = { 
      message: 'Perfil actualizado con éxito',
      perfil: perfilActualizado 
    };

  } catch (err: any) {
    // Manejo específico para errores de validación de Zod
    if (err instanceof ZodError) {
      ctx.status = 400;
      ctx.body = { 
        message: 'Error de validación', 
        errors: err.issues 
      };
      return;
    }

    // Manejo de lógica de negocio
    if (err.message === 'El email ya está en uso') {
      ctx.status = 409; // Conflict
    } else {
      ctx.status = 400;
    }
    
    ctx.body = { message: err.message };
  }
};
