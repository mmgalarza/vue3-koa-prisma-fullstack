import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { prisma } from "../lib/prisma"; 

const app = new Koa();
app.use(bodyParser());

app.use(async (ctx) => {
  if (ctx.path === "/users") {
    try {
      const usuarios = await prisma.usuarios.findMany();
      ctx.body = usuarios;
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: "Error al obtener usuarios" };
    }
  } else {
    ctx.body = "Backend con Koa + Prisma + ESM ✅";
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
