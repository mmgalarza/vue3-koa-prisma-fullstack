import Router from '@koa/router';
import { getEmpresa, updateEmpresa } from './controller';
import { authMiddleware } from '@modulos/auth/middleware';
import { requireAdmin } from '@modulos/usuarios/middleware';

const router = new Router({ prefix: '/api/empresa' });

/* ───────────────────────────────
   RUTAS PÚBLICAS
─────────────────────────────── */
//router.get('/', getEmpresa);

/* ───────────────────────────────
   RUTAS PRIVADAS
─────────────────────────────── */
const privateRouter = new Router();

privateRouter.use(authMiddleware, requireAdmin);
privateRouter.get('/', getEmpresa);
// Definimos todas las rutas privadas aquí
privateRouter.put('/', updateEmpresa);
//privateRouter.delete('/:id', deleteEmpresa);

router.use(privateRouter.routes());

export default router;
