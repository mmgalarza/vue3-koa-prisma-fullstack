import { Context, Next } from 'koa';
import { Rol } from "@prisma/prisma/enums";

export async function requireAdmin(
  ctx: Context,
  next: Next
) {
  const user = ctx.state.user;

  if (!user) {
    ctx.status = 401;
    ctx.body = { error: 'UNAUTHORIZED' };
    return;
  }

  if (user.rol !== Rol.ADMIN) {
    ctx.status = 403;
    ctx.body = { error: 'FORBIDDEN' };
    return;
  }

  await next();
}
